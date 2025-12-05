export interface GumroadProduct {
    id: string;
    name: string;
    thumbnail_url: string;
    url: string;
    price: number;
    formatted_price: string;
    published: boolean;
    tags: string[];
    description: string;
    short_url: string;
    custom_permalink?: string;
}

interface GumroadResponse {
    success: boolean;
    products: any[];
}

// Helper function to strip HTML tags and decode HTML entities
function stripHtml(html: string): string {
    if (!html) return '';

    // Remove HTML tags
    let text = html.replace(/<[^>]*>/g, '');

    // Decode common HTML entities
    const entities: Record<string, string> = {
        '&nbsp;': ' ',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&hellip;': '...',
    };

    Object.entries(entities).forEach(([entity, char]) => {
        text = text.replace(new RegExp(entity, 'g'), char);
    });

    // Clean up extra whitespace
    text = text.replace(/\s+/g, ' ').trim();

    return text;
}

export async function getProducts(): Promise<GumroadProduct[]> {
    const token = import.meta.env.GUMROAD_ACCESS_TOKEN;

    if (!token) {
        console.warn('GUMROAD_ACCESS_TOKEN is not set. Returning empty product list.');
        return [];
    }

    try {
        const response = await fetch('https://api.gumroad.com/v2/products', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.error(`Gumroad API Error: ${response.status} ${response.statusText}`);
            return [];
        }

        const data: GumroadResponse = await response.json();

        if (!data.success || !data.products) {
            return [];
        }

        return data.products
            .filter((p: any) => p.published)
            .map((p: any) => ({
                id: p.id,
                name: p.name,
                thumbnail_url: p.thumbnail_url,
                url: p.custom_permalink || p.url || p.short_url,
                price: p.price,
                formatted_price: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: p.currency || 'USD',
                }).format(p.price / 100),
                published: p.published,
                tags: p.tags || [],
                description: stripHtml(p.description_text || p.description || ''),
                short_url: p.short_url
            }));
    } catch (error) {
        console.error('Failed to fetch Gumroad products:', error);
        return [];
    }
}


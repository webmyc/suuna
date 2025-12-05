// Alternative: Scrape events from Luma's public calendar page
export async function scrapeLumaEvents() {
  try {
    const response = await fetch('https://lu.ma/suuna', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      console.warn('Failed to fetch Luma page:', response.status);
      return [];
    }

    const html = await response.text();

    // Extract event data from the HTML
    // Luma uses a specific structure - look for event cards
    const events: any[] = [];

    // Try to extract JSON-LD structured data if available
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (jsonLdMatch) {
      try {
        const jsonData = JSON.parse(jsonLdMatch[1]);
        if (jsonData['@type'] === 'ItemList' && jsonData.itemListElement) {
          return jsonData.itemListElement.map((item: any) => ({
            id: item.url?.split('/').pop() || 'unknown',
            url: item.url || 'https://lu.ma/suuna',
            title: item.name || 'SUUNA Event',
            start: item.startDate || new Date().toISOString(),
            end: item.endDate || item.startDate || new Date().toISOString(),
            location: item.location?.name || 'Online',
            image: item.image || '/images/events/default.jpg',
            host: item.organizer?.name || 'SUUNA Community',
            price: item.offers?.price ? `€${item.offers.price}` : 'Free',
            tags: [],
            excerpt: item.description?.substring(0, 200) || '',
          }));
        }
      } catch (e) {
        console.warn('Failed to parse JSON-LD:', e);
      }
    }

    // Fallback: Look for event links in the HTML
    const eventUrlPattern = /lu\.ma\/([a-zA-Z0-9-]+)/g;
    const eventUrls = [...html.matchAll(eventUrlPattern)]
      .map(m => m[1])
      .filter(id => id !== 'suuna' && id !== 'embed')
      .slice(0, 10);

    for (const eventId of eventUrls) {
      events.push({
        id: eventId,
        url: `https://lu.ma/${eventId}`,
        title: 'SUUNA Community Event',
        start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
        location: 'See event page for details',
        image: '/images/events/default.jpg',
        host: 'SUUNA Community',
        price: 'See event page',
        tags: [],
        excerpt: `Visit lu.ma/${eventId} for full event details, date, location, and registration.`,
      });
    }

    return events;
  } catch (error) {
    console.error('Error scraping Luma events:', error);
    return [];
  }
}

// Fetch the latest article from SUUNA's Substack
export async function fetchLatestSubstackArticle() {
  try {
    const response = await fetch('https://suuna.substack.com/feed', {
      headers: {
        'User-Agent': 'SUUNA-Website/1.0',
      },
    });

    if (!response.ok) {
      console.warn('Substack feed returned status:', response.status);
      return getFallbackArticle();
    }

    const xml = await response.text();

    if (!xml || xml.length === 0) {
      console.warn('Substack feed returned empty content');
      return getFallbackArticle();
    }

    // Parse RSS feed XML - find first item
    const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/);
    if (!itemMatch) {
      console.warn('No items found in Substack feed');
      return getFallbackArticle();
    }

    const item = itemMatch[1];

    // Extract title - handle both CDATA and plain text
    let title = 'Latest from SUUNA';
    const titleCdataMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const titlePlainMatch = item.match(/<title>(.*?)<\/title>/);
    if (titleCdataMatch) {
      title = titleCdataMatch[1];
    } else if (titlePlainMatch) {
      title = titlePlainMatch[1];
    }

    // Extract link
    const linkMatch = item.match(/<link>(.*?)<\/link>/);
    const link = linkMatch ? linkMatch[1].trim() : 'https://suuna.substack.com';

    // Extract description - handle both CDATA and plain text
    let description = '';
    const descCdataMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s);
    const descPlainMatch = item.match(/<description>(.*?)<\/description>/s);
    if (descCdataMatch) {
      description = descCdataMatch[1];
    } else if (descPlainMatch) {
      description = descPlainMatch[1];
    }

    // Extract publication date
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const pubDate = pubDateMatch ? pubDateMatch[1] : new Date().toISOString();

    // Extract image from multiple sources
    let image = '/images/default-article.jpg';

    // Try enclosure first (podcast/media)
    const enclosureMatch = item.match(/<enclosure[^>]+url="([^"]+)"[^>]*\/>/);
    if (enclosureMatch && enclosureMatch[1].match(/\.(jpg|jpeg|png|gif|webp)/i)) {
      image = enclosureMatch[1];
    } else {
      // Try content:encoded
      const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
      if (contentMatch) {
        // Look for img tags in content
        const imgMatch = contentMatch[1].match(/<img[^>]+src="([^"]+)"/);
        if (imgMatch) {
          image = imgMatch[1];
        }
      } else {
        // Try description for images
        const descImgMatch = description.match(/<img[^>]+src="([^"]+)"/);
        if (descImgMatch) {
          image = descImgMatch[1];
        }
      }
    }

    // Clean up description (remove HTML tags and entities)
    const cleanDescription = description
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&rsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim()
      .substring(0, 250) + '...';

    // Clean up title (remove HTML entities)
    const cleanTitle = title
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&rsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .trim();

    return {
      title: cleanTitle,
      link,
      description: cleanDescription,
      image,
      pubDate,
    };
  } catch (error) {
    console.error('Error fetching Substack article:', error);
    return getFallbackArticle();
  }
}

function getFallbackArticle() {
  return {
    title: 'Latest from SUUNA',
    link: 'https://suuna.substack.com',
    description: 'Discover the latest stories, insights, and wisdom from our community of guides and practitioners.',
    image: '/images/default-article.jpg',
    pubDate: new Date().toISOString(),
  };
}

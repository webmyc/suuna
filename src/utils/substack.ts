// Substack RSS feed parser utility
export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image?: string;
  author: string;
}

export interface SubstackFeed {
  title: string;
  description: string;
  url: string;
  posts: SubstackPost[];
}

// Parse RSS XML to extract posts
function parseRSSFeed(xmlText: string, authorName: string): SubstackPost[] {
  const posts: SubstackPost[] = [];
  
  // Simple regex-based parsing for server-side compatibility
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  let count = 0;
  
  while ((match = itemRegex.exec(xmlText)) !== null && count < 3) {
    const itemContent = match[1];
    
    const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
    const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
    const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
    const descriptionMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/);
    
    if (titleMatch && linkMatch && pubDateMatch) {
      const title = titleMatch[1] || titleMatch[2] || '';
      const link = linkMatch[1] || '';
      const pubDate = pubDateMatch[1] || '';
      const description = descriptionMatch ? (descriptionMatch[1] || descriptionMatch[2] || '') : '';
      
      // Extract image from description
      let image = '';
      const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) {
        image = imgMatch[1];
      }
      
      posts.push({
        title: title.trim(),
        link: link.trim(),
        pubDate: pubDate.trim(),
        description: description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        image,
        author: authorName
      });
      
      count++;
    }
  }
  
  return posts;
}

// Fetch Substack feed
export async function fetchSubstackFeed(url: string, authorName: string): Promise<SubstackFeed> {
  try {
    const feedUrl = `${url}/feed`;
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SUUNA-Bot/1.0)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch feed: ${response.status}`);
    }
    
    const xmlText = await response.text();
    const posts = parseRSSFeed(xmlText, authorName);
    
    return {
      title: authorName,
      description: `Latest posts from ${authorName}`,
      url,
      posts
    };
  } catch (error) {
    console.error(`Error fetching Substack feed for ${authorName}:`, error);
    return {
      title: authorName,
      description: `Latest posts from ${authorName}`,
      url,
      posts: []
    };
  }
}

// Fetch all Substack feeds
export async function fetchAllSubstackFeeds(): Promise<SubstackFeed[]> {
  const feeds = [
    { url: 'https://suuna.substack.com', name: 'SUUNA Community' },
    { url: 'https://danadragomirescu.substack.com', name: 'Dana Dragomirescu' },
    { url: 'https://melissalouise.substack.com', name: 'Melissa Louise' },
    { url: 'https://lauramariayara.substack.com', name: 'Laura Maria Yara' },
    { url: 'https://reflectorsreflections.substack.com', name: "Reflector's Reflections" },
  ];
  
  const feedPromises = feeds.map(feed => 
    fetchSubstackFeed(feed.url, feed.name)
  );
  
  return Promise.all(feedPromises);
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

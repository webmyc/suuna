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
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const items = xmlDoc.querySelectorAll('item');
  
  const posts: SubstackPost[] = [];
  
  items.forEach((item, index) => {
    if (index >= 3) return; // Only get top 3 posts
    
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';
    
    // Extract image from description or content
    let image = '';
    const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) {
      image = imgMatch[1];
    }
    
    posts.push({
      title,
      link,
      pubDate,
      description: description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      image,
      author: authorName
    });
  });
  
  return posts;
}

// Fetch Substack feed
export async function fetchSubstackFeed(url: string, authorName: string): Promise<SubstackFeed> {
  try {
    const feedUrl = `${url}/feed`;
    const response = await fetch(feedUrl);
    
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

// Substack RSS feed parser utility
import { loadArticlesFromCache, saveArticlesToCache } from './cache';

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
  
  while ((match = itemRegex.exec(xmlText)) !== null && count < 6) {
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
      
      // Extract image from description with multiple fallback methods
      let image = '';
      
      // Method 1: Look for img tags in description
      const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) {
        image = imgMatch[1];
        console.log(`Method 1 found image: ${image}`);
      }
      
      // Method 2: Look for Substack's image URLs in the content
      if (!image) {
        const substackImgMatch = description.match(/https:\/\/substackcdn\.com\/image\/[^"'\s]+/);
        if (substackImgMatch) {
          image = substackImgMatch[0];
          console.log(`Method 2 found image: ${image}`);
        }
      }
      
      // Method 3: Look for any image URL in the description
      if (!image) {
        const anyImgMatch = description.match(/https:\/\/[^"'\s]*\.(jpg|jpeg|png|gif|webp)/i);
        if (anyImgMatch) {
          image = anyImgMatch[0];
          console.log(`Method 3 found image: ${image}`);
        }
      }
      
      // Method 4: Look for Substack's image URLs in the entire item content
      if (!image) {
        const itemImgMatch = itemContent.match(/https:\/\/substackcdn\.com\/image\/[^"'\s]+/);
        if (itemImgMatch) {
          image = itemImgMatch[0];
          console.log(`Method 4 found image: ${image}`);
        }
      }
      
      // Method 5: Look for any image URL in the entire item content
      if (!image) {
        const itemAnyImgMatch = itemContent.match(/https:\/\/[^"'\s]*\.(jpg|jpeg|png|gif|webp)/i);
        if (itemAnyImgMatch) {
          image = itemAnyImgMatch[0];
          console.log(`Method 5 found image: ${image}`);
        }
      }
      
      // Clean up image URL if found
      if (image) {
        // Remove any query parameters that might cause issues
        image = image.split('?')[0];
        // Ensure it's a valid URL
        if (!image.startsWith('http')) {
          image = '';
        }
        console.log(`Final cleaned image URL: ${image}`);
      } else {
        console.log(`No image found for post: ${title}`);
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
    console.log(`Fetching Substack feed: ${feedUrl}`);
    
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
    
    console.log(`Found ${posts.length} posts for ${authorName}`);
    posts.forEach((post, index) => {
      console.log(`Post ${index + 1}: ${post.title} - Image: ${post.image ? 'Yes' : 'No'}`);
    });
    
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

// Fetch all Substack feeds with caching
export async function fetchAllSubstackFeeds(): Promise<SubstackFeed[]> {
  // Try to load from cache first
  const cachedFeeds = await loadArticlesFromCache();
  if (cachedFeeds) {
    console.log('Using cached articles');
    return cachedFeeds;
  }
  
  console.log('Fetching fresh articles from Substack feeds...');
  
  const feeds = [
    { url: 'https://suuna.substack.com', name: 'SUUNA Community' },
    { url: 'https://danadragomirescu.substack.com', name: 'Dana Dragomirescu' },
    { url: 'https://melissalouise.substack.com', name: 'Melissa Louise' },
    { url: 'https://lauramariayara.substack.com', name: 'Laura Maria Yara' },
    { url: 'https://presenceembodied.substack.com', name: 'Stephanie Canavesio' },
    { url: 'https://reflectorsreflections.substack.com', name: "Reflector's Reflections" },
  ];
  
  const feedPromises = feeds.map(feed => 
    fetchSubstackFeed(feed.url, feed.name)
  );
  
  const results = await Promise.all(feedPromises);
  
  // Save to cache for next time
  try {
    await saveArticlesToCache(results);
  } catch (error) {
    console.warn('Failed to save articles to cache:', error);
  }
  
  return results;
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

// Cache utility for storing and retrieving Substack articles
import type { SubstackFeed } from './substack';

const CACHE_DIR = './src/cache';
const CACHE_FILE = 'articles.json';

export interface CachedArticles {
  feeds: SubstackFeed[];
  lastUpdated: string;
  version: string;
}

// Save articles to cache
export async function saveArticlesToCache(feeds: SubstackFeed[]): Promise<void> {
  try {
    const cachedData: CachedArticles = {
      feeds,
      lastUpdated: new Date().toISOString(),
      version: '1.0.0'
    };
    
    // In a real implementation, you would write to the file system
    // For now, we'll just log the data structure
    console.log('Caching articles:', {
      feedCount: feeds.length,
      totalArticles: feeds.reduce((sum, feed) => sum + feed.posts.length, 0),
      lastUpdated: cachedData.lastUpdated
    });
  } catch (error) {
    console.error('Error saving articles to cache:', error);
    throw error;
  }
}

// Load articles from cache
export async function loadArticlesFromCache(): Promise<SubstackFeed[] | null> {
  try {
    // In a real implementation, you would read from the file system
    // For now, we'll return null to always fetch fresh data
    return null;
  } catch (error) {
    console.error('Error loading articles from cache:', error);
    return null;
  }
}

// Check if cache is stale (older than 24 hours)
export function isCacheStale(lastUpdated: string): boolean {
  const cacheTime = new Date(lastUpdated).getTime();
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  
  return (now - cacheTime) > twentyFourHours;
}

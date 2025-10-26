/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, r as renderComponent } from '../chunks/astro/server_DIKp2mE_.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Header, b as $$Footer } from '../chunks/Footer_HBpkPSam.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_Bu2uh-W4.mjs';
export { renderers } from '../renderers.mjs';

function parseRSSFeed(xmlText, authorName) {
  const posts = [];
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
      const title = titleMatch[1] || titleMatch[2] || "";
      const link = linkMatch[1] || "";
      const pubDate = pubDateMatch[1] || "";
      const description = descriptionMatch ? descriptionMatch[1] || descriptionMatch[2] || "" : "";
      let image = "";
      const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) {
        image = imgMatch[1];
      }
      posts.push({
        title: title.trim(),
        link: link.trim(),
        pubDate: pubDate.trim(),
        description: description.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
        image,
        author: authorName
      });
      count++;
    }
  }
  return posts;
}
async function fetchSubstackFeed(url, authorName) {
  try {
    const feedUrl = `${url}/feed`;
    const response = await fetch(feedUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SUUNA-Bot/1.0)"
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
async function fetchAllSubstackFeeds() {
  const feeds = [
    { url: "https://suuna.substack.com", name: "SUUNA Community" },
    { url: "https://danadragomirescu.substack.com", name: "Dana Dragomirescu" },
    { url: "https://melissalouise.substack.com", name: "Melissa Louise" },
    { url: "https://lauramariayara.substack.com", name: "Laura Maria Yara" },
    { url: "https://reflectorsreflections.substack.com", name: "Reflector's Reflections" }
  ];
  const feedPromises = feeds.map(
    (feed) => fetchSubstackFeed(feed.url, feed.name)
  );
  return Promise.all(feedPromises);
}

const $$RecentArticles = createComponent(async ($$result, $$props, $$slots) => {
  let allArticles = [];
  try {
    const substackFeeds = await fetchAllSubstackFeeds();
    allArticles = substackFeeds.flatMap(
      (feed) => feed.posts.map((post) => ({
        title: post.title,
        link: post.link,
        published: post.pubDate,
        summary: post.description,
        author: post.author,
        readTime: "5 min",
        // Default read time
        image: post.image,
        featured: false
      }))
    );
    allArticles.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
    if (allArticles.length > 0) {
      allArticles[0].featured = true;
    }
  } catch (error) {
    console.error("Error fetching Substack articles:", error);
    allArticles = [];
  }
  const displayArticles = allArticles.slice(0, 8);
  const column1Article = displayArticles[0];
  const column2Articles = displayArticles.slice(1, 3);
  const column3Articles = displayArticles.slice(3, 5);
  const additionalArticles = displayArticles.slice(5, 8);
  function truncateText(text, maxLength = 200) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  }
  function cleanHtmlEntities(text) {
    return text.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#8216;/g, "'").replace(/&#8217;/g, "'").replace(/&#8212;/g, "\u2014").replace(/&#8211;/g, "\u2013").replace(/&#8230;/g, "\u2026").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-suuna-bg to-suuna-forest" data-astro-cid-feuwqfim> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-feuwqfim> <!-- Section Header --> <div class="text-center mb-12" data-astro-cid-feuwqfim> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-suuna-accent/20 border border-suuna-accent/30 shadow-sm mb-6" data-astro-cid-feuwqfim> <svg class="w-5 h-5 text-suuna-accent" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-feuwqfim> <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" data-astro-cid-feuwqfim></path> </svg> <h2 class="text-sm uppercase tracking-[0.3em] text-suuna-accent font-semibold" data-astro-cid-feuwqfim>Community Voices</h2> </div> <h2 class="text-4xl font-serif font-bold text-suuna-text-light mb-6" data-astro-cid-feuwqfim>
Recent Articles
</h2> <p class="text-lg text-suuna-text-muted max-w-3xl mx-auto leading-relaxed" data-astro-cid-feuwqfim>
Discover wisdom and insights from our community of facilitators and creators
</p> </div> <!-- Articles Grid --> ${displayArticles.length > 0 && renderTemplate`<div class="articles-grid-container" data-astro-cid-feuwqfim> <!-- Column 1: Single Featured Article --> <div class="column-1" data-astro-cid-feuwqfim> ${column1Article && renderTemplate`<article class="group reveal" data-astro-cid-feuwqfim> <!-- Article Image --> ${column1Article.image ? renderTemplate`<a${addAttribute(column1Article.link, "href")} target="_blank" rel="noopener noreferrer" class="block aspect-[16/9] overflow-hidden mb-6 rounded-2xl hover:opacity-90 transition-opacity duration-300" data-astro-cid-feuwqfim> <img${addAttribute(column1Article.image, "src")}${addAttribute(column1Article.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width="600" height="337" loading="lazy" data-astro-cid-feuwqfim> </a>` : renderTemplate`<div class="aspect-[16/9] mb-6 rounded-2xl bg-suuna-forest/50 flex items-center justify-center" data-astro-cid-feuwqfim> <div class="text-center p-8" data-astro-cid-feuwqfim> <div class="w-16 h-16 mx-auto mb-4 bg-suuna-accent rounded-full flex items-center justify-center" data-astro-cid-feuwqfim> <svg class="w-8 h-8 text-suuna-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-feuwqfim> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-feuwqfim></path> </svg> </div> <p class="text-suuna-accent font-medium text-sm" data-astro-cid-feuwqfim>Article Preview</p> </div> </div>`} <!-- Article Content --> <div class="space-y-4" data-astro-cid-feuwqfim> <div class="flex items-center space-x-3 text-sm text-suuna-text-muted font-medium" data-astro-cid-feuwqfim> <span data-astro-cid-feuwqfim>${column1Article.author}</span> <span class="w-1 h-1 rounded-full bg-suuna-text-muted" data-astro-cid-feuwqfim></span> <span data-astro-cid-feuwqfim>${column1Article.readTime}</span> </div> <h3 class="text-2xl font-serif font-bold text-suuna-text-light leading-tight tracking-tight" data-astro-cid-feuwqfim> <a${addAttribute(column1Article.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-suuna-accent transition-colors duration-300" data-astro-cid-feuwqfim> ${cleanHtmlEntities(column1Article.title)} </a> </h3> ${column1Article.summary && renderTemplate`<p class="text-suuna-text-muted leading-relaxed text-base" data-astro-cid-feuwqfim> ${cleanHtmlEntities(truncateText(column1Article.summary, 150))} </p>`} </div> </article>`} </div> <!-- Column 2: Two Articles --> <div class="column-2" data-astro-cid-feuwqfim> ${column2Articles.map((article, index) => renderTemplate`<article class="group reveal" data-astro-cid-feuwqfim> <!-- Article Image --> ${article.image ? renderTemplate`<a${addAttribute(article.link, "href")} target="_blank" rel="noopener noreferrer" class="block aspect-[16/9] overflow-hidden mb-4 rounded-2xl hover:opacity-90 transition-opacity duration-300" data-astro-cid-feuwqfim> <img${addAttribute(article.image, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width="400" height="225" loading="lazy" data-astro-cid-feuwqfim> </a>` : renderTemplate`<div class="aspect-[16/9] mb-4 rounded-2xl bg-suuna-forest/50 flex items-center justify-center" data-astro-cid-feuwqfim> <div class="text-center p-4" data-astro-cid-feuwqfim> <div class="w-12 h-12 mx-auto mb-2 bg-suuna-accent rounded-full flex items-center justify-center" data-astro-cid-feuwqfim> <svg class="w-6 h-6 text-suuna-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-feuwqfim> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-feuwqfim></path> </svg> </div> <p class="text-suuna-accent font-medium text-xs" data-astro-cid-feuwqfim>Article</p> </div> </div>`} <!-- Article Content --> <div class="space-y-3" data-astro-cid-feuwqfim> <div class="flex items-center space-x-3 text-sm text-suuna-text-muted font-medium" data-astro-cid-feuwqfim> <span data-astro-cid-feuwqfim>${article.author}</span> <span class="w-1 h-1 rounded-full bg-suuna-text-muted" data-astro-cid-feuwqfim></span> <span data-astro-cid-feuwqfim>${article.readTime}</span> </div> <h3 class="text-lg font-serif font-bold text-suuna-text-light leading-tight tracking-tight" data-astro-cid-feuwqfim> <a${addAttribute(article.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-suuna-accent transition-colors duration-300" data-astro-cid-feuwqfim> ${cleanHtmlEntities(article.title)} </a> </h3> ${article.summary && renderTemplate`<p class="text-suuna-text-muted leading-relaxed text-sm" data-astro-cid-feuwqfim> ${cleanHtmlEntities(truncateText(article.summary, 120))} </p>`} </div> </article>`)} </div> <!-- Column 3: Two Articles --> <div class="column-3" data-astro-cid-feuwqfim> ${column3Articles.map((article, index) => renderTemplate`<article class="group reveal" data-astro-cid-feuwqfim> <!-- Article Image --> ${article.image ? renderTemplate`<a${addAttribute(article.link, "href")} target="_blank" rel="noopener noreferrer" class="block aspect-[16/9] overflow-hidden mb-4 rounded-2xl hover:opacity-90 transition-opacity duration-300" data-astro-cid-feuwqfim> <img${addAttribute(article.image, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width="400" height="225" loading="lazy" data-astro-cid-feuwqfim> </a>` : renderTemplate`<div class="aspect-[16/9] mb-4 rounded-2xl bg-suuna-forest/50 flex items-center justify-center" data-astro-cid-feuwqfim> <div class="text-center p-4" data-astro-cid-feuwqfim> <div class="w-12 h-12 mx-auto mb-2 bg-suuna-accent rounded-full flex items-center justify-center" data-astro-cid-feuwqfim> <svg class="w-6 h-6 text-suuna-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-feuwqfim> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-feuwqfim></path> </svg> </div> <p class="text-suuna-accent font-medium text-xs" data-astro-cid-feuwqfim>Article</p> </div> </div>`} <!-- Article Content --> <div class="space-y-3" data-astro-cid-feuwqfim> <div class="flex items-center space-x-3 text-sm text-suuna-text-muted font-medium" data-astro-cid-feuwqfim> <span data-astro-cid-feuwqfim>${article.author}</span> <span class="w-1 h-1 rounded-full bg-suuna-text-muted" data-astro-cid-feuwqfim></span> <span data-astro-cid-feuwqfim>${article.readTime}</span> </div> <h3 class="text-lg font-serif font-bold text-suuna-text-light leading-tight tracking-tight" data-astro-cid-feuwqfim> <a${addAttribute(article.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-suuna-accent transition-colors duration-300" data-astro-cid-feuwqfim> ${cleanHtmlEntities(article.title)} </a> </h3> ${article.summary && renderTemplate`<p class="text-suuna-text-muted leading-relaxed text-sm" data-astro-cid-feuwqfim> ${cleanHtmlEntities(truncateText(article.summary, 120))} </p>`} </div> </article>`)} </div> <!-- Additional Articles Row (3 equal columns) --> ${additionalArticles.length > 0 && renderTemplate`<div class="col-span-full mt-16" data-astro-cid-feuwqfim> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-feuwqfim> ${additionalArticles.map((article, index) => renderTemplate`<article class="group reveal" data-astro-cid-feuwqfim> <!-- Article Image --> <a${addAttribute(article.link, "href")} target="_blank" rel="noopener noreferrer" class="block aspect-[16/9] overflow-hidden mb-4 rounded-2xl hover:opacity-90 transition-opacity duration-300" data-astro-cid-feuwqfim> ${article.image ? renderTemplate`<img${addAttribute(article.image, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width="400" height="225" loading="lazy" data-astro-cid-feuwqfim>` : renderTemplate`<div class="w-full h-full bg-suuna-forest/50 flex items-center justify-center" data-astro-cid-feuwqfim> <div class="text-center p-8" data-astro-cid-feuwqfim> <div class="w-16 h-16 mx-auto mb-4 bg-suuna-accent rounded-full flex items-center justify-center" data-astro-cid-feuwqfim> <svg class="w-8 h-8 text-suuna-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-feuwqfim> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-feuwqfim></path> </svg> </div> <p class="text-suuna-accent font-medium text-sm" data-astro-cid-feuwqfim>Article Preview</p> </div> </div>`} </a> <!-- Article Content --> <div class="space-y-3" data-astro-cid-feuwqfim> <div class="flex items-center space-x-3 text-sm text-suuna-text-muted font-medium" data-astro-cid-feuwqfim> <span data-astro-cid-feuwqfim>${article.author}</span> <span class="w-1 h-1 rounded-full bg-suuna-text-muted" data-astro-cid-feuwqfim></span> <span data-astro-cid-feuwqfim>${article.readTime}</span> </div> <h3 class="text-lg font-serif font-bold text-suuna-text-light leading-tight tracking-tight" data-astro-cid-feuwqfim> <a${addAttribute(article.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-suuna-accent transition-colors duration-300" data-astro-cid-feuwqfim> ${cleanHtmlEntities(article.title)} </a> </h3> ${article.summary && renderTemplate`<p class="text-suuna-text-muted leading-relaxed text-sm" data-astro-cid-feuwqfim> ${cleanHtmlEntities(truncateText(article.summary, 120))} </p>`} </div> </article>`)} </div> </div>`} </div>`} ${displayArticles.length === 0 && renderTemplate`<div class="text-center py-16" data-astro-cid-feuwqfim> <p class="text-suuna-text-muted text-xl" data-astro-cid-feuwqfim>No articles available at the moment.</p> </div>`} </div> </section> `;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/RecentArticles.astro", void 0);

const $$Astro = createAstro("https://suuna.ro");
const $$IndividualSubstack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndividualSubstack;
  const { url, authorName, sectionTitle } = Astro2.props;
  let feed;
  try {
    feed = await fetchSubstackFeed(url, authorName);
  } catch (error) {
    console.error(`Error fetching Substack feed for ${authorName}:`, error);
    feed = {
      title: authorName,
      description: `Latest posts from ${authorName}`,
      url,
      posts: []
    };
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-suuna-bg to-suuna-forest"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-serif font-bold text-suuna-text-light mb-4"> ${sectionTitle} </h2> <p class="text-lg text-suuna-text-muted max-w-2xl mx-auto">
Discover wisdom and insights from ${authorName} </p> </div> <div class="reveal-stagger"> <!-- Posts Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> ${feed.posts.map((post) => renderTemplate`<article class="card p-6 group"> <div class="aspect-video mb-4 overflow-hidden rounded-lg"> ${post.image ? renderTemplate`<img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">` : renderTemplate`<div class="w-full h-full bg-suuna-forest/50 flex items-center justify-center"> <span class="text-suuna-text-muted text-sm">No image available</span> </div>`} </div> <h4 class="text-lg font-serif font-semibold text-suuna-text-light mb-2 group-hover:text-suuna-accent transition-colors"> ${post.title} </h4> <p class="text-suuna-text-muted text-sm mb-4 line-clamp-3"> ${post.description} </p> <div class="flex items-center justify-between"> <time class="text-xs text-suuna-text-muted"> ${new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> <a${addAttribute(post.link, "href")} target="_blank" rel="noopener noreferrer" class="text-suuna-accent hover:text-suuna-accent-muted text-sm font-medium transition-colors">
Read more →
</a> </div> </article>`)} </div> <!-- Subscribe Form --> <div class="text-center"> <div class="glass rounded-lg p-6 max-w-md mx-auto"> <h4 class="text-lg font-serif font-semibold text-suuna-text-light mb-4">
Stay connected with ${authorName} </h4> <iframe${addAttribute(`${feed.url}/embed`, "src")} width="100%" height="200" frameborder="0" class="rounded-lg"></iframe> </div> </div> </div> </div> </section>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/IndividualSubstack.astro", void 0);

const $$EventsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-suuna-forest to-suuna-bg"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-serif font-bold text-suuna-text-light mb-4">
Upcoming Events
</h2> <p class="text-lg text-suuna-text-muted max-w-2xl mx-auto">
Join our community gatherings, workshops, and transformative experiences
</p> </div> <div class="reveal"> <div class="glass rounded-xl p-8 max-w-4xl mx-auto"> <div class="text-center mb-6"> <h3 class="text-xl font-serif font-semibold text-suuna-text-light mb-2">
SUUNA Community Calendar
</h3> <p class="text-suuna-text-muted">
Discover upcoming events and join our community gatherings
</p> </div> <!-- Luma Calendar Embed --> <div class="flex justify-center"> <iframe src="https://luma.com/embed/calendar/cal-rx0Dc6lhU837mI3/events" width="600" height="450" frameborder="0" style="border: 1px solid rgba(191, 203, 218, 0.53); border-radius: 8px;" allowfullscreen="" aria-hidden="false" tabindex="0" class="w-full max-w-2xl"></iframe> </div> <div class="text-center mt-6"> <a href="https://lu.ma/suuna" target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
View All Events on Luma
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div> </div> </section>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/EventsSection.astro", void 0);

const $$FacilitatorsTeaser = createComponent(async ($$result, $$props, $$slots) => {
  const facilitators = await getCollection("facilitators");
  const featuredFacilitators = facilitators.slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-suuna-bg to-suuna-forest"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-serif font-bold text-suuna-text-light mb-4">
Meet Our Facilitators
</h2> <p class="text-lg text-suuna-text-muted max-w-2xl mx-auto">
Discover the visionary teachers, healers, and community builders who are co-creating intentional spaces for transformation and growth.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> ${featuredFacilitators.map((facilitator) => renderTemplate`<div class="reveal-stagger"> <article class="card p-6 group h-full"> <div class="aspect-square mb-4 overflow-hidden rounded-lg"> <img${addAttribute(facilitator.data.image, "src")}${addAttribute(facilitator.data.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"> </div> <h3 class="text-lg font-serif font-semibold text-suuna-text-light mb-2 group-hover:text-suuna-accent transition-colors"> ${facilitator.data.name} </h3> <p class="text-suuna-accent text-sm font-medium mb-3"> ${facilitator.data.role} </p> <div class="flex items-center justify-between mt-auto"> <span class="text-xs text-suuna-text-muted">
📍 ${facilitator.data.location} </span> <a${addAttribute(`/facilitators/${facilitator.slug}`, "href")} class="text-suuna-accent hover:text-suuna-accent-muted text-sm font-medium transition-colors">
View →
</a> </div> </article> </div>`)} </div> <div class="text-center"> <a href="/facilitators" class="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
See All Facilitators
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/FacilitatorsTeaser.astro", void 0);

const $$CoCreateSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 gradient-forest noise-overlay relative"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center"> <div class="reveal"> <h2 class="text-4xl md:text-5xl font-serif font-bold text-suuna-text-light mb-8">
Co-create with <span class="suuna-font text-suuna-accent">SUUNA</span> </h2> </div> <div class="reveal-stagger max-w-4xl mx-auto space-y-6"> <p class="text-xl text-suuna-text-light leading-relaxed">
At SUUNA, we believe creators thrive when collaboration replaces competition. 
          We bring together teachers, healers, artists, and community builders under one 
          ecosystem where growth, technology, and wisdom co-evolve.
</p> <p class="text-xl text-suuna-text-light leading-relaxed">
By joining SUUNA, you contribute your essence to a field of collective intelligence — 
          where your work doesn't just grow, it resonates.
</p> </div> <div class="reveal mt-12"> <a href="https://suuna.org" target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
Visit SUUNA.org
<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> <p class="text-suuna-text-muted mt-4 text-sm">
Stronger together. Built for partnership.
</p> </div> </div> </div> <!-- Breathing circle animation --> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"> <div class="breathing-circle w-full h-full rounded-full border border-suuna-accent"></div> </div> </section>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/CoCreateSection.astro", void 0);

const $$NewsletterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-suuna-bg to-suuna-forest"> <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"> <div class="reveal text-center"> <h2 class="text-3xl font-serif font-bold text-suuna-text-light mb-4">
Stay connected to the SUUNA ecosystem
</h2> <p class="text-lg text-suuna-text-muted mb-8">
Get updates on new facilitators, events, and community insights delivered to your inbox
</p> <div class="glass rounded-xl p-8 max-w-md mx-auto"> <form class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-suuna-text-light mb-2">
Name
</label> <input type="text" id="name" name="name" class="w-full px-4 py-3 bg-suuna-bg/50 border border-suuna-sand/30 rounded-lg text-suuna-text-light placeholder-suuna-text-muted focus:border-suuna-accent focus:outline-none transition-colors" placeholder="Your name" required> </div> <div> <label for="email" class="block text-sm font-medium text-suuna-text-light mb-2">
Email
</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 bg-suuna-bg/50 border border-suuna-sand/30 rounded-lg text-suuna-text-light placeholder-suuna-text-muted focus:border-suuna-accent focus:outline-none transition-colors" placeholder="your@email.com" required> </div> <button type="submit" class="w-full btn-primary py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
Subscribe to Updates
</button> </form> <p class="text-xs text-suuna-text-muted mt-4">
We respect your privacy. Unsubscribe at any time.
</p> </div> </div> </div> </section>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/NewsletterSection.astro", void 0);

const $$SuunaHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-24 bg-gradient-to-br from-suuna-forest to-suuna-bg overflow-hidden"> <!-- Faint noise texture overlay --> <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('/img/noise.png'); background-size: 100px;"></div> <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-4xl sm:text-5xl font-suuna font-bold text-suuna-text-light leading-tight mb-6 reveal">
Bring your gifts to your community with <span class="text-suuna-accent">SUUNA</span> </h2> <p class="text-lg sm:text-xl text-suuna-text-muted leading-relaxed mb-6 reveal" data-delay="100">
As a creator, your focus is on delivering your unique gifts to the world. At SUUNA, we're here to help you amplify your message and grow your community, without the technical or marketing headaches. Whether you're launching workshops, courses, or exclusive content, we provide everything you need to reach your audience and beyond.
</p> <div class="flex flex-col sm:flex-row justify-center gap-4 mb-10 reveal" data-delay="200"> <a href="https://suuna.org" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 py-4 bg-suuna-accent text-suuna-bg font-semibold text-lg rounded-full hover:bg-suuna-accent-muted transition-colors shadow-lg">
Co-create with SUUNA
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> <a href="https://suuna.org" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 py-4 border-2 border-suuna-accent text-suuna-accent font-semibold text-lg rounded-full hover:bg-suuna-accent/10 transition-colors shadow-lg">
Visit SUUNA.org
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> </div> <p class="text-xl sm:text-2xl font-serif font-semibold text-suuna-text-light mb-6 reveal" data-delay="300">
Stronger together
</p> <p class="text-lg text-suuna-text-muted reveal" data-delay="400">
Built for partnership. When you win, we win.
</p> </div> </section>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/SuunaHero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "SUUNA - Learning from nature, together";
  const description = "Community platform for wisdom creators, facilitators, and intentional communities. Join SUUNA to amplify your message and grow your community.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "canonical": "https://suuna.ro", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- Hero Section --> <section class="min-h-screen flex items-center justify-center gradient-forest noise-overlay relative overflow-hidden" data-astro-cid-j7pv25f6> <!-- Background breathing circle --> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10" data-astro-cid-j7pv25f6> <div class="breathing-circle w-full h-full rounded-full border border-suuna-accent" data-astro-cid-j7pv25f6></div> </div> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10" data-astro-cid-j7pv25f6> <div class="reveal" data-astro-cid-j7pv25f6> <h1 class="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-suuna-text-light mb-8 leading-tight" data-astro-cid-j7pv25f6>
Bring your gifts to your community with <span class="suuna-font text-suuna-accent" data-astro-cid-j7pv25f6>SUUNA</span> </h1> </div> <div class="reveal-stagger max-w-4xl mx-auto space-y-6" data-astro-cid-j7pv25f6> <p class="text-xl md:text-2xl text-suuna-text-light leading-relaxed" data-astro-cid-j7pv25f6>
At SUUNA, we help creators amplify their message and grow their communities — 
            without the technical or marketing headaches.
</p> <p class="text-lg text-suuna-accent font-semibold" data-astro-cid-j7pv25f6>
You teach. We amplify.
</p> </div> <div class="reveal mt-12 flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="#community" class="btn-primary inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Join the Community
</a> <a href="https://suuna.org" target="_blank" rel="noopener noreferrer" class="btn-secondary inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Visit SUUNA.org
<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </section> <!-- Substack Feeds Section --> <div id="community" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "RecentArticles", $$RecentArticles, { "data-astro-cid-j7pv25f6": true })} </div> <!-- Individual Substack Sections --> ${renderComponent($$result2, "IndividualSubstack", $$IndividualSubstack, { "url": "https://suuna.substack.com", "authorName": "SUUNA Community", "sectionTitle": "SUUNA Community", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "IndividualSubstack", $$IndividualSubstack, { "url": "https://danadragomirescu.substack.com", "authorName": "Dana Dragomirescu", "sectionTitle": "Ecology of Emotions", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "IndividualSubstack", $$IndividualSubstack, { "url": "https://melissalouise.substack.com", "authorName": "Melissa Louise", "sectionTitle": "Pleasure Advocate", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "IndividualSubstack", $$IndividualSubstack, { "url": "https://lauramariayara.substack.com", "authorName": "Laura Maria Yara", "sectionTitle": "Womb Oracle & Feminine Guide", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "IndividualSubstack", $$IndividualSubstack, { "url": "https://reflectorsreflections.substack.com", "authorName": "Reflector's Reflections", "sectionTitle": "Reflector's Reflections", "data-astro-cid-j7pv25f6": true })} <!-- Events Section --> ${renderComponent($$result2, "EventsSection", $$EventsSection, { "data-astro-cid-j7pv25f6": true })} <!-- Facilitators Teaser --> ${renderComponent($$result2, "FacilitatorsTeaser", $$FacilitatorsTeaser, { "data-astro-cid-j7pv25f6": true })} <!-- Newsletter Section --> ${renderComponent($$result2, "NewsletterSection", $$NewsletterSection, { "data-astro-cid-j7pv25f6": true })} <!-- Co-Create Section --> ${renderComponent($$result2, "CoCreateSection", $$CoCreateSection, { "data-astro-cid-j7pv25f6": true })} <!-- SUUNA Hero Section (from respira.cafe/suuna) --> ${renderComponent($$result2, "SuunaHero", $$SuunaHero, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/index.astro", void 0);

const $$file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

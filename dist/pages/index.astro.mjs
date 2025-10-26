import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/vendor_Mq3Ymznp.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Header, b as $$Footer } from '../chunks/Footer_afRxHXGC.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_Bryg8xlg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function parseRSSFeed(xmlText, authorName) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const items = xmlDoc.querySelectorAll("item");
  const posts = [];
  items.forEach((item, index) => {
    if (index >= 3) return;
    const title = item.querySelector("title")?.textContent || "";
    const link = item.querySelector("link")?.textContent || "";
    const pubDate = item.querySelector("pubDate")?.textContent || "";
    const description = item.querySelector("description")?.textContent || "";
    let image = "";
    const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) {
      image = imgMatch[1];
    }
    posts.push({
      title,
      link,
      pubDate,
      description: description.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
      image,
      author: authorName
    });
  });
  return posts;
}
async function fetchSubstackFeed(url, authorName) {
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

const $$SubstackFeeds = createComponent(async ($$result, $$props, $$slots) => {
  const substackFeeds = await fetchAllSubstackFeeds();
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-suuna-bg to-suuna-forest"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-serif font-bold text-suuna-text-light mb-4">
Community Voices
</h2> <p class="text-lg text-suuna-text-muted max-w-2xl mx-auto">
Discover wisdom and insights from our community of facilitators and creators
</p> </div> <div class="space-y-16"> ${substackFeeds.map((feed) => renderTemplate`<div class="reveal-stagger"> <!-- Feed Header --> <div class="text-center mb-8"> <h3 class="text-2xl font-serif font-semibold text-suuna-accent mb-2"> ${feed.title} </h3> <p class="text-suuna-text-muted">${feed.description}</p> </div> <!-- Posts Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> ${feed.posts.map((post) => renderTemplate`<article class="card p-6 group"> ${post.image && renderTemplate`<div class="aspect-video mb-4 overflow-hidden rounded-lg"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"> </div>`} <h4 class="text-lg font-serif font-semibold text-suuna-text-light mb-2 group-hover:text-suuna-accent transition-colors"> ${post.title} </h4> <p class="text-suuna-text-muted text-sm mb-4 line-clamp-3"> ${post.description} </p> <div class="flex items-center justify-between"> <time class="text-xs text-suuna-text-muted"> ${new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> <a${addAttribute(post.link, "href")} target="_blank" rel="noopener noreferrer" class="text-suuna-accent hover:text-suuna-accent-muted text-sm font-medium transition-colors">
Read more →
</a> </div> </article>`)} </div> <!-- Subscribe Form --> <div class="text-center"> <div class="glass rounded-lg p-6 max-w-md mx-auto"> <h4 class="text-lg font-serif font-semibold text-suuna-text-light mb-4">
Stay connected with ${feed.title} </h4> <iframe${addAttribute(`${feed.url}/embed`, "src")} width="100%" height="200" frameborder="0" class="rounded-lg"></iframe> </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/sections/SubstackFeeds.astro", void 0);

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
<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </section> <!-- Substack Feeds Section --> <div id="community" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SubstackFeeds", $$SubstackFeeds, { "data-astro-cid-j7pv25f6": true })} </div> <!-- Events Section --> ${renderComponent($$result2, "EventsSection", $$EventsSection, { "data-astro-cid-j7pv25f6": true })} <!-- Facilitators Teaser --> ${renderComponent($$result2, "FacilitatorsTeaser", $$FacilitatorsTeaser, { "data-astro-cid-j7pv25f6": true })} <!-- Newsletter Section --> ${renderComponent($$result2, "NewsletterSection", $$NewsletterSection, { "data-astro-cid-j7pv25f6": true })} <!-- Co-Create Section --> ${renderComponent($$result2, "CoCreateSection", $$CoCreateSection, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
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

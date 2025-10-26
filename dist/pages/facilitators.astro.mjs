/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DxdTLJqk.mjs';
import { $ as $$Base, a as $$Header, b as $$Footer } from '../chunks/Footer_DT3KcI-q.mjs';
import { g as getCollection } from '../chunks/_astro_content_Q6NG51Pe.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Facilitators = createComponent(async ($$result, $$props, $$slots) => {
  const facilitators = await getCollection("facilitators");
  const sortedFacilitators = facilitators.sort((a, b) => a.data.name.localeCompare(b.data.name));
  const title = "Facilitators - SUUNA";
  const description = "Meet the visionary teachers, healers, and community builders who are co-creating intentional spaces for transformation and growth.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "canonical": "https://suuna.ro/facilitators", "data-astro-cid-323wm3rb": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-323wm3rb": true })} ${maybeRenderHead()}<main class="pt-16" data-astro-cid-323wm3rb> <!-- Hero Section --> <section class="py-16 bg-gradient-to-b from-suuna-bg to-suuna-forest" data-astro-cid-323wm3rb> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-323wm3rb> <div class="text-center mb-12" data-astro-cid-323wm3rb> <h1 class="text-4xl md:text-5xl font-serif font-bold text-suuna-text-light mb-6" data-astro-cid-323wm3rb>
SUUNA Family of Creators
</h1> <p class="text-xl text-suuna-text-muted max-w-3xl mx-auto" data-astro-cid-323wm3rb>
Meet the visionary teachers, healers, and community builders who are co-creating intentional spaces for transformation and growth.
</p> </div> </div> </section> <!-- Facilitators Grid --> <section class="py-16 bg-gradient-to-b from-suuna-forest to-suuna-bg" data-astro-cid-323wm3rb> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-323wm3rb> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-323wm3rb> ${sortedFacilitators.map((facilitator) => renderTemplate`<div class="reveal-stagger" data-astro-cid-323wm3rb> <article class="card p-6 group h-full" data-astro-cid-323wm3rb> <div class="aspect-square mb-6 overflow-hidden rounded-lg" data-astro-cid-323wm3rb> <img${addAttribute(facilitator.data.image, "src")}${addAttribute(facilitator.data.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" data-astro-cid-323wm3rb> </div> <h3 class="text-xl font-serif font-semibold text-suuna-text-light mb-2 group-hover:text-suuna-accent transition-colors" data-astro-cid-323wm3rb> ${facilitator.data.name} </h3> <p class="text-suuna-accent font-medium mb-3" data-astro-cid-323wm3rb> ${facilitator.data.role} </p> <p class="text-suuna-text-muted text-sm mb-4 line-clamp-3" data-astro-cid-323wm3rb> ${facilitator.data.bio.substring(0, 150)}...
</p> <div class="flex items-center justify-between mt-auto" data-astro-cid-323wm3rb> <span class="text-xs text-suuna-text-muted" data-astro-cid-323wm3rb>
📍 ${facilitator.data.location} </span> <a${addAttribute(`/facilitators/${facilitator.slug}`, "href")} class="text-suuna-accent hover:text-suuna-accent-muted text-sm font-medium transition-colors" data-astro-cid-323wm3rb>
View Profile →
</a> </div> </article> </div>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-323wm3rb": true })} ` })} `;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/facilitators.astro", void 0);

const $$file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/facilitators.astro";
const $$url = "/facilitators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Facilitators,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

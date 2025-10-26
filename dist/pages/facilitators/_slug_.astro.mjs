import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/vendor_Mq3Ymznp.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Header, b as $$Footer } from '../../chunks/Footer_afRxHXGC.mjs';
import { g as getCollection } from '../../chunks/_astro_content_Dw_b87-A.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://suuna.ro");
async function getStaticPaths() {
  const facilitators = await getCollection("facilitators");
  return facilitators.map((facilitator) => ({
    params: { slug: facilitator.slug },
    props: { facilitator }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { facilitator } = Astro2.props;
  const { Content } = await facilitator.render();
  const title = `${facilitator.data.name} - SUUNA Facilitator`;
  const description = facilitator.data.bio.substring(0, 160) + "...";
  return renderTemplate(_a || (_a = __template(["", '  <script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "Person",\n    "name": "{facilitator.data.name}",\n    "jobTitle": "{facilitator.data.role}",\n    "description": "{facilitator.data.bio}",\n    "url": "https://suuna.ro/facilitators/{facilitator.slug}",\n    "image": "https://suuna.ro{facilitator.data.image}",\n    "sameAs": [\n      {facilitator.data.website ? `"${facilitator.data.website}"` : \'\'},\n      {facilitator.data.substack ? `"${facilitator.data.substack}"` : \'\'}\n    ].filter(Boolean)\n  }\n<\/script>'], ["", '  <script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "Person",\n    "name": "{facilitator.data.name}",\n    "jobTitle": "{facilitator.data.role}",\n    "description": "{facilitator.data.bio}",\n    "url": "https://suuna.ro/facilitators/{facilitator.slug}",\n    "image": "https://suuna.ro{facilitator.data.image}",\n    "sameAs": [\n      {facilitator.data.website ? \\`"\\${facilitator.data.website}"\\` : \'\'},\n      {facilitator.data.substack ? \\`"\\${facilitator.data.substack}"\\` : \'\'}\n    ].filter(Boolean)\n  }\n<\/script>'])), renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "canonical": `https://suuna.ro/facilitators/${facilitator.slug}`, "data-astro-cid-s3se7e6z": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-s3se7e6z": true })} ${maybeRenderHead()}<main class="pt-16" data-astro-cid-s3se7e6z> <!-- Hero Section --> <section class="py-16 bg-gradient-to-b from-suuna-bg to-suuna-forest" data-astro-cid-s3se7e6z> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-s3se7e6z> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-s3se7e6z> <div class="reveal" data-astro-cid-s3se7e6z> <div class="aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl" data-astro-cid-s3se7e6z> <img${addAttribute(facilitator.data.image, "src")}${addAttribute(facilitator.data.name, "alt")} class="w-full h-full object-cover" loading="eager" data-astro-cid-s3se7e6z> </div> </div> <div class="reveal-stagger" data-astro-cid-s3se7e6z> <h1 class="text-4xl md:text-5xl font-serif font-bold text-suuna-text-light mb-4" data-astro-cid-s3se7e6z> ${facilitator.data.name} </h1> <p class="text-xl text-suuna-accent font-semibold mb-6" data-astro-cid-s3se7e6z> ${facilitator.data.role} </p> <div class="flex items-center mb-8" data-astro-cid-s3se7e6z> <span class="text-suuna-text-muted" data-astro-cid-s3se7e6z>
📍 ${facilitator.data.location} </span> </div> <div class="flex flex-wrap gap-4" data-astro-cid-s3se7e6z> ${facilitator.data.website && renderTemplate`<a${addAttribute(facilitator.data.website, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105" data-astro-cid-s3se7e6z>
Visit Website
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-s3se7e6z> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-s3se7e6z></path> </svg> </a>`} ${facilitator.data.substack && renderTemplate`<a${addAttribute(facilitator.data.substack, "href")} target="_blank" rel="noopener noreferrer" class="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105" data-astro-cid-s3se7e6z>
Read on Substack
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-s3se7e6z> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-s3se7e6z></path> </svg> </a>`} </div> </div> </div> </div> </section> <!-- Bio Section --> <section class="py-16 bg-gradient-to-b from-suuna-forest to-suuna-bg" data-astro-cid-s3se7e6z> <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" data-astro-cid-s3se7e6z> <div class="reveal" data-astro-cid-s3se7e6z> <div class="prose prose-lg prose-invert max-w-none" data-astro-cid-s3se7e6z> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-s3se7e6z": true })} </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-s3se7e6z": true })} ` }));
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/facilitators/[slug].astro", void 0);

const $$file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/facilitators/[slug].astro";
const $$url = "/facilitators/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

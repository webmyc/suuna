/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_h_zt6oxU.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Header, b as $$Footer } from '../chunks/Footer_CofZNDX7.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Platform = createComponent(($$result, $$props, $$slots) => {
  const title = "Platform - SUUNA";
  const description = "Access the SUUNA platform for courses, community, and transformative experiences.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "canonical": "https://suuna.ro/platform", "data-astro-cid-abwzjl3z": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-abwzjl3z": true })} ${maybeRenderHead()}<main class="pt-16" data-astro-cid-abwzjl3z> <!-- Platform Embed --> <section class="min-h-screen" data-astro-cid-abwzjl3z> <iframe src="https://suuna.org" class="w-full h-screen border-none" title="SUUNA Platform" loading="eager" data-astro-cid-abwzjl3z></iframe> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-abwzjl3z": true })} ` })} `;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/platform.astro", void 0);

const $$file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/pages/platform.astro";
const $$url = "/platform";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Platform,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

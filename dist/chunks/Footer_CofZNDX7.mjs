import { b as createAstro, c as createComponent, a as renderTemplate, h as renderSlot, i as renderHead, d as addAttribute, m as maybeRenderHead } from './astro/server_h_zt6oxU.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://suuna.ro");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title,
    description,
    canonical,
    ogImage = "/og-image.png",
    noindex = false
  } = Astro2.props;
  const canonicalURL = canonical ? new URL(canonical, Astro2.site) : Astro2.url;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" class="dark" data-astro-cid-nncbl3kl> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', ">", '<!-- OpenGraph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="SUUNA"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', `><!-- Preload critical fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" href="/fonts/architype-bayer-type-w90.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/architype-bayer-type-w90.woff" as="font" type="font/woff" crossorigin><!-- JSON-LD Schema --><script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SUUNA",
        "url": "https://suuna.ro",
        "logo": "https://suuna.ro/logo.png",
        "description": "Community platform for wisdom creators, facilitators, and intentional communities",
        "sameAs": [
          "https://suuna.org",
          "https://suuna.substack.com"
        ]
      }
    <\/script>`, '</head> <body class="bg-suuna-bg text-suuna-text-light font-sans antialiased" data-astro-cid-nncbl3kl> ', " <!-- Intersection Observer Script --> <script>\n      // Intersection Observer for reveal animations\n      const observerOptions = {\n        threshold: 0.1,\n        rootMargin: '0px 0px -50px 0px'\n      };\n\n      const observer = new IntersectionObserver((entries) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('revealed', 'visible');\n          }\n        });\n      }, observerOptions);\n\n      // Observe all reveal elements\n      document.addEventListener('DOMContentLoaded', () => {\n        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger, .fade-in, .slide-up');\n        revealElements.forEach(el => observer.observe(el));\n      });\n\n      // Parallax effect\n      let ticking = false;\n      function updateParallax() {\n        const scrolled = window.pageYOffset;\n        const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast');\n        \n        parallaxElements.forEach(el => {\n          const speed = el.classList.contains('parallax-slow') ? 0.5 : 0.3;\n          const yPos = -(scrolled * speed);\n          if (el instanceof HTMLElement) {\n            el.style.setProperty('--parallax-offset', `${yPos}px`);\n          }\n        });\n        \n        ticking = false;\n      }\n\n      function requestTick() {\n        if (!ticking) {\n          requestAnimationFrame(updateParallax);\n          ticking = true;\n        }\n      }\n\n      window.addEventListener('scroll', requestTick);\n    <\/script> </body> </html> "], ['<html lang="en" class="dark" data-astro-cid-nncbl3kl> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', ">", '<!-- OpenGraph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="SUUNA"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', `><!-- Preload critical fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" href="/fonts/architype-bayer-type-w90.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/architype-bayer-type-w90.woff" as="font" type="font/woff" crossorigin><!-- JSON-LD Schema --><script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SUUNA",
        "url": "https://suuna.ro",
        "logo": "https://suuna.ro/logo.png",
        "description": "Community platform for wisdom creators, facilitators, and intentional communities",
        "sameAs": [
          "https://suuna.org",
          "https://suuna.substack.com"
        ]
      }
    <\/script>`, '</head> <body class="bg-suuna-bg text-suuna-text-light font-sans antialiased" data-astro-cid-nncbl3kl> ', " <!-- Intersection Observer Script --> <script>\n      // Intersection Observer for reveal animations\n      const observerOptions = {\n        threshold: 0.1,\n        rootMargin: '0px 0px -50px 0px'\n      };\n\n      const observer = new IntersectionObserver((entries) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('revealed', 'visible');\n          }\n        });\n      }, observerOptions);\n\n      // Observe all reveal elements\n      document.addEventListener('DOMContentLoaded', () => {\n        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger, .fade-in, .slide-up');\n        revealElements.forEach(el => observer.observe(el));\n      });\n\n      // Parallax effect\n      let ticking = false;\n      function updateParallax() {\n        const scrolled = window.pageYOffset;\n        const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast');\n        \n        parallaxElements.forEach(el => {\n          const speed = el.classList.contains('parallax-slow') ? 0.5 : 0.3;\n          const yPos = -(scrolled * speed);\n          if (el instanceof HTMLElement) {\n            el.style.setProperty('--parallax-offset', \\`\\${yPos}px\\`);\n          }\n        });\n        \n        ticking = false;\n      }\n\n      function requestTick() {\n        if (!ticking) {\n          requestAnimationFrame(updateParallax);\n          ticking = true;\n        }\n      }\n\n      window.addEventListener('scroll', requestTick);\n    <\/script> </body> </html> "])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(description, "content"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.site), "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.site), "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/layout/Base.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/facilitators", label: "Facilitators" },
    { href: "/events", label: "Events" },
    { href: "/platform", label: "Platform" },
    { href: "/about", label: "About" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<header class="fixed top-0 left-0 right-0 z-50 bg-suuna-bg/80 backdrop-blur-md border-b border-white/10"> <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex h-16 items-center justify-between"> <!-- Logo --> <div class="flex-shrink-0"> <a href="/" class="flex items-center"> <span class="suuna-font text-2xl font-bold text-suuna-accent tracking-wider">\nSUUNA\n</span> </a> </div> <!-- Desktop Navigation --> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-8"> ', ' </div> </div> <!-- Mobile menu button --> <div class="md:hidden"> <button type="button" class="mobile-menu-button inline-flex items-center justify-center rounded-md p-2 text-suuna-text-muted hover:text-suuna-accent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-suuna-accent" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <!-- Hamburger icon --> <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </button> </div> </div> <!-- Mobile Navigation --> <div class="mobile-menu hidden md:hidden" id="mobile-menu"> <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3"> ', " </div> </div> </nav> </header> <script>\n  // Mobile menu toggle\n  document.addEventListener('DOMContentLoaded', () => {\n    const mobileMenuButton = document.querySelector('.mobile-menu-button');\n    const mobileMenu = document.querySelector('.mobile-menu');\n    \n    if (mobileMenuButton && mobileMenu) {\n      mobileMenuButton.addEventListener('click', () => {\n        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';\n        mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));\n        mobileMenu.classList.toggle('hidden');\n      });\n    }\n  });\n<\/script>"])), maybeRenderHead(), navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-suuna-text-muted hover:text-suuna-accent px-3 py-2 text-sm font-medium transition-colors duration-200"> ${link.label} </a>`), navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-suuna-text-muted hover:text-suuna-accent block px-3 py-2 text-base font-medium transition-colors duration-200"> ${link.label} </a>`));
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-suuna-bg border-t border-white/10"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"> <div class="text-center"> <p class="text-sm text-suuna-text-muted">
web experience created by
<a href="https://respira.cafe" target="_blank" rel="noopener noreferrer" class="text-suuna-accent hover:text-suuna-accent-muted transition-colors duration-200">
respira
</a> </p> </div> </div> </footer>`;
}, "/Users/akunay/\u{1F31E}Passions/Vibe Coding/respira.cafe/sites/suuna/src/components/layout/Footer.astro", void 0);

export { $$Base as $, $$Header as a, $$Footer as b };

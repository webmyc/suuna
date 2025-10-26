import { $ as $$Image, j as createVNode, F as Fragment, _ as __astro_tag_component__ } from './vendor_Mq3Ymznp.mjs';
import '@astrojs/internal-helpers/path';
import 'clsx';

const frontmatter = {
  "name": "Melissa Louise",
  "role": "Pleasure advocate & intimacy coach",
  "location": "Remote",
  "bio": "Welcome to the transformative world of Melissa Louise, your dedicated Pleasure Advocate and Erotic Blueprint Coach. With years of experience as a sex, intimacy, and relationship expert, Melissa is here to empower individuals to embrace their true sexual selves. Whether you are a woman seeking to feel more alive, orgasmic, and fulfilled at any stage of life, or a man striving to become more attractive, powerful, and successful, you have found your guide. Melissa is passionate about helping others reclaim their divine birthright to pleasure and passion, no matter their age or relationship status. Join her in redefining what it means to live a pleasure-filled life!",
  "website": "https://melissalouise.world",
  "substack": "https://melissalouise.substack.com",
  "instagram": "",
  "image": "/facilitators/melissa-louise.jpg"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "melissa-louise",
    "text": "Melissa Louise"
  }, {
    "depth": 2,
    "slug": "experience",
    "text": "Experience"
  }, {
    "depth": 2,
    "slug": "mission",
    "text": "Mission"
  }, {
    "depth": 2,
    "slug": "connect",
    "text": "Connect"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "melissa-louise",
      children: "Melissa Louise"
    }), "\n", createVNode(_components.p, {
      children: "Welcome to the transformative world of Melissa Louise, your dedicated Pleasure Advocate and Erotic Blueprint Coach."
    }), "\n", createVNode(_components.h2, {
      id: "experience",
      children: "Experience"
    }), "\n", createVNode(_components.p, {
      children: "With years of experience as a sex, intimacy, and relationship expert, Melissa is here to empower individuals to embrace their true sexual selves. Whether you are a woman seeking to feel more alive, orgasmic, and fulfilled at any stage of life, or a man striving to become more attractive, powerful, and successful, you have found your guide."
    }), "\n", createVNode(_components.h2, {
      id: "mission",
      children: "Mission"
    }), "\n", createVNode(_components.p, {
      children: "Melissa is passionate about helping others reclaim their divine birthright to pleasure and passion, no matter their age or relationship status. Join her in redefining what it means to live a pleasure-filled life!"
    }), "\n", createVNode(_components.h2, {
      id: "connect",
      children: "Connect"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Website"
        }), ": ", createVNode(_components.a, {
          href: "https://melissalouise.world",
          children: "melissalouise.world"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Substack"
        }), ": ", createVNode(_components.a, {
          href: "https://melissalouise.substack.com",
          children: "Melissa Louise"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Studio"
        }), ": ", createVNode(_components.a, {
          href: "https://unzipped.studio",
          children: "unzipped.studio"
        })]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/facilitators/melissa-louise.mdx";
const file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/melissa-louise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/melissa-louise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

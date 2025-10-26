import { k as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_h_zt6oxU.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BVnFsH7R.mjs';
import 'clsx';

const frontmatter = {
  "name": "Laura Maria Yara",
  "role": "Rewriting the Sacred Feminine",
  "location": "Portugal",
  "bio": "Laura-Maria Yara is a Mother Earth woman, serving the Divine Mother by rewriting the sacred feminine in the female body. She is a mother, storyteller, traveler of unseen worlds, midwife of transformation, and womb oracle.",
  "website": "https://lauramariayara.org",
  "substack": "https://lauramariayara.substack.com",
  "instagram": "",
  "image": "/facilitators/laura-maria-yara.jpg"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "laura-maria-yara",
    "text": "Laura Maria Yara"
  }, {
    "depth": 2,
    "slug": "identity",
    "text": "Identity"
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
      id: "laura-maria-yara",
      children: "Laura Maria Yara"
    }), "\n", createVNode(_components.p, {
      children: "Laura-Maria Yara is a Mother Earth woman, serving the Divine Mother by rewriting the sacred feminine in the female body."
    }), "\n", createVNode(_components.h2, {
      id: "identity",
      children: "Identity"
    }), "\n", createVNode(_components.p, {
      children: "She is a mother, storyteller, traveler of unseen worlds, midwife of transformation, and womb oracle."
    }), "\n", createVNode(_components.h2, {
      id: "mission",
      children: "Mission"
    }), "\n", createVNode(_components.p, {
      children: "Her work focuses on rewriting the sacred feminine in the female body, guiding women through transformation and connecting them with their divine essence."
    }), "\n", createVNode(_components.h2, {
      id: "connect",
      children: "Connect"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Website"
        }), ": ", createVNode(_components.a, {
          href: "https://lauramariayara.org",
          children: "lauramariayara.org"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Substack"
        }), ": ", createVNode(_components.a, {
          href: "https://lauramariayara.substack.com",
          children: "Laura Maria Yara"
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

const url = "src/content/facilitators/laura-maria-yara.mdx";
const file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/laura-maria-yara.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/laura-maria-yara.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

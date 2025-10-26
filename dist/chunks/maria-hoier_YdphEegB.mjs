import { k as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_h_zt6oxU.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BVnFsH7R.mjs';
import 'clsx';

const frontmatter = {
  "name": "Maria Hoier",
  "role": "Intelligent Intimacy",
  "location": "Remote",
  "bio": "Maria Hoier is the founder of Intelligent Intimacy, a singer and writer, and a pioneer in integrating psychology, somatic practice, and archetypal frameworks into modern relational development. With a background in Eastern medicine, psychology, and adult human development, she has spent over two decades weaving together science, myth, and lived experience to guide individuals and groups into deeper intimacy, integrity, and embodied connection. Trauma-informed, academically grounded, and intuitively led, Maria merges intellectual depth with emotional accessibility. She creates spaces where vulnerability, erotic intelligence, and conscious power can coexist, bringing a rare capacity to hold both the psychological and the spiritual dimensions of intimacy. Her mission is to restore intimacy as a field of intelligence-one that can transform relationships, leadership, and the systems we live in.",
  "website": "https://intelligentintimacy.org",
  "substack": "",
  "instagram": "",
  "image": "/facilitators/maria-hoier.jpg"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "maria-hoier",
    "text": "Maria Hoier"
  }, {
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 2,
    "slug": "approach",
    "text": "Approach"
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
      id: "maria-hoier",
      children: "Maria Hoier"
    }), "\n", createVNode(_components.p, {
      children: "Maria Hoier is the founder of Intelligent Intimacy, a singer and writer, and a pioneer in integrating psychology, somatic practice, and archetypal frameworks into modern relational development."
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "With a background in Eastern medicine, psychology, and adult human development, she has spent over two decades weaving together science, myth, and lived experience to guide individuals and groups into deeper intimacy, integrity, and embodied connection."
    }), "\n", createVNode(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", createVNode(_components.p, {
      children: "Trauma-informed, academically grounded, and intuitively led, Maria merges intellectual depth with emotional accessibility. She creates spaces where vulnerability, erotic intelligence, and conscious power can coexist, bringing a rare capacity to hold both the psychological and the spiritual dimensions of intimacy."
    }), "\n", createVNode(_components.h2, {
      id: "mission",
      children: "Mission"
    }), "\n", createVNode(_components.p, {
      children: "Her mission is to restore intimacy as a field of intelligence—one that can transform relationships, leadership, and the systems we live in."
    }), "\n", createVNode(_components.h2, {
      id: "connect",
      children: "Connect"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Website"
        }), ": ", createVNode(_components.a, {
          href: "https://intelligentintimacy.org",
          children: "intelligentintimacy.org"
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

const url = "src/content/facilitators/maria-hoier.mdx";
const file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/maria-hoier.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/maria-hoier.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

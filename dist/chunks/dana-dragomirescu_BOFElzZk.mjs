import { $ as $$Image, j as createVNode, F as Fragment, _ as __astro_tag_component__ } from './vendor_Mq3Ymznp.mjs';
import '@astrojs/internal-helpers/path';
import 'clsx';

const frontmatter = {
  "name": "Dana Dragomirescu",
  "role": "Ecology of emotions & relationships",
  "location": "Romania",
  "bio": "Dana Dragomirescu is a trainer and counselor in relationships and communication through the ESPERE® Method, a classical psychodrama director and trainer-in-training. As a woman, wife, mother, and creator, Dana facilitates workshops and personal development programs. Her mission is to bring practices that support the being as a whole through sensory reconnection, body awareness, and the integration of healthy emotional and relational ecology.",
  "website": "https://dana.earth",
  "substack": "https://danadragomirescu.substack.com",
  "instagram": "",
  "image": "/facilitators/dana-dragomirescu.jpg"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "dana-dragomirescu",
    "text": "Dana Dragomirescu"
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
      id: "dana-dragomirescu",
      children: "Dana Dragomirescu"
    }), "\n", createVNode(_components.p, {
      children: "Dana Dragomirescu is a trainer and counselor in relationships and communication through the ESPERE® Method, a classical psychodrama director and trainer-in-training."
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "As a woman, wife, mother, and creator, Dana facilitates workshops and personal development programs. Her mission is to bring practices that support the being as a whole through sensory reconnection, body awareness, and the integration of healthy emotional and relational ecology."
    }), "\n", createVNode(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", createVNode(_components.p, {
      children: "Through the ESPERE® Method and psychodrama techniques, Dana helps individuals and groups develop healthier communication patterns and emotional awareness."
    }), "\n", createVNode(_components.h2, {
      id: "connect",
      children: "Connect"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Website"
        }), ": ", createVNode(_components.a, {
          href: "https://dana.earth",
          children: "dana.earth"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Substack"
        }), ": ", createVNode(_components.a, {
          href: "https://danadragomirescu.substack.com",
          children: "Dana Dragomirescu"
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

const url = "src/content/facilitators/dana-dragomirescu.mdx";
const file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/dana-dragomirescu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/dana-dragomirescu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

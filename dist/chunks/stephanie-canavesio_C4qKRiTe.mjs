import { k as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_h_zt6oxU.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BVnFsH7R.mjs';
import 'clsx';

const frontmatter = {
  "name": "Stephanie Canavesio",
  "role": "Presence Embodied, Psychotherapist, Compassionate Inquiry, Meditation",
  "location": "Remote",
  "bio": "Stephanie Canavesio is a psychotherapist, meditation facilitator, and Compassionate Inquiry practitioner trained in the approach of Dr. Gabor Maté. Her work is dedicated to guiding individuals through deep self-exploration, emotional healing, and transformation. With a background in mindfulness, somatic awareness, and nervous system regulation, Stephanie creates a safe and nurturing space for clients to uncover the unconscious patterns and past imprints shaping their present lives. She believes that healing is not about fixing ourselves but about reconnecting with the truth and wisdom already within us. Through one-on-one sessions, mentorship, and immersive retreats, Stephanie helps people move beyond emotional blocks, cultivate self-compassion, and step into greater authenticity and presence. Her work is rooted in deep listening, attunement, and a profound respect for each individual's inner journey.",
  "website": "https://presenceembodied.com",
  "substack": "https://presenceembodied.substack.com",
  "instagram": "",
  "image": "/facilitators/stephanie-canavesio.jpg"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "stephanie-canavesio",
    "text": "Stephanie Canavesio"
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
      id: "stephanie-canavesio",
      children: "Stephanie Canavesio"
    }), "\n", createVNode(_components.p, {
      children: "Stephanie Canavesio is a psychotherapist, meditation facilitator, and Compassionate Inquiry practitioner trained in the approach of Dr. Gabor Maté. Her work is dedicated to guiding individuals through deep self-exploration, emotional healing, and transformation."
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "With a background in mindfulness, somatic awareness, and nervous system regulation, Stephanie creates a safe and nurturing space for clients to uncover the unconscious patterns and past imprints shaping their present lives. She believes that healing is not about fixing ourselves but about reconnecting with the truth and wisdom already within us."
    }), "\n", createVNode(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", createVNode(_components.p, {
      children: "Through one-on-one sessions, mentorship, and immersive retreats, Stephanie helps people move beyond emotional blocks, cultivate self-compassion, and step into greater authenticity and presence. Her work is rooted in deep listening, attunement, and a profound respect for each individual’s inner journey."
    }), "\n", createVNode(_components.h2, {
      id: "connect",
      children: "Connect"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Website"
        }), ": ", createVNode(_components.a, {
          href: "https://presenceembodied.com",
          children: "presenceembodied.com"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Substack"
        }), ": ", createVNode(_components.a, {
          href: "https://presenceembodied.substack.com",
          children: "Presence Embodied"
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

const url = "src/content/facilitators/stephanie-canavesio.mdx";
const file = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/stephanie-canavesio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/akunay/🌞Passions/Vibe Coding/respira.cafe/sites/suuna/src/content/facilitators/stephanie-canavesio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

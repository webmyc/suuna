# SUUNA WEBSITE COMPLETE PACKAGE
## Everything You Need to Build the New SUUNA Website

**Created:** November 2025  
**For:** Mihai Dragomirescu / Respira  
**Project:** SUUNA Platform Redesign

---

# TABLE OF CONTENTS

1. [Quick Start Guide](#quick-start-guide)
2. [Complete Website Specification](#complete-website-specification)
3. [Guide Data Template](#guide-data-template)
4. [Offerings Template](#offerings-template)
5. [Cursor Development Guide](#cursor-development-guide)

---

# QUICK START GUIDE

## What You're Building

A beautiful, warm platform for intentional communities where:
- Teachers and wisdom keepers share their gifts
- Learners find belonging and feel beneficial
- Communities breathe together, without algorithms
- Presence matters more than performance

## Design At A Glance

**Colors:** Earthy (forest greens, terracotta, honey)  
**Fonts:** Inter (body) + Cormorant Garamond (headings)  
**Themes:** Light mode default, warm dark mode  
**Languages:** Romanian (default) + English  
**Mobile:** First priority, beautiful on all devices

## How to Build (3 Options)

### Option 1: Use Cursor (Recommended - 5 minutes)

1. Open Cursor in your `sites/suuna` directory
2. Paste this prompt:

```
Build the complete SUUNA website redesign using the specification in this chat.

Read the full spec below and then:
1. Set up the design system (colors, fonts, spacing)
2. Create data files (/data/guides.yaml and /data/offerings.yaml)
3. Build base components (Button, Card, Container, etc.)
4. Build pages in order (Home, Manifesto, Guides, Events, Articles, Vault, Join)
5. Integrate Substack feeds, Luma calendar, suuna.org widget, Gumroad

The complete spec, data templates, and all content are in this document.
Ready to start?
```

3. Cursor will build everything

### Option 2: Manual Development

See "Cursor Development Guide" section below for step-by-step instructions.

### Option 3: Hire a Developer

Share this entire document - it has everything needed.

## Repository & Deployment

- **Repo:** sites/suuna in respira github repo
- **Framework:** Next.js (existing)
- **Deploy:** Vercel (automatic)

---

# COMPLETE WEBSITE SPECIFICATION

## Design System

### Brand Philosophy

SUUNA is where communities breathe together. The design evokes:
- Nature's wisdom and cycles
- Human connection and warmth
- Clarity without sterility
- Presence without performance
- Sacred simplicity

### Color Palette

**Primary Colors:**
```
Deep Forest: #1A3A2E (primary dark)
Sage Green: #4A7C59 (primary)
Moss: #7BA587 (primary light)
```

**Warm Accents:**
```
Terracotta: #D4785C (accent warm)
Honey: #E8A87C (accent light)
Clay: #A45D3F (accent dark)
```

**Neutrals:**
```
Bone: #FAF8F5 (background light)
Stone: #E8E5E0 (background mid)
Charcoal: #2C2C2C (text dark)
Ash: #6B6B6B (text muted)
```

**Dark Mode:**
```
Background: #0D1B22
Surface: #1E2B38
Text: #FAF8F5
Text Muted: #B8C5D0
```

### Typography

**Primary Font: Inter**
- Use for: Body text, UI elements, navigation
- Google Fonts: https://fonts.google.com/specimen/Inter

**Display Font: Cormorant Garamond**
- Use for: Headings, quotes, manifesto text, guide names
- Google Fonts: https://fonts.google.com/specimen/Cormorant+Garamond

**Font Scale:**
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Spacing System
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Visual Style
- **Photography:** Nature imagery, human connection, community gatherings
- **Videos:** Hero sections with looping nature/community videos (muted)
- **Borders:** Soft, organic - avoid harsh lines
- **Shadows:** Subtle, warm - never harsh black shadows
- **Transitions:** Smooth, breathing quality (300-500ms ease-in-out)

## Site Architecture

### Navigation Structure

```
Home
├─ Manifesto (About/Principles)
├─ Guides (Facilitators)
│  └─ [Guide Profile Pages]
├─ Events
├─ Articles
│  ├─ Latest Posts
│  └─ By Author
├─ Vault
└─ Join
   ├─ Join as Guide
   └─ Join Community
```

### Header
- Logo: "SUUNA" in Cormorant Garamond
- Navigation: Home, Manifesto, Guides, Events, Articles, Vault, Join
- Language Switcher: RO | EN (top right)
- Theme Toggle: Light/Dark icon
- Mobile: Hamburger menu

### Footer
- Quick Links: All main pages
- Social Links: Instagram, WhatsApp, Newsletter
- Contact: mihai@respira.cafe
- Copyright: © 2025 SUUNA Community
- Powered by Respira

## Page Specifications

### HOME PAGE

**Hero Section**
- Full viewport height
- Background: Looping video (nature/community) with subtle overlay
- Content (centered):
  ```
  SUUNA
  A Platform for Intentional Communities
  
  [CTA: Join the Community] [CTA: Become a Guide]
  ```

**Section: What is SUUNA?**
```
Headline: Where communities breathe together

Subhead: A distraction-free space where teachers, facilitators, and wisdom 
keepers come together to share their work and grow alongside their learners.

Three Principles (icons + text):
1. Presence Over Performance
   Your being here is the contribution.

2. Horizontal Relationships
   Peers alongside peers, not above or below.

3. Do You Feel Beneficial?
   The only metric that matters.

[CTA: Read Our Manifesto]
```

**Section: Featured Guides**
- Grid of 6 guide cards (photos, names, categories)
- Each card links to guide profile
- [CTA: View All Guides]

**Section: Upcoming Events**
- Pull latest 3 events from lu.ma/suuna
- Display: Date, Title, Location, Image
- [CTA: View All Events]

**Section: Latest Insights**
- Grid of 6 latest posts from all Substacks combined
- Display: Author, Title, Excerpt, Image
- [CTA: Explore All Articles]

**Section: SUUNA Vault**
- Featured products from bliss.suuna.ro
- 3-4 products in grid
- Display: Image, Title, Price, Creator
- [CTA: Explore Vault]

**Section: Join Us**
```
Headline: Find Your Place

Two Cards:
┌─────────────────────────┬─────────────────────────┐
│  I'm a Learner          │  I'm a Guide            │
│  Seeking belonging      │  Seeking a platform     │
│  [Join Community]       │  [Partner with Us]      │
└─────────────────────────┴─────────────────────────┘
```

### MANIFESTO PAGE

**Romanian Version (Default):**

# Manifesto

## Pentru creatorii care scriu, vorbesc, filmează — cu inimă.

Dacă ai simțit vreodată că dai tot ce ai mai bun în conținutul tău — postări, newslettere, clipuri, cursuri — și totuși e ca și cum vorbele tale se pierd într-un ocean de zgomot... ești în locul potrivit.

Dacă ai construit în timp o comunitate, fie mică, fie mare, dar te întrebi cum ai putea transforma această relație într-un spațiu mai stabil, mai viu, mai sustenabil — poate că ai simțit deja că e timpul pentru un nou tip de spațiu.

Un spațiu unde conținutul tău să nu fie filtrat de algoritmi, ci primit de oameni care chiar îl caută.

Unde atenția nu e tranzacționată, ci respectată.

### Ce este SUUNA?

**SUUNA înseamnă: suntem împreună.**

Este o platformă comunitară, construită pentru creatori ca tine. Un loc care îți oferă suport tehnic și spațiu de exprimare, dar și ceva mai greu de găsit în online-ul de azi: **sens și continuitate**.

Gândește-te la SUUNA ca la un sat digital, unde fiecare creator are propria casă (propriul canal, brand, ofertă), dar contribuie și la viața satului: prin idei, texte, episoade audio sau video.

Fiecare are locul lui, vocea lui, stilul lui. Nimeni nu trebuie să se conformeze. Nu este vorba de uniformizare, ci de **sprijin reciproc**.

### De ce facem asta?

Pentru că social media s-a transformat într-un joc al atenției, unde algoritmii decid ce merită văzut.

Pentru că prea mulți creatori valoroși ajung să își dubleze munca doar ca să „joace jocul".

Pentru că în ciuda like-urilor și reach-ului, **valoarea reală se diluează**.

Și mai ales, pentru că am întâlnit creatori ca tine. Care scriu săptămânal articole pline de sens. Care vorbesc despre vindecare, transformare, claritate, identitate. Care pun întrebări bune și oferă răspunsuri sincere.

Dar care nu au un loc în care să-și simtă munca ca fiind **apreciată, susținută, și — foarte concret — să se transforme și în venit sustenabil**.

### Ce oferă SUUNA?

**Vizibilitate curată.** Fără reclame. Fără algoritmi. Doar oameni care caută conținut cu sens.

**O comunitate care se construiește împreună.** Publicul nu este al platformei. Este al tău. Iar comunitățile tale se alătură altora — în beneficiul tuturor.

**Spațiu pentru contribuție.** Tu alegi în ce formă vrei să contribui: text, audio, video — în ritmul tău. Poți publica ce vrei, când vrei. Nu există KPI-uri, doar coerență.

**Suport tehnic și strategic.** Dacă ai nevoie de ajutor cu platforme, email marketing, plăți, integrări — echipa SUUNA e acolo.

**Un model de revenue sharing.** Contribuția ta poate aduce venit. Proporțional. Clar. Fără presiune.

### Nu este pentru tine dacă:

- Vrei doar un loc unde să postezi din când în când, fără angajament sau ritmicitate.
- Te interesează mai mult reach-ul decât relația.
- Nu vrei să colaborezi cu alți creatori.
- Cauți doar o platformă de promovare, nu un spațiu de co-creație.
- Nu ești pregătit(ă) să îți asumi propria voce, propria formă, propriul parcurs.

### Este pentru tine dacă:

- Simți că ai ceva valoros de oferit
- Ai deja o practică de publicare (newsletter, podcast, blog, etc.)
- Vrei ca vocea ta să ajungă mai departe, dar în condiții care te susțin
- Ești interesat(ă) să crești o comunitate pe termen lung
- Ești deschis(ă) la colaborare, nu competiție

### Hai să ne cunoaștem

Dacă ai ajuns până aici și simți o chemare, nu e nevoie să te decizi acum. Tot ce propun e o conversație deschisă, ca între oameni care creează.

Poți programa o întâlnire aici: 👉 [cal.com/mihai-love/suuna](https://cal.com/mihai-love/suuna)

Vor fi 30 de minute fără pitch. Doar să vedem dacă ne potrivim. Dacă da, construim împreună. Dacă nu, mă bucur că ne-am cunoscut.

**Suntem împreună.**

— Mihai

---

**English Translation:**

# Manifesto

## For creators who write, speak, create — with heart.

If you've ever felt like you're giving your best to your content — posts, newsletters, videos, courses — and yet it feels like your words are lost in an ocean of noise... you're in the right place.

If you've built a community over time, whether small or large, but you're wondering how you could transform this relationship into a more stable, alive, sustainable space — perhaps you've already felt it's time for a new kind of space.

A space where your content isn't filtered by algorithms, but received by people who are actually seeking it.

Where attention isn't transacted, but respected.

### What is SUUNA?

**SUUNA means: we are together.**

It's a community platform, built for creators like you. A place that offers you technical support and space for expression, but also something harder to find in today's online world: **meaning and continuity**.

Think of SUUNA as a digital village, where each creator has their own home (their own channel, brand, offering), but also contributes to the life of the village: through ideas, texts, audio or video episodes.

Everyone has their place, their voice, their style. No one has to conform. This isn't about uniformity, but about **mutual support**.

### Why are we doing this?

Because social media has become an attention game, where algorithms decide what deserves to be seen.

Because too many valuable creators end up doubling their work just to "play the game".

Because despite likes and reach, **real value gets diluted**.

And especially because we've met creators like you. Who write weekly articles full of meaning. Who speak about healing, transformation, clarity, identity. Who ask good questions and offer honest answers.

But who don't have a place where their work feels **appreciated, supported, and — very concretely — transformed into sustainable income**.

### What does SUUNA offer?

**Clean visibility.** No ads. No algorithms. Just people seeking meaningful content.

**A community built together.** The audience isn't the platform's. It's yours. And your communities join with others — to everyone's benefit.

**Space for contribution.** You choose how you want to contribute: text, audio, video — at your pace. You can publish what you want, when you want. No KPIs, just coherence.

**Technical and strategic support.** If you need help with platforms, email marketing, payments, integrations — the SUUNA team is there.

**A revenue sharing model.** Your contribution can generate income. Proportional. Clear. Without pressure.

### This isn't for you if:

- You just want a place to post occasionally, without commitment or rhythm.
- You're more interested in reach than relationship.
- You don't want to collaborate with other creators.
- You're looking for just a promotion platform, not a co-creation space.
- You're not ready to claim your own voice, your own form, your own path.

### This is for you if:

- You feel you have something valuable to offer
- You already have a publishing practice (newsletter, podcast, blog, etc.)
- You want your voice to reach further, but in conditions that support you
- You're interested in growing a community long-term
- You're open to collaboration, not competition

### Let's get to know each other

If you've made it this far and feel a call, you don't need to decide now. All I'm proposing is an open conversation, between people who create.

You can schedule a meeting here: 👉 [cal.com/mihai-love/suuna](https://cal.com/mihai-love/suuna)

It will be 30 minutes without pitch. Just to see if we're a fit. If yes, we build together. If not, I'm glad we met.

**We are together.**

— Mihai

### GUIDES PAGE

**Hero:**
```
Our Guides
Teachers, facilitators, and wisdom keepers sharing their gifts.
```

**Filter Bar:**
- Categories: All, Breathwork, Movement, Relationships, Human Design, Embodiment, etc.
- Location filter: All, Online, Romania, Other
- Search bar

**Guide Grid:**
- Card layout (3 columns desktop, 2 tablet, 1 mobile)
- Each card: Photo, Name, Location, Tags, Brief bio, [View Profile]

**CTA Section:**
```
Are you a guide?
Bring your gifts to SUUNA.
[Become a Guide]
```

### GUIDE PROFILE PAGE

**Layout:**
- Header: Photo, Name, Location, Tags, [Book a Session] [Subscribe]
- Bio: Full biography text
- Latest Offering: Title, Date, Description, Image, [Learn More]
- Latest from Substack: Title, Excerpt, [Read Full Article]
- Substack Subscribe Form: Embedded

### EVENTS PAGE

**Hero:**
```
Community Events
Gatherings, workshops, and sacred spaces.
```

**Luma Embed:**
- Full calendar from lu.ma/suuna
- Responsive iframe

**CTA Box:**
```
Host an Event?
Add your event to Luma and submit it to the community calendar.
[Add Your Event →]
```

### ARTICLES PAGE

**Hero:**
```
Insights & Reflections
Wisdom from our community of guides.
```

**Filter:** All / By Author dropdown

**Article Grid:**
- Cards with: Author photo, name, title, excerpt, date, [Read on Substack]

**Author Sections:**
- Each author: Profile photo, name, description, latest 6 posts, subscribe form

### VAULT PAGE

**Hero:**
```
SUUNA Vault
Workshops, courses, and masterclasses from our guides.
```

**Product Grid:**
- All products from bliss.suuna.ro
- Display: Image, Title, Creator, Price, [View on Gumroad]

### JOIN PAGE

**Hero:**
```
Find Your Place in SUUNA
```

**For Learners:**
```
Join the Community
A free, intentional space to connect, learn, and contribute.

[Widget Button: Explore Community]
```

**For Guides:**
```
Share Your Work with SUUNA
We provide the platform, tools, and community.

What you get:
- Your own space within SUUNA
- Event management (Luma)
- Workshop hosting (Gumroad/Vault)
- Newsletter support (Substack)
- Community platform (suuna.org)
- Optional: Full production partnership with Respira

[CTA: Schedule a Conversation]
```

## Technical Implementation

### Substack RSS Integration

**Feeds to pull from:**
1. https://suuna.substack.com/feed
2. https://melissalouise.substack.com/feed
3. https://path.presenceembodied.com/feed
4. https://reflectorsreflections.substack.com/feed
5. https://danadragomirescu.substack.com/feed
6. https://lauramariayara.substack.com/feed

**Implementation:**
- Use `rss-parser` package
- Fetch latest 6 posts from each
- Cache results (revalidate every 1 hour)
- Combine and sort by date for homepage

### Luma Calendar Integration

**Embed code:**
```html
<iframe 
  src="https://lu.ma/embed/calendar/cal-abc123/events" 
  width="100%" 
  height="800" 
  frameborder="0"
></iframe>
```

### suuna.org Widget Integration

**Widget script:**
```html
<script>
  (function (w,d,s,o,f,js,fjs) {
      w['circleWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'mw', 'https://www.suuna.org/external/widget.js'));
  mw('init', {
    community_public_uid: '615e3202',
    brand_color_dark: '#0D1B22',
    brand_color_light: '#1E2B38',
    default_appearance: 'dark'
  });
</script>
```

**Trigger:** `mw('show')` on button click

### Gumroad Products

**Source:** https://bliss.suuna.ro/  
**Options:** Scrape page or manual YAML config

---

# GUIDE DATA TEMPLATE

## Complete YAML Structure

Save as `/data/guides.yaml`:

```yaml
guides:
  - id: stephanie-canavesio
    name: Stephanie Canavesio
    photo: /images/guides/stephanie-canavesio.jpg
    location:
      city: Online
      country: ""
    categories:
      - breathwork
      - psychotherapy
      - compassionate-inquiry
      - meditation
    bio_short: "Psychotherapist, meditation facilitator, and Compassionate Inquiry practitioner trained in the approach of Dr. Gabor Maté."
    bio_long: |
      Stephanie Canavesio is a psychotherapist, meditation facilitator, and Compassionate Inquiry 
      practitioner trained in the approach of Dr. Gabor Maté. Her work is dedicated to guiding 
      individuals through deep self-exploration, emotional healing, and transformation. With a 
      background in mindfulness, somatic awareness, and nervous system regulation, Stephanie creates 
      a safe and nurturing space for clients to uncover the unconscious patterns and past imprints 
      shaping their present lives.
    substack_url: https://path.presenceembodied.com/
    booking_url: https://calendly.com/stephanie-canavesio
    
  - id: maria-hoier
    name: Maria Hoier
    photo: /images/guides/maria-hoier.jpg
    location:
      city: Online
      country: ""
    categories:
      - intimacy
      - psychology
      - somatic-practice
      - relationships
    bio_short: "Founder of Intelligent Intimacy, singer, writer, and pioneer in integrating psychology and somatic practice."
    bio_long: |
      Maria Hoier is the founder of Intelligent Intimacy, a singer and writer, and a pioneer in 
      integrating psychology, somatic practice, and archetypal frameworks into modern relational 
      development. With a background in Eastern medicine, psychology, and adult human development, 
      she has spent over two decades weaving together science, myth, and lived experience to guide 
      individuals and groups into deeper intimacy, integrity, and embodied connection.
    substack_url: ""
    booking_url: https://intelligentintimacy.com/contact
    
  - id: kumu-ramsay-taum
    name: Kumu Ramsay Taum
    photo: /images/guides/kumu-ramsay-taum.jpg
    location:
      city: Hawaii
      country: USA
    categories:
      - cultural-sustainability
      - transformational-leadership
      - hawaiian-traditions
    bio_short: "Distinguished visionary leader integrating Native Hawaiian values into contemporary practices."
    bio_long: |
      Kumu Ramsay Taum is a distinguished visionary leader whose expertise spans across cultural 
      sustainability, transformational leadership, and facilitation of Hawaiian traditions. He 
      integrates Native Hawaiian values into contemporary business practices, making him a 
      sought-after resource for organizations aiming to foster community brilliance and strategic 
      partnerships.
    substack_url: ""
    booking_url: ""
    
  - id: melissa-louise
    name: Melissa Louise
    photo: /images/guides/melissa-louise.jpg
    location:
      city: Online
      country: ""
    categories:
      - pleasure
      - intimacy
      - erotic-blueprint
      - sexuality
    bio_short: "Pleasure advocate and Erotic Blueprint Coach empowering individuals to embrace their true sexual selves."
    bio_long: |
      Welcome to the transformative world of Melissa Louise, your dedicated Pleasure Advocate and 
      Erotic Blueprint Coach. With years of experience as a sex, intimacy, and relationship expert, 
      Melissa is here to empower individuals to embrace their true sexual selves. Whether you are a 
      woman seeking to feel more alive, orgasmic, and fulfilled at any stage of life, or a man 
      striving to become more attractive, powerful, and successful, you have found your guide.
    substack_url: https://melissalouise.substack.com/
    booking_url: https://melissalouise.com/book
    
  - id: laura-maria-yara
    name: Laura-Maria Yara
    photo: /images/guides/laura-maria-yara.jpg
    location:
      city: Romania
      country: Romania
    categories:
      - feminine-embodiment
      - womb-work
      - transformation
      - sacred-feminine
    bio_short: "Mother Earth woman, storyteller, midwife of transformation, and womb oracle."
    bio_long: |
      Laura-Maria Yara is a Mother Earth woman, serving the Divine Mother by rewriting the sacred 
      feminine in the female body. She is a mother, storyteller, traveler of unseen worlds, midwife 
      of transformation, and womb oracle. Her work guides women to reconnect with their sacred 
      feminine power through embodied practices, storytelling, and deep womb work.
    substack_url: https://lauramariayara.substack.com/
    booking_url: https://lauramariayara.com/work-with-me
    
  - id: dana-dragomirescu
    name: Dana Dragomirescu
    photo: /images/guides/dana-dragomirescu.jpg
    location:
      city: Bucharest
      country: Romania
    categories:
      - relationships
      - communication
      - emotional-ecology
      - embodiment
    bio_short: "Trainer and counselor in relationships and communication, facilitating emotional and relational ecology."
    bio_long: |
      Dana Dragomirescu is a trainer and counselor in relationships and communication through the 
      ESPERE® Method, a classical psychodrama director and trainer-in-training. As a woman, wife, 
      mother, and creator, Dana facilitates workshops and personal development programs. Her mission 
      is to bring practices that support the being as a whole through sensory reconnection, body 
      awareness, and the integration of healthy emotional and relational ecology.
    substack_url: https://danadragomirescu.substack.com/
    booking_url: https://danadragomirescu.ro/contact
    
  - id: malina-lilay-meraki
    name: Mălina Lilay Meraki
    photo: /images/guides/malina-lilay-meraki.jpg
    location:
      city: Bucharest
      country: Romania
    categories:
      - dance
      - transformational-movement
      - embodiment
      - ceremony
    bio_short: "Creator of The ALTAR of Dance, facilitator of transformational movement and embodiment."
    bio_long: |
      Mălina Lilay Meraki is the creator of The ALTAR of Dance, a facilitator of transformational 
      movement, holistic dance, and embodiment. At her core, she is a traveler, weaving stories 
      between the inner and outer worlds. She integrates holistic dance, yoga, qi gong, Reiki, 
      intuitive movement, feminine practices, movement meditation, rituals, ceremonies, storytelling, 
      and voice activation in her work.
    substack_url: ""
    booking_url: https://altarofdance.com/contact
    
  - id: maria-magdalena-asaftei
    name: Maria Magdalena Asaftei
    photo: /images/guides/maria-magdalena-asaftei.jpg
    location:
      city: Romania
      country: Romania
    categories:
      - bodywork
      - bowen-therapy
      - gua-sha
      - feminine-embodiment
    bio_short: "Licensed therapist specializing in Bowen, Rejuvance, Gua Sha, and Meridian Flow."
    bio_long: |
      Maria Magdalena Asaftei is a licensed therapist with over 10 years of experience in Bowen, 
      Rejuvance, Gua Sha, and Meridian Flow. Since 2021, she has launched seven online programs 
      designed to educate and inspire women to connect with their bodies and inner selves. Her work 
      is centered on the beautiful physical and energetic systems that make up each of us, offering 
      simple yet powerful techniques for achieving balance and a deeper sense of interconnection.
    substack_url: ""
    booking_url: ""
    
  - id: ioana-lazar
    name: Ioana Lazăr
    photo: /images/guides/ioana-lazar.jpg
    location:
      city: Bucharest
      country: Romania
    categories:
      - conscious-cooking
      - ayurveda
      - nutrition
      - veganism
    bio_short: "Creator of Make a Wish Food Circle, passionate about conscious and Ayurvedic cooking."
    bio_long: |
      Ioana Lazăr is the creator of Make a Wish Food Circle, where she has gathered over 10 years of 
      passion for vegan, vegetarian, Ayurvedic, and conscious cooking. Over the years, she has shared 
      her love of food in various ways, from personal bicycle deliveries to individual retreat menus, 
      camps, family events, and pop-up lunches. Recently, she has been sharing her knowledge through 
      online courses on Intuitive Cooking and Introduction to Ayurveda, her deep creative love.
    substack_url: ""
    booking_url: ""
    
  - id: claudia-constantin
    name: Claudia Constantin
    photo: /images/guides/claudia-constantin.jpg
    location:
      city: Bucharest
      country: Romania
    categories:
      - dreamwork
      - breathwork
      - transpersonal-therapy
      - holotropic-breathwork
    bio_short: "Transpersonal therapist, conscious dreamwork guide, and Holotropic Breathwork facilitator."
    bio_long: |
      Claudia Constantin is a transpersonal therapist, a guide in conscious dreamwork and expanded 
      perception states, and a facilitator of Holotropic Breathwork. She is also a mother to a 
      daughter, bringing a deep sense of nurturing and care to her work.
    substack_url: ""
    booking_url: ""
    
  - id: dirk-nellens
    name: Dirk Nellens
    photo: /images/guides/dirk-nellens.jpg
    location:
      city: Online
      country: ""
    categories:
      - human-design
      - self-discovery
      - intentional-living
    bio_short: "Human Design Reflector sharing insights on navigating life's energies and finding harmony."
    bio_long: |
      Human Design Reflections of Dirk Nellens. This space is dedicated to sharing insights on our 
      unique way of being, navigating life's energies, and finding harmony in the cosmic dance. Over 
      1,000 subscribers trust Dirk's reflections to guide their journey through Human Design.
    substack_url: https://reflectorsreflections.substack.com/
    booking_url: https://reflectorsreflections.com/contact
```

## Category Definitions

Use these standardized categories:

- breathwork
- psychotherapy
- compassionate-inquiry
- meditation
- intimacy
- psychology
- somatic-practice
- relationships
- cultural-sustainability
- transformational-leadership
- hawaiian-traditions
- pleasure
- erotic-blueprint
- sexuality
- feminine-embodiment
- womb-work
- transformation
- sacred-feminine
- communication
- emotional-ecology
- embodiment
- dance
- transformational-movement
- ceremony
- bodywork
- bowen-therapy
- gua-sha
- conscious-cooking
- ayurveda
- nutrition
- veganism
- dreamwork
- holotropic-breathwork
- transpersonal-therapy
- human-design
- self-discovery
- intentional-living

---

# OFFERINGS TEMPLATE

## Format

Save as `/data/offerings.yaml`:

```yaml
offerings:
  - guide_id: [guide-id-from-guides.yaml]
    title: "[Offering Title]"
    date: "YYYY-MM-DD"
    type: "[workshop|course|retreat|masterclass|session]"
    description: "[Brief description]"
    image: "/images/offerings/[filename].jpg"
    link: "[Sign up URL]"
    featured: [true|false]
```

## Example Data

```yaml
offerings:
  - guide_id: stephanie-canavesio
    title: "Compassionate Inquiry Workshop"
    date: "2025-04-15"
    type: workshop
    description: "Deep dive into Dr. Gabor Maté's approach. Learn to explore unconscious patterns through guided inquiry."
    image: /images/offerings/ci-workshop.jpg
    link: https://lu.ma/compassionate-inquiry-april
    featured: true
    
  - guide_id: melissa-louise
    title: "Erotic Blueprint Discovery"
    date: "2025-04-10"
    type: workshop
    description: "Discover your unique blueprint and learn to communicate desires authentically."
    image: /images/offerings/erotic-blueprint.jpg
    link: https://melissalouise.com/blueprint-discovery
    featured: true
    
  - guide_id: laura-maria-yara
    title: "Magma Mater: Sacred Feminine Journey"
    date: "2025-04-25"
    type: course
    description: "8-week journey into sacred feminine power through womb work and embodied practices."
    image: /images/offerings/magma-mater.jpg
    link: https://bliss.suuna.ro/magma-mater
    featured: true
    
  - guide_id: dana-dragomirescu
    title: "Ecologia Emoțiilor și Relațiilor"
    date: "2025-04-18"
    type: workshop
    description: "Workshop pentru reconectarea cu corpul și emoțiile prin metoda ESPERE®."
    image: /images/offerings/ecologia-emotiilor.jpg
    link: https://lu.ma/ecologia-emotiilor
    featured: true
```

## Guide IDs Reference

- stephanie-canavesio
- maria-hoier
- kumu-ramsay-taum
- melissa-louise
- laura-maria-yara
- dana-dragomirescu
- malina-lilay-meraki
- maria-magdalena-asaftei
- ioana-lazar
- claudia-constantin
- dirk-nellens

---

# CURSOR DEVELOPMENT GUIDE

## Setup

```bash
cd sites/suuna
npm install
npm install rss-parser js-yaml gray-matter @next/font
```

## Step-by-Step Build

### 1. Design System (Day 1)

**Create `/styles/globals.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

:root {
  /* Colors */
  --forest: #1A3A2E;
  --sage: #4A7C59;
  --moss: #7BA587;
  --terracotta: #D4785C;
  --honey: #E8A87C;
  --clay: #A45D3F;
  --bone: #FAF8F5;
  --stone: #E8E5E0;
  --charcoal: #2C2C2C;
  --ash: #6B6B6B;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  
  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Cormorant Garamond', serif;
}

[data-theme="dark"] {
  --bg: #0D1B22;
  --surface: #1E2B38;
  --text: #FAF8F5;
  --text-muted: #B8C5D0;
}
```

**Configure Tailwind:**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1A3A2E',
        sage: '#4A7C59',
        moss: '#7BA587',
        terracotta: '#D4785C',
        honey: '#E8A87C',
        clay: '#A45D3F',
        bone: '#FAF8F5',
        stone: '#E8E5E0',
        charcoal: '#2C2C2C',
        ash: '#6B6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
    },
  },
}
```

### 2. Base Components (Day 2)

Create in `/components/ui/`:

**Button.tsx:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all";
  const variantClasses = {
    primary: "bg-sage text-white hover:bg-forest",
    secondary: "bg-terracotta text-white hover:bg-clay",
    ghost: "bg-transparent text-charcoal hover:bg-stone",
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

**Card.tsx, Container.tsx, etc.** - Similar pattern

### 3. Data Layer (Day 3)

**Create `/lib/data.ts`:**
```typescript
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getGuides() {
  const filePath = path.join(process.cwd(), 'data', 'guides.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents);
  return data.guides;
}

export function getOfferings() {
  const filePath = path.join(process.cwd(), 'data', 'offerings.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents);
  return data.offerings;
}
```

### 4. Substack Integration (Day 4)

**Create `/lib/substack.ts`:**
```typescript
import Parser from 'rss-parser';

const parser = new Parser();

const SUBSTACK_FEEDS = [
  'https://suuna.substack.com/feed',
  'https://melissalouise.substack.com/feed',
  'https://path.presenceembodied.com/feed',
  'https://reflectorsreflections.substack.com/feed',
  'https://danadragomirescu.substack.com/feed',
  'https://lauramariayara.substack.com/feed',
];

export async function getLatestPosts() {
  const allPosts = [];
  
  for (const feedUrl of SUBSTACK_FEEDS) {
    try {
      const feed = await parser.parseURL(feedUrl);
      const posts = feed.items.slice(0, 6).map(item => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        author: feed.title,
        excerpt: item.contentSnippet?.slice(0, 200),
      }));
      allPosts.push(...posts);
    } catch (error) {
      console.error(`Error fetching ${feedUrl}:`, error);
    }
  }
  
  return allPosts.sort((a, b) => 
    new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  ).slice(0, 6);
}
```

### 5. Build Pages (Days 5-10)

Build in this order:
1. Home page
2. Manifesto page
3. Guides listing
4. Guide profile template
5. Events, Articles, Vault, Join

### 6. Internationalization (Day 11)

Use next-i18next:
```bash
npm install next-i18next
```

Create `/public/locales/ro/` and `/public/locales/en/` with translation files.

### 7. Testing & Polish (Days 12-14)

- Mobile responsive testing
- Dark mode refinement
- Performance optimization
- SEO meta tags
- Accessibility audit

## Testing Checklist

- [ ] All pages load
- [ ] Language switcher works
- [ ] Theme toggle works
- [ ] Substack feeds display
- [ ] Luma calendar embeds
- [ ] Widget opens
- [ ] Guide profiles work
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Lighthouse 90+

## Success Criteria

- ✅ Matches design spec
- ✅ Works in RO and EN
- ✅ Dark/light modes perfect
- ✅ All integrations working
- ✅ Mobile excellent
- ✅ Easy to update (YAML)

---

# QUICK REFERENCE

## File Structure
```
/data
  guides.yaml
  offerings.yaml
/pages
  index.tsx (home)
  manifesto.tsx
  guides/
    index.tsx
    [id].tsx
  events.tsx
  articles.tsx
  vault.tsx
  join.tsx
/components
  /ui - Base components
  /sections - Page sections
  /layout - Header, Footer
/lib
  data.ts - YAML parsing
  substack.ts - RSS feeds
/public
  /images
    /guides
    /offerings
  /locales
    /ro
    /en
```

## Integration URLs
- Substack feeds: 6 /feed URLs (see spec)
- Luma: lu.ma/suuna
- Widget: community_public_uid: '615e3202'
- Gumroad: bliss.suuna.ro

## Contact
- Email: mihai@respira.cafe
- Booking: cal.com/mihai-love/suuna
- Partnership: respira.cafe/suuna

---

**END OF COMPLETE PACKAGE**

This document contains everything needed to build the SUUNA website.  
Share it with Cursor or a developer to get started.

Built with love for the SUUNA community.  
*Where communities breathe together.*

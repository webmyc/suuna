# Cursor Prompt: SUUNA Magazine Layout with Substack Articles

## Project Context
This is an Astro 4.x project for SUUNA.ro - a community magazine showcasing wisdom creators, facilitators, and intentional communities. The site should display Substack articles from all facilitators in a magazine-style layout.

## Required Implementation

### 1. Latest Articles Section (Top of Homepage)
**Component**: `src/components/sections/LatestArticles.astro`
- Display the 6 most recent articles from ALL Substack feeds combined
- Sort by publication date (newest first)
- Grid layout: 3x2 on desktop, 2x3 on mobile
- Each card should include:
  - Featured image (extracted from Substack)
  - Article title
  - Author name
  - Publication date (formatted)
  - Brief excerpt (150 chars max)
  - "Read More" link to original Substack post

### 2. Individual Facilitator Sections
**Component**: `src/components/sections/FacilitatorSection.astro`
For each facilitator in `src/data/facilitators.json`, create a dedicated section:

**Featured Facilitators** (with Substack feeds):
- **SUUNA** - official substack https://suuna.substack.com
- **Melissa Louise** - "Pleasure advocate & intimacy coach" (https://melissalouise.substack.com)
- **Laura Maria Yara** - "Rewriting the Sacred Feminine" (https://lauramariayara.substack.com)
- **Dana Dragomirescu** - "Ecology of emotions & relationships" (https://danadragomirescu.substack.com)
- **Reflector's Reflections** - "Human Design with Dirk Nellens" (https://reflectorsreflections.substack.com)

**Additional Facilitators** (profiles only):
- Stephanie Canavesio - "Presence Embodied, Psychotherapist, Compassionate Inquiry, Meditation"
- Maria Hoier - "Intelligent Intimacy"
- Kumu Ramsay Taum - "Hawaiian elder"
- Mălina Lilay Meraki - "Bridging worlds through dance"
- Maria Magdalena Asaftei - "Women's bodywork & flow"
- Ioana Lazăr - "Conscious cooking"
- Claudia Constantin - "Dreamwork & breathwork"

Each facilitator section should include:
- Profile card with image, name, headline, bio, location, tags
- Their latest 3-4 Substack articles (if they have a Substack)
- Links to their website/Substack
- Responsive design

### 3. Components to Create/Update

**New Components**:
- `src/components/sections/LatestArticles.astro` - Combined recent articles
- `src/components/sections/FacilitatorSection.astro` - Individual facilitator + their articles
- `src/components/ui/ArticleCard.astro` - Reusable article card component
- `src/components/ui/FacilitatorCard.astro` - Reusable facilitator profile card

**Update Existing**:
- `src/pages/index.astro` - Main page layout with new sections
- `src/pages/facilitators.astro` - Facilitators page with all profiles
- `src/components/sections/FacilitatorsTeaser.astro` - Add facilitator photos
- Any other sections that display facilitators - ensure photos are included

### 4. Data Integration

**Use Existing Utilities**:
- `src/utils/substack.ts` - `fetchAllSubstackFeeds()` function
- `src/utils/cache.ts` - Caching system for articles
- `src/data/facilitators.json` - Complete facilitator data with images

**Substack Feeds to Fetch** (5 feeds total):
- https://suuna.substack.com (SUUNA Community)
- https://danadragomirescu.substack.com (Dana Dragomirescu)
- https://melissalouise.substack.com (Melissa Louise)
- https://lauramariayara.substack.com (Laura Maria Yara)
- https://reflectorsreflections.substack.com (Reflector's Reflections - Dirk Nellens)

### 5. Styling Requirements

**Design System**:
- Use Tailwind CSS classes
- Follow existing theme in `src/styles/`
- Forest-themed colors and SUUNA branding
- Responsive design (mobile-first)
- Use existing fonts: PT Serif (headings), Inter (body)

**Layout Structure**:
```
┌─ Latest Articles (6 most recent) ─┐
│ [Article 1] [Article 2] [Article 3] │
│ [Article 4] [Article 5] [Article 6] │
└─────────────────────────────────────┘

┌─ Featured Facilitators ─┐
│ [Stephanie] [Maria] [Kumu] │
│ [Melissa] [Laura] [Dana]   │
└───────────────────────────┘

┌─ Additional Facilitators ─┐
│ [Mălina] [Magdalena] [Ioana] [Claudia] │
└─────────────────────────────────────────┘
```

### 6. Performance & SEO

**Optimizations**:
- Use Astro's build-time data fetching
- Implement proper caching via `src/utils/cache.ts`
- Use Astro's Image component for optimized images
- Add proper meta tags and structured data
- Ensure fast loading and good Core Web Vitals

**Image Handling**:
- All facilitator images are in `/public/img/facilitators/`
- Use Astro Image component for optimization
- Fallback to placeholder if image missing
- **IMPORTANT**: Add facilitator photos to ALL existing sections that display facilitators
- Update `FacilitatorsTeaser.astro` and any other components to include actual photos instead of placeholders

### 7. Implementation Steps

1. **Create LatestArticles.astro**:
   - Fetch all Substack feeds
   - Sort by publication date
   - Display top 6 articles in grid
   - Handle loading states and errors

2. **Create FacilitatorSection.astro**:
   - Accept facilitator data as props
   - Display profile card
   - Show their latest articles (if Substack exists)
   - Include links and tags

3. **Create reusable UI components**:
   - ArticleCard.astro for article display
   - FacilitatorCard.astro for profile display

4. **Update main pages**:
   - index.astro with new sections
   - facilitators.astro with all facilitators

5. **Add facilitator photos to existing sections**:
   - Update `FacilitatorsTeaser.astro` to use actual photos from `/public/img/facilitators/`
   - Check all other components that display facilitators and add photos
   - Replace any placeholder images with real facilitator photos

6. **Test and optimize**:
   - Ensure responsive design
   - Test with different screen sizes
   - Optimize images and performance

### 8. Code Examples

**LatestArticles.astro structure**:
```astro
---
import { fetchAllSubstackFeeds } from '../utils/substack';
import ArticleCard from '../ui/ArticleCard.astro';

const allFeeds = await fetchAllSubstackFeeds();
const allArticles = allFeeds.flatMap(feed => 
  feed.posts.map(post => ({ ...post, author: feed.title }))
);
const latestArticles = allArticles
  .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  .slice(0, 6);
---

<section class="latest-articles">
  <h2>Latest Articles</h2>
  <div class="articles-grid">
    {latestArticles.map(article => (
      <ArticleCard article={article} />
    ))}
  </div>
</section>
```

**FacilitatorSection.astro structure**:
```astro
---
export interface Props {
  facilitator: {
    id: string;
    name: string;
    headline: string;
    bio: string;
    image: string;
    tags: string[];
    links: Array<{type: string; url: string}>;
  };
  articles?: Array<{
    title: string;
    link: string;
    pubDate: string;
    image?: string;
  }>;
}
const { facilitator, articles = [] } = Astro.props;
---

<section class="facilitator-section">
  <FacilitatorCard facilitator={facilitator} />
  {articles.length > 0 && (
    <div class="facilitator-articles">
      {articles.slice(0, 4).map(article => (
        <ArticleCard article={article} />
      ))}
    </div>
  )}
</section>
```

## Success Criteria

✅ Magazine-style layout with latest articles at top
✅ Individual facilitator sections with profiles and articles
✅ Responsive design that works on all devices
✅ Fast loading with proper caching
✅ All Substack feeds properly integrated
✅ Clean, maintainable Astro code
✅ Proper TypeScript types throughout
✅ SEO optimized with meta tags

## Files to Focus On

1. `src/components/sections/LatestArticles.astro` (new)
2. `src/components/sections/FacilitatorSection.astro` (new)
3. `src/components/ui/ArticleCard.astro` (new)
4. `src/components/ui/FacilitatorCard.astro` (new)
5. `src/pages/index.astro` (update)
6. `src/pages/facilitators.astro` (update)
7. `src/components/sections/FacilitatorsTeaser.astro` (add photos)
8. Any other components displaying facilitators (add photos)

## Important Notes

- **Only fetch from 5 Substack feeds** for now: SUUNA, Dana, Melissa, Laura Maria, Reflector's Reflections
- **Add facilitator photos everywhere** - update all existing sections to use real photos
- **Use existing data** in `src/data/facilitators.json` and `src/utils/substack.ts`
- **All images are ready** in `/public/img/facilitators/`

Use the existing data in `src/data/facilitators.json` and `src/utils/substack.ts`. All images are already available in `/public/img/facilitators/`.

# Design Guidelines: Mohammed Daghma - Professional Engineering Portfolio

## Design Approach

**Selected Approach**: Hybrid - Professional Portfolio System
- Primary inspiration: Linear's typography and spacing + LinkedIn's professional credibility + Behance's project showcase
- Rationale: Civil engineering portfolio requires professional credibility while showcasing technical expertise and major projects in an engaging, modern format
- Key principle: Clean sophistication with technical precision

## Core Design Elements

### Typography
**Font Selection** (via Google Fonts):
- Primary (Headings): "Inter" - weights 600, 700, 800
- Secondary (Body): "Inter" - weights 400, 500
- Accent (Stats/Numbers): "JetBrains Mono" - weight 600

**Type Scale**:
- Hero Name: text-5xl md:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subsection Titles: text-xl md:text-2xl font-semibold
- Project Titles: text-lg md:text-xl font-semibold
- Body Text: text-base leading-relaxed
- Meta Info (dates, locations): text-sm font-medium
- Labels/Tags: text-xs uppercase tracking-wide font-semibold

### Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Common patterns: p-8, py-20, gap-8, space-y-12, mt-16

**Grid Structure**:
- Container: max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-4xl mx-auto for text-heavy areas
- Full-width sections with contained inner content

## Component Library

### Hero Section
- Full-width hero (h-screen with flex centering)
- Large professional headshot placeholder (rounded-full, w-40 h-40 md:w-48 md:h-48)
- Name in massive typography with professional designation
- Quick contact icons (phone, email, location) in horizontal layout
- Language toggle button (FR/EN) in top-right corner
- Subtle scroll indicator at bottom

### Professional Summary Bar
- Horizontal stats banner below hero
- Three key metrics: "5+ Years Experience" | "CPI, OIQ Member" | "3 Major Projects"
- Grid layout: grid-cols-1 md:grid-cols-3
- Each stat with large number in JetBrains Mono + descriptive label

### Skills Showcase
- Two-column grid on desktop (grid-cols-1 lg:grid-cols-2)
- Left column: Technical Skills with icon library (Font Awesome for engineering tools)
- Right column: Software Proficiency
- Each skill in card format with skill name and proficiency indicator (not bars - use pill badges: "Expert", "Advanced", "Proficient")
- Icons from Font Awesome: fa-drafting-compass, fa-chart-gantt, fa-building, etc.

### Experience Timeline
- Vertical timeline with connector line (border-l-2 on container)
- Each role as card with:
  - Company logo placeholder (w-16 h-16 rounded)
  - Role title in large semibold
  - Company name + location in meta text
  - Date range with calendar icon
  - Bulleted responsibilities list
- Alternating subtle background treatment for visual rhythm

### Major Projects Gallery
- Masonry-style grid (3 columns on desktop: grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each project card includes:
  - Project thumbnail placeholder (aspect-video)
  - Project name overlay
  - Key metrics (area covered, timeline, budget scale)
  - Technology tags as pills
- Hover state: subtle scale transform

### Education & Certifications
- Two distinct sections in side-by-side layout on desktop
- Degree cards with university logo placeholder
- Certification badges with issuing organization
- "In Progress" indicator for PMP
- OIQ membership badge prominent

### Contact Section
- Split layout: Contact form (left) + Contact info card (right)
- Form fields: Name, Email, Subject, Message
- Contact info card includes:
  - Email with copy button
  - Phone with call button
  - LinkedIn profile link
  - Download CV button (primary CTA)
  - Available for: "Remote & Montreal, QC"

### Navigation
- Fixed top navigation with glassmorphism effect (backdrop-blur)
- Logo/Name on left
- Smooth scroll anchor links: About | Experience | Projects | Contact
- Language toggle integrated
- Mobile: Hamburger menu with slide-in drawer

## Images

**Hero Section**: 
- Large professional photograph of Mohammed in engineering context (hard hat, construction site, or professional office setting)
- Image treatment: Subtle gradient overlay to ensure text readability
- Position: Centered or right-aligned with text left-aligned

**Project Thumbnails**:
- King Abdulaziz Airport terminal interior/facade
- King Faisal Hospital mechanical systems
- Hajj Terminal construction progress
- Generic construction/engineering workspace images as needed
- All images: aspect-video ratio, object-cover

**Icon Library**: Font Awesome via CDN for engineering-specific icons

## Accessibility & Polish

- All form inputs with proper labels and focus states
- Consistent focus rings across interactive elements
- High contrast text (dark text on light backgrounds primarily)
- Semantic HTML structure for screen readers
- Skip navigation link
- Keyboard navigation support throughout

## Animation Strategy (Minimal)
- Scroll-triggered fade-in for sections (intersection observer)
- Smooth scroll behavior for anchor navigation
- Subtle hover transforms on cards (scale-105)
- No distracting animations - focus on professionalism

## Bilingual Implementation
- Language toggle switches all text content
- Maintain same layout regardless of language
- French as default (primary language in CV)
- No page reload - instant language switch
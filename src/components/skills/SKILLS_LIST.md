# Skills Section - Current Skills List

## 7 Core Skills

### 1. HTML 
**Icon:** `ri-html5-fill` (HTML5 icon)
**Description:** Semantic markup and modern HTML5 features for building accessible, SEO-friendly web structures.

**Technologies:**
- HTML5
- Semantic Tags
- Forms
- Canvas
- Web APIs

**Color Scheme:** Orange to Red gradient

---

### 2. CSS 
**Icon:** `ri-css3-fill` (CSS3 icon)
**Description:** Advanced styling techniques including animations, transitions, and modern layout systems.

**Technologies:**
- CSS3
- Flexbox
- Grid
- Animations
- Media Queries

**Color Scheme:** Blue to Cyan gradient

---

### 3. Tailwind CSS 
**Icon:** `ri-tailwind-css-fill` (Tailwind CSS icon)
**Description:** Utility-first CSS framework for rapid UI development with consistent design systems.

**Technologies:**
- Utilities
- Components
- Responsive
- Dark Mode
- Customization

**Color Scheme:** Cyan to Teal gradient

---

### 4. Bootstrap 
**Icon:** `ri-bootstrap-fill` (Bootstrap icon)
**Description:** Popular CSS framework for building responsive, mobile-first websites with pre-built components.

**Technologies:**
- Grid System
- Components
- Utilities
- JavaScript
- Responsive

**Color Scheme:** Purple to Indigo gradient

---

### 5. JavaScript 
**Icon:** `ri-javascript-fill` (JavaScript icon)
**Description:** Modern ES6+ JavaScript for creating dynamic, interactive web applications and experiences.

**Technologies:**
- ES6+
- DOM
- Async/Await
- APIs
- Event Handling

**Color Scheme:** Yellow to Orange gradient

---

### 6. React 
**Icon:** `ri-reactjs-fill` (React icon)
**Description:** Component-based library for building fast, scalable user interfaces with reusable components.

**Technologies:**
- Hooks
- Components
- State
- Props
- JSX

**Color Scheme:** Blue to Cyan gradient (lighter shade)

---

### 7. GSAP 
**Icon:** `ri-flashlight-fill` (Animation/Flash icon)
**Description:** Professional-grade animation library for creating smooth, high-performance web animations.

**Technologies:**
- Timeline
- ScrollTrigger
- Tweens
- Easing
- Plugins

**Color Scheme:** Green to Emerald gradient

---

## Desktop Layout

On desktop (≥768px), these 7 skills are displayed as vertical expanding panels:

```
┌──┬──┬──┬──┬──┬──┬──┐
│1 │2 │3 │4 │5 │6 │7 │  ← Collapsed (equal width)
└──┴──┴──┴──┴──┴──┴──┘

On hover over panel 4:
┌─┬─┬─┬────────┬─┬─┬─┐
│1│2│3│   4    │5│6│7│  ← Panel 4 expands (3x width)
└─┴─┴─┴────────┴─┴─┴─┘
```

## Mobile Layout

On mobile (<768px), skills are displayed as an accordion:
- Vertical stack of cards
- Tap to expand/collapse
- Shows 2 technologies + count in collapsed state
- Shows all 5 technologies in expanded state

## Content Structure

Each skill contains:
- **Icon** - Emoji representing the skill
- **Title** - Skill name
- **Description** - Brief explanation (1-2 sentences)
- **Technologies** - 5 related items
- **Proficiency Bar** - Animated progress indicator (90%)
- **Color Gradient** - Unique color scheme per skill

## Customization

To modify a skill, edit the `skills` array in `src/components/skills/Skills.jsx`:

```javascript
{
  title: "Skill Name",
  description: "Brief description here",
  technologies: ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"],
  icon: "🎯",
  color: "from-color-500 to-color-500"
}
```

## Notes

- All skills have exactly 5 technologies for consistent grid layout
- Descriptions are concise (1-2 sentences)
- Icons are emojis for universal compatibility
- Color gradients use Tailwind CSS classes
- Proficiency is set to 90% for all skills (can be customized per skill if needed)

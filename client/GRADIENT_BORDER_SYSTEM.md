# Animated Gradient Border System

## Overview
A reusable animated gradient border system using Vescavia's 4 marquee brand colors:
- **Orange**: `#FE6427` (Brand Management)
- **Purple**: `#8638C4` (Video Editing)
- **Yellow**: `#fbff15` (Ad Creation)
- **Green**: `#b9f151` (Web Development)

The border animates on hover, similar to Google's product design style.

## Installation
The system is already set up in `globals.css` and available globally.

## Usage Methods

### Method 1: Using the Component (Recommended)

```tsx
import GradientBorder from '@/app/components/GradientBorder';

// Spinning border (like Google)
<GradientBorder variant="spin">
  <button className="px-6 py-3">Click Me</button>
</GradientBorder>

// Animated sliding border
<GradientBorder variant="animate">
  <div className="p-8">
    <h3>Card Content</h3>
  </div>
</GradientBorder>

// With custom border radius
<GradientBorder variant="spin" borderRadius="0.5rem">
  <button>Small Radius</button>
</GradientBorder>
```

### Method 2: Using CSS Classes Directly

```tsx
// Spinning variant
<div className="gradient-border-spin">
  <div className="gradient-border-content">
    <button>Your Content</button>
  </div>
</div>

// Animated variant
<div className="gradient-border">
  <div className="gradient-border-content">
    <div>Your Content</div>
  </div>
</div>
```

### Method 3: Using the Hook (for dynamic classes)

```tsx
import { useGradientBorderClasses } from '@/app/components/GradientBorder';

function MyComponent() {
  const { container, content } = useGradientBorderClasses('spin');
  
  return (
    <div className={container}>
      <div className={content}>
        <p>Content</p>
      </div>
    </div>
  );
}
```

## Variants

### 1. Spinning Border (`gradient-border-spin`)
- Rotates 360° continuously
- Speed: 3s per rotation (1.5s on hover)
- Best for: Buttons, call-to-action elements, featured cards

### 2. Animated Border (`gradient-border`)
- Slides gradient horizontally
- Speed: 4s animation (2s on hover)
- Best for: Cards, containers, sections

## CSS Variables

The colors are defined in `globals.css`:
```css
--brand-orange: #FE6427;
--brand-purple: #8638C4;
--brand-yellow: #fbff15;
--brand-green: #b9f151;
```

To customize, update these variables in your CSS.

## Examples

### Example 1: Button with Spinning Border
```tsx
<GradientBorder variant="spin">
  <button className="px-8 py-4 bg-black text-white font-bold rounded-2xl">
    Get Started
  </button>
</GradientBorder>
```

### Example 2: Card with Animated Border
```tsx
<GradientBorder variant="animate" className="my-4">
  <div className="p-6 bg-[var(--color-background-dark)] rounded-2xl">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-gray-400">Card description goes here</p>
  </div>
</GradientBorder>
```

### Example 3: Navigation Link
```tsx
<GradientBorder variant="spin" borderRadius="9999px">
  <a href="#" className="px-6 py-2 bg-black text-white inline-block rounded-full">
    Learn More
  </a>
</GradientBorder>
```

### Example 4: Form Input
```tsx
<GradientBorder variant="animate">
  <input 
    type="text" 
    className="w-full px-4 py-3 bg-black text-white rounded-xl outline-none"
    placeholder="Enter your email"
  />
</GradientBorder>
```

## Current Implementation

### Work Cards
The work page project cards now use `gradient-border-spin`:
- Spinning gradient border
- 4 brand colors rotating
- Faster animation on hover

## Styling Tips

### 1. Background Color
Always set a background on the inner content to prevent transparency:
```tsx
<GradientBorder>
  <div className="bg-black"> {/* Important! */}
    Content
  </div>
</GradientBorder>
```

### 2. Border Width
The border is 2px by default. To customize, modify the CSS:
```css
.gradient-border-spin::before {
  inset: -2px; /* Change this value */
}
```

### 3. Animation Speed
Customize in CSS:
```css
.gradient-border-spin::before {
  animation: border-spin 3s linear infinite; /* Change 3s */
}

.gradient-border-spin:hover::before {
  animation: border-spin 1.5s linear infinite; /* Change 1.5s */
}
```

### 4. Border Radius
Pass as prop:
```tsx
<GradientBorder borderRadius="2rem">
```

Or add custom class:
```tsx
<GradientBorder className="rounded-3xl">
```

## Browser Support

✅ Chrome/Edge (full support)  
✅ Firefox (full support)  
✅ Safari (full support)  
✅ Mobile browsers (full support)  

## Performance

- Uses CSS animations (GPU accelerated)
- No JavaScript runtime cost
- Smooth 60fps animations
- Lightweight (minimal CSS)

## Troubleshooting

### Border not visible?
- Ensure inner content has a background color
- Check z-index stacking
- Verify `gradient-border-content` class is used

### Animation not working?
- Check browser support for `conic-gradient`
- Verify CSS is imported in `globals.css`
- Clear browser cache

### Border looks cut off?
- Ensure parent container has `overflow: visible`
- Check border-radius matches between container and content

## Future Enhancements

Possible additions:
- Direction control (clockwise/counter-clockwise)
- Color sequence customization
- Pause on hover option
- Different animation easing functions
- Multiple border widths

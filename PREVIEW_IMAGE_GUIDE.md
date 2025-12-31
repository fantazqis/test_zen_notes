# Creating an Attractive Preview Image

Your preview image is the first thing users see in the Sine marketplace. Make it count!

## Specifications

- **Dimensions**: 1280 x 720 pixels (16:9 aspect ratio)
- **Format**: PNG (recommended) or JPG
- **File name**: `preview.png`
- **Max size**: <500 KB
- **Location**: Root of repository

## What Makes a Good Preview?

### ✅ Good Previews Include:
- Clear screenshot of the mod in action
- Actual browser window with the mod visible
- Real content (not just empty states)
- Clean, uncluttered composition
- Key features highlighted visually
- Professional appearance
- High contrast and readability

### ❌ Avoid:
- Blurry or low-resolution images
- Too much text
- Busy backgrounds that distract
- Dark screenshots on dark themes (low contrast)
- Cluttered UI with too many elements
- Personal information visible
- Copyrighted content

## Design Ideas

### Layout Option 1: Side-by-Side
```
┌─────────────────────────────────────────┐
│                                         │
│  ┌──────────────┬───────────────────┐  │
│  │              │                   │  │
│  │   Browser    │   Notes Panel     │  │
│  │   Content    │                   │  │
│  │              │   [Sample Notes]  │  │
│  │              │                   │  │
│  └──────────────┴───────────────────┘  │
│                                         │
│       "Zen Notes - Integrated           │
│        Note-Taking for Zen Browser"     │
└─────────────────────────────────────────┘
```

### Layout Option 2: Feature Highlights
```
┌─────────────────────────────────────────┐
│                                         │
│        ZEN NOTES                        │
│        Take Notes Without Leaving       │
│        Your Browser                     │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  [Screenshot of Notes Panel]    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ✓ Context-Aware  ✓ Auto-Save          │
│  ✓ Tag System     ✓ Search              │
│  ✓ Privacy-First  ✓ Keyboard Shortcuts │
└─────────────────────────────────────────┘
```

### Layout Option 3: Minimal
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│                                         │
│    [Full-Width Screenshot]              │
│    [Showing Browser + Notes Panel]      │
│                                         │
│                                         │
│                                         │
│         Zen Notes                       │
└─────────────────────────────────────────┘
```

## Step-by-Step Creation

### Method 1: Simple Screenshot (5 minutes)

1. **Setup Zen Browser**:
   - Install the mod
   - Open a nice-looking website
   - Open Notes panel
   - Create 2-3 sample notes with different features

2. **Take Screenshot**:
   - Press `F12` → "Responsive Design Mode"
   - Set viewport to 1280 x 720
   - Position panel and content nicely
   - Take screenshot (PrtScn or screenshot tool)

3. **Crop & Save**:
   - Open in image editor
   - Crop to exact 1280x720
   - Save as `preview.png`

### Method 2: Enhanced Preview (15 minutes)

1. **Take base screenshot** (as above)

2. **Add overlays** using Canva/GIMP/Photoshop:
   - Add mod name at top or bottom
   - Add subtle gradient overlay for text readability
   - Highlight key features with icons/text
   - Add a subtle border or shadow

3. **Save for web**:
   - Optimize file size
   - Maintain quality
   - Export as `preview.png`

### Method 3: Professional Design (30 minutes)

Use a design tool like Figma or Canva:

1. **Create 1280x720 canvas**
2. **Add background**: Subtle gradient or solid color
3. **Import screenshot**: As main element
4. **Add text layers**:
   - Title: "Zen Notes"
   - Tagline: "Integrated Note-Taking"
   - Features: Bullet points with icons
5. **Add visual elements**:
   - Icons for features
   - Decorative elements (subtle)
   - Brand colors
6. **Export as PNG**

## Tools You Can Use

### Free Tools:
- **Canva** (Web) - Templates and easy design
- **GIMP** (Desktop) - Powerful image editor
- **Photopea** (Web) - Photoshop alternative
- **Figma** (Web/Desktop) - Professional design tool
- **Krita** (Desktop) - Digital painting/editing

### Quick Screenshot:
- **Windows**: Snipping Tool, Win+Shift+S
- **Mac**: Cmd+Shift+4
- **Linux**: Spectacle, Flameshot, gnome-screenshot

### Browser Tools:
- **Firefox/Zen DevTools**: F12 → Responsive Design Mode
- **Firefox Screenshot Tool**: Right-click → Take Screenshot

## Example Workflow

```bash
# 1. Take screenshot
# Use Zen Browser → F12 → Responsive Design → 1280x720 → Screenshot

# 2. Edit in GIMP/Canva
# - Open image
# - Add text overlay
# - Adjust colors/contrast
# - Export as PNG

# 3. Optimize (optional)
pngquant preview.png --output preview.png --quality 80-95

# 4. Add to repository
git add preview.png
git commit -m "Add preview image"
git push origin main
```

## Design Tips

### Typography:
- Use clean, readable fonts
- Max 2-3 different fonts
- Sufficient size (min 24px for main text)
- High contrast with background

### Colors:
- Match Zen Browser theme
- Use brand colors consistently
- Ensure text is readable
- Consider dark/light themes

### Composition:
- Follow rule of thirds
- Leave breathing room
- Balance elements
- Guide eye to important parts

### Content:
- Show real usage, not empty states
- Use meaningful example notes
- Demonstrate key features
- Keep it professional

## Quality Checklist

Before uploading, verify:

- ✅ Exactly 1280 x 720 pixels
- ✅ Less than 500 KB file size
- ✅ PNG or JPG format
- ✅ No personal information visible
- ✅ High resolution, not blurry
- ✅ Text is readable
- ✅ Colors look good
- ✅ Shows mod in action
- ✅ Professional appearance
- ✅ No copyrighted content

## Common Mistakes to Avoid

1. ❌ **Too small dimensions**: Must be exactly 1280x720
2. ❌ **Low quality**: Blurry or pixelated
3. ❌ **Too much text**: Keep it concise
4. ❌ **Poor contrast**: Text hard to read
5. ❌ **Empty UI**: Show it being used
6. ❌ **Too busy**: Keep it clean
7. ❌ **Wrong format**: Use PNG or JPG
8. ❌ **Too large file**: Compress if >500KB

## Inspiration

Look at popular mods in Sine marketplace:
- Zen Nebula
- Advanced Tab Groups
- Other top-rated mods

Study what makes their previews effective.

## Testing Your Preview

1. View at 100% size - is text readable?
2. View as thumbnail - still clear?
3. Try dark and light backgrounds
4. Ask for feedback from others
5. Compare with other mods

## Need Help?

- **Design feedback**: Ask in Sine Discord
- **Technical issues**: GitHub Issues
- **Inspiration**: Browse Sine marketplace

---

**Remember**: Your preview is your mod's first impression. Invest time to make it great!

## Quick Template

If you're short on time, use this simple approach:

1. Take clean screenshot of mod in action
2. Add text at bottom:
   - Line 1: "ZEN NOTES"
   - Line 2: "Integrated Note-Taking"
3. Add subtle gradient overlay for readability
4. Save as preview.png

**Done!** 🎨

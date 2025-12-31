# Preparing Zen Notes for Sine Publication

This guide will help you prepare and publish the Zen Notes mod to the Sine marketplace.

## Step 1: Fork the Repository

1. Fork this repository to your GitHub account
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOURUSERNAME/zen-notes-mod.git
   cd zen-notes-mod
   ```

## Step 2: Create a Preview Image

Create an attractive preview image to showcase your mod:

### Recommended Specifications
- **Size**: 1280x720px (16:9 aspect ratio)
- **Format**: PNG or JPG
- **File name**: `preview.png`
- **Max file size**: <500KB

### What to Include
- Screenshot of the notes panel in action
- Highlight key features visually
- Use clean, high-resolution images
- Show the mod in a real browsing context

### Tools You Can Use
- **Screenshot tool**: Built-in Zen Browser DevTools
- **Image editing**: GIMP, Photoshop, Figma, Canva
- **Quick mockup**: Use browser screenshot + simple annotation

### Example Layout Ideas
```
┌─────────────────────────────────┐
│                                 │
│  Zen Browser with Notes Panel  │
│                                 │
│  ┌──────────┬──────────────┐   │
│  │  Browser │ Notes Panel  │   │
│  │  Content │              │   │
│  │          │  ✓ Feature 1 │   │
│  │          │  ✓ Feature 2 │   │
│  └──────────┴──────────────┘   │
│                                 │
│  "Zen Notes - Take notes"      │
│  "without leaving your browser" │
└─────────────────────────────────┘
```

### Quick Screenshot Method
1. Open Zen Browser
2. Open the Notes panel (`Ctrl+Shift+N`)
3. Create a sample note
4. Press `F12` → Select "Responsive Design Mode"
5. Set viewport to 1280x720
6. Take screenshot
7. Add text overlay with title/features (optional)
8. Save as `preview.png`

## Step 3: Update theme.json

Edit `theme.json` and replace `yourusername` with your actual GitHub username:

```json
{
  "homepage": "https://github.com/YOURUSERNAME/zen-notes-mod",
  "updateURL": "https://github.com/YOURUSERNAME/zen-notes-mod",
  "image": "https://raw.githubusercontent.com/YOURUSERNAME/zen-notes-mod/main/preview.png",
  "readme": "https://raw.githubusercontent.com/YOURUSERNAME/zen-notes-mod/main/README.md"
}
```

## Step 4: Commit and Push

```bash
git add preview.png theme.json
git commit -m "Add preview image and update theme.json for Sine"
git push origin main
```

## Step 5: Test Locally with Sine

Before publishing, test that your mod works with Sine:

1. Install Sine in Zen Browser
2. In Sine settings, click "Add Unpublished Mod"
3. Enter: `YOURUSERNAME/zen-notes-mod`
4. Click Add
5. Restart Zen Browser
6. Test the mod thoroughly

## Step 6: Submit to Sine Marketplace

1. Go to: https://github.com/CosmoCreeper/Sine/issues/new?template=add-theme.yml

2. Fill out the form:
   - **Mod Name**: `Zen Notes`
   - **Author/Organization**: Your GitHub username
   - **Repository**: `YOURUSERNAME/zen-notes-mod`
   - **Description**: 
     ```
     Integrated note-taking component for Zen Browser with context 
     awareness, quick access, and local-first storage. Take notes 
     linked to specific pages or use as a scratchpad.
     ```
   - **Homepage**: `https://github.com/YOURUSERNAME/zen-notes-mod`
   - **Screenshot**: Upload your `preview.png` or provide the raw GitHub link
   - **Category**: Productivity / Utility
   - **Tags**: `productivity, notes, utility, sidebar`

3. Submit the issue

4. Wait for review (usually <24 hours)

## Step 7: After Approval

Once approved:

✅ Your mod appears in the Sine marketplace
✅ Users can install with one click
✅ Updates pull automatically from your repository
✅ No need to submit update requests

## Maintaining Your Mod

### Releasing Updates

1. Make changes to your code
2. Update version in `theme.json`:
   ```json
   "version": "1.1.0"
   ```
3. Commit and push
4. Create a GitHub release (optional but recommended):
   - Go to Releases → New Release
   - Tag: `v1.1.0`
   - Title: `Version 1.1.0`
   - Description: List of changes
5. Users get the update automatically via Sine!

### Versioning Guidelines

Follow [Semantic Versioning](https://semver.org/):
- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features, backwards compatible
- **Patch** (1.0.0 → 1.0.1): Bug fixes

## Tips for Success

✅ **Good README**: Clear installation and usage instructions
✅ **Quality Preview**: Shows the mod in action
✅ **Detailed Description**: Explains features clearly
✅ **Tag Properly**: Makes it easier for users to find
✅ **Respond to Issues**: Help users with problems
✅ **Keep Updated**: Fix bugs and add features
✅ **Community Engagement**: Join Sine Discord, respond to feedback

## Getting Help

- **Sine Discord**: https://discord.gg/P76BvB2MXS
- **Sine Discussions**: https://github.com/CosmoCreeper/Sine/discussions
- **Sine Wiki**: https://github.com/CosmoCreeper/Sine/wiki

## Example Submission

Here's an example of a good Sine submission:

```yaml
Mod Name: Zen Notes
Repository: johndoe/zen-notes-mod
Description: |
  Take notes without leaving your browser! Zen Notes adds an 
  integrated sidebar for capturing ideas, research notes, and 
  quick thoughts.
  
  Features:
  - Context-aware notes linked to pages
  - Scratchpad mode for general notes
  - Tag system for organization
  - Full-text search
  - Auto-save (no data loss!)
  - 100% local storage (privacy-first)
  - Keyboard shortcut (Ctrl+Shift+N)
  
Screenshot: [attached preview.png]
Homepage: https://github.com/johndoe/zen-notes-mod
Tags: productivity, notes, utility, sidebar
```

---

**Ready to publish?** Follow the steps above and join the Sine marketplace! 🚀

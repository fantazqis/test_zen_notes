# GitHub Setup & Publishing Guide

Complete guide to setting up your repository and publishing to Sine.

## Step 1: Create GitHub Repository

### 1.1 Create New Repository

1. Go to GitHub: https://github.com/new
2. Fill in details:
   - **Repository name**: `zen-notes-mod` (or your preferred name)
   - **Description**: "Integrated note-taking for Zen Browser with context awareness"
   - **Visibility**: Public (required for Sine)
   - **Initialize with**: ✅ README ✅ .gitignore (Node) ✅ MIT License
3. Click "Create repository"

### 1.2 Clone Your Repository

```bash
git clone https://github.com/YOURUSERNAME/zen-notes-mod.git
cd zen-notes-mod
```

## Step 2: Add the Mod Files

### 2.1 Copy All Files

Copy all files from this package into your cloned repository:

```bash
# Copy the entire structure
cp -r /path/to/zen-notes-mod/* /path/to/your/zen-notes-mod/
```

### 2.2 Essential Files Checklist

Ensure you have:
- ✅ `chrome/` folder with:
  - `notes.uc.js`
  - `notes.css`
  - `userChrome.css`
- ✅ `theme.json`
- ✅ `README.md`
- ✅ `LICENSE`
- ✅ `.gitignore`

### 2.3 Update theme.json

Edit `theme.json` and replace `yourusername` with your actual GitHub username:

```json
{
  "name": "Zen Notes",
  "description": "Integrated note-taking component for Zen Browser",
  "author": "YOUR_GITHUB_USERNAME",
  "version": "1.0.0",
  "homepage": "https://github.com/YOUR_GITHUB_USERNAME/zen-notes-mod",
  "updateURL": "https://github.com/YOUR_GITHUB_USERNAME/zen-notes-mod",
  "license": "MIT",
  "tags": ["productivity", "notes", "utility", "sidebar"],
  "image": "https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/zen-notes-mod/main/preview.png",
  "readme": "https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/zen-notes-mod/main/README.md"
}
```

## Step 3: Create Preview Image

### 3.1 Take Screenshot

1. Open Zen Browser
2. Install the mod locally to test
3. Open Notes panel (`Ctrl+Shift+N`)
4. Create some sample notes
5. Take a clean screenshot showing:
   - The browser with a website
   - The notes panel with notes
   - Key features visible

### 3.2 Create Preview

Option A: Use the screenshot as-is
- Crop to 1280x720px
- Save as `preview.png`

Option B: Add text overlay (recommended)
- Use image editor (Canva, GIMP, Photoshop)
- Add mod name and key features
- Keep it clean and professional
- Save as `preview.png`

### 3.3 Add to Repository

```bash
# Place preview.png in the root directory
cp /path/to/preview.png .
```

## Step 4: Commit and Push

### 4.1 Stage All Files

```bash
git add .
```

### 4.2 Commit

```bash
git commit -m "Initial commit: Zen Notes mod v1.0.0"
```

### 4.3 Push to GitHub

```bash
git push origin main
```

## Step 5: Verify on GitHub

1. Go to your repository: `https://github.com/YOURUSERNAME/zen-notes-mod`
2. Verify these files are visible:
   - ✅ README.md displays correctly
   - ✅ chrome/ folder exists
   - ✅ theme.json is present
   - ✅ preview.png displays
   - ✅ LICENSE file is there

## Step 6: Test Installation via Sine

Before publishing to marketplace, test it works:

### 6.1 Install via Unpublished Mod

1. Open Zen Browser
2. Go to Settings → Sine
3. Click "Add Unpublished Mod"
4. Enter: `YOURUSERNAME/zen-notes-mod`
5. Click Add
6. Restart Zen Browser

### 6.2 Test Functionality

- ✅ Notes panel opens (`Ctrl+Shift+N`)
- ✅ Can create notes
- ✅ Can edit notes
- ✅ Can delete notes
- ✅ Filters work
- ✅ Search works
- ✅ Tags work
- ✅ Auto-save works
- ✅ Styles look correct

## Step 7: Publish to Sine Marketplace

### 7.1 Create Issue

1. Go to: https://github.com/CosmoCreeper/Sine/issues/new?template=add-theme.yml

### 7.2 Fill Out the Form

```yaml
Mod Name: Zen Notes
Author: YOUR_GITHUB_USERNAME
Repository: YOURUSERNAME/zen-notes-mod
Description: |
  Integrated note-taking component for Zen Browser with context awareness, 
  quick access, and local-first storage.
  
  Features:
  - Context-aware notes linked to pages
  - Scratchpad mode for general notes  
  - Tag system for organization
  - Full-text search
  - Auto-save (2 seconds after typing)
  - 100% local storage (privacy-first)
  - Keyboard shortcut (Ctrl+Shift+N)
  - Dark/light theme support
  
Homepage: https://github.com/YOURUSERNAME/zen-notes-mod
Screenshot: [Upload or link to preview.png]
Category: Productivity
Tags: productivity, notes, utility, sidebar
License: MIT
```

### 7.3 Submit

Click "Submit new issue" and wait for review!

## Step 8: After Approval

Once approved (usually within 24 hours):

1. ✅ Your mod appears in Sine marketplace
2. ✅ Users can install with one click
3. ✅ Auto-updates work from your repo
4. ✅ You're listed as the author

## Making Updates

### Update Workflow

1. **Make changes** to your mod
2. **Test locally**
3. **Update version** in `theme.json`:
   ```json
   "version": "1.1.0"
   ```
4. **Update CHANGELOG.md**
5. **Commit and push**:
   ```bash
   git add .
   git commit -m "v1.1.0: Add feature X"
   git push origin main
   ```
6. **Create GitHub Release** (optional):
   - Go to Releases → New Release
   - Tag: `v1.1.0`
   - Title: `Version 1.1.0`
   - Description: Changelog
   - Publish release

### Auto-Updates

- Sine pulls updates automatically from your repository
- Users get new versions without any action needed
- No need to submit update requests to Sine!

## Version Numbers

Follow [Semantic Versioning](https://semver.org/):

- `1.0.0` → `1.0.1` - Bug fixes (patch)
- `1.0.0` → `1.1.0` - New features (minor)
- `1.0.0` → `2.0.0` - Breaking changes (major)

## Troubleshooting

### Repository Issues

**Q: Can't push to GitHub**
```bash
# Make sure you're authenticated
git config user.name "Your Name"
git config user.email "your@email.com"

# If using HTTPS, you may need a Personal Access Token
# Go to GitHub → Settings → Developer Settings → Personal Access Tokens
```

**Q: Files missing on GitHub**
```bash
# Check what's being ignored
cat .gitignore

# Force add if necessary
git add -f filename

# Or update .gitignore to not ignore the file
```

### Sine Issues

**Q: Mod not found in Sine**
- Make sure repository is public
- Verify theme.json is in root
- Check chrome/ folder exists
- Wait a few minutes for GitHub to sync

**Q: Mod installs but doesn't work**
- Check browser console for errors (F12)
- Verify file paths in chrome/userChrome.css
- Make sure notes.uc.js has correct extension
- Restart browser after installation

**Q: Updates not working**
- Verify you updated version in theme.json
- Check that you pushed to GitHub
- Try "Check for Updates" in Sine
- Clear browser cache and restart

## Best Practices

✅ **Commit often** - Small, focused commits
✅ **Write good commit messages** - Explain what and why
✅ **Tag releases** - Use GitHub releases for versions
✅ **Respond to issues** - Help users who have problems
✅ **Keep README updated** - Documentation is crucial
✅ **Test before pushing** - Don't break production!
✅ **Use branches** - For experimental features
✅ **Follow semantic versioning** - Clear version numbers

## Community

Join the Sine community:
- **Discord**: https://discord.gg/P76BvB2MXS
- **Discussions**: https://github.com/CosmoCreeper/Sine/discussions
- **Wiki**: https://github.com/CosmoCreeper/Sine/wiki

## Support

If you need help:
1. Check this guide first
2. Read Sine documentation
3. Search existing GitHub issues
4. Ask in Sine Discord
5. Create an issue on your repository

---

**Ready to publish?** Follow the steps above and join the Sine marketplace! 🚀

## Quick Reference Commands

```bash
# Initial setup
git clone https://github.com/YOURUSERNAME/zen-notes-mod.git
cd zen-notes-mod

# Make changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main

# Create release (optional)
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

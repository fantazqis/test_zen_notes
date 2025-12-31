# File Structure Guide

## Sine-Compatible Structure

```
zen-notes-mod/
├── chrome/                      # Required by Sine
│   ├── notes.uc.js             # Main JavaScript (Sine format)
│   ├── notes.css               # Styles for the notes component
│   └── userChrome.css          # Imports notes.css
│
├── examples/                    # Example configs for manual installation
│   ├── userChrome.css          # Example userChrome.css
│   └── userChrome.js           # Example userChrome.js loader
│
├── theme.json                   # Required by Sine - Mod metadata
├── manifest.json                # For WebExtension installation
│
├── notes.js                     # Original JS (for manual install)
├── notes.css                    # Original CSS (for manual install)
│
├── README.md                    # Main documentation
├── SINE_INSTALLATION.md         # Sine-specific instructions
├── PUBLISHING.md                # Guide to publish to Sine marketplace
├── QUICKSTART.md                # Quick setup guide
├── PROJECT_SUMMARY.md           # Project overview
├── CHANGELOG.md                 # Version history
├── LICENSE                      # MIT License
└── .gitignore                   # Git ignore rules
```

## Key Files for Sine

### 1. theme.json (Required)
Contains mod metadata that Sine uses to display your mod in the marketplace:

```json
{
  "name": "Zen Notes",
  "description": "Short description",
  "author": "Your Name",
  "version": "1.0.0",
  "homepage": "https://github.com/username/repo",
  "updateURL": "https://github.com/username/repo",
  "license": "MIT",
  "tags": ["productivity", "notes"],
  "image": "https://raw.githubusercontent.com/username/repo/main/preview.png",
  "readme": "https://raw.githubusercontent.com/username/repo/main/README.md"
}
```

### 2. chrome/ folder (Required)
Contains the actual mod files:
- **notes.uc.js**: Main JavaScript (`.uc.js` extension for Sine)
- **notes.css**: Styles
- **userChrome.css**: Imports the styles

### 3. preview.png (Recommended)
A preview image (1280x720px) showcasing your mod. Upload this to the repository root and reference it in `theme.json`.

## File Purposes

| File | Purpose | Required For |
|------|---------|--------------|
| `chrome/notes.uc.js` | Main functionality | Sine, Manual |
| `chrome/notes.css` | Styling | Sine, Manual |
| `chrome/userChrome.css` | CSS loader | Sine |
| `theme.json` | Mod metadata | Sine ✅ |
| `preview.png` | Marketplace preview | Sine (recommended) |
| `manifest.json` | Extension config | WebExtension |
| `notes.js` | Original JS | Manual install |
| `notes.css` | Original CSS | Manual install |

## Installation Methods

### Via Sine (Recommended)
Sine reads:
1. `theme.json` → Gets mod info
2. `chrome/` → Installs files to user's profile
3. Auto-updates from GitHub

### Manual Installation
Users copy files from `notes.js` and `notes.css` to their profile's chrome folder.

### WebExtension
Users load `manifest.json` as a temporary extension.

## Publishing Workflow

1. **Develop**: Edit files in `chrome/`
2. **Update**: Increment version in `theme.json`
3. **Commit**: Push to GitHub
4. **Sine Auto-Update**: Users get updates automatically!

## Why Two Sets of Files?

- **chrome/notes.uc.js** + **chrome/notes.css**: Sine-compatible format
- **notes.js** + **notes.css**: Original files for manual installation
- This ensures compatibility with both Sine and manual methods

## Naming Conventions

### For Sine Compatibility
- JavaScript files should use `.uc.js` extension
- CSS files can be `.css`
- Place all files in `chrome/` folder
- `userChrome.css` imports other CSS files

### File Extensions
- `.uc.js` - User Chrome JavaScript (Sine format)
- `.css` - Standard CSS
- `.json` - Configuration files

## Repository Requirements

For Sine marketplace:
- ✅ Public GitHub repository
- ✅ Valid `theme.json` in root
- ✅ `chrome/` folder with mod files
- ✅ Preview image (recommended)
- ✅ README.md (recommended)
- ✅ LICENSE file (recommended)

## Best Practices

1. **Version in theme.json**: Always update version when pushing changes
2. **Semantic Versioning**: Use 1.0.0 → 1.1.0 → 2.0.0 format
3. **Clear Commits**: Describe changes in commit messages
4. **Test Before Push**: Verify mod works before committing
5. **GitHub Releases**: Tag versions for easy tracking
6. **Responsive Support**: Answer issues and pull requests

## Directory Permissions

If you encounter permission issues on Linux:
```bash
chmod -R 755 chrome/
```

## Adding New Features

1. Edit `chrome/notes.uc.js` or `chrome/notes.css`
2. Update version in `theme.json`
3. Document changes in `CHANGELOG.md`
4. Commit and push
5. Sine auto-updates all users!

---

**For more information:**
- Sine installation: See [SINE_INSTALLATION.md](SINE_INSTALLATION.md)
- Publishing guide: See [PUBLISHING.md](PUBLISHING.md)
- Quick start: See [QUICKSTART.md](QUICKSTART.md)

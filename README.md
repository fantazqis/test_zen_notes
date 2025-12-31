# Zen Browser Notes Mod

A fully-integrated, lightweight note-taking component for Zen Browser with context awareness, quick access, and local-first storage.

## Features

✨ **Core Features**
- **Sidebar Integration** - Sleek, native-feeling sidebar panel
- **Quick Access** - `Ctrl+Shift+N` keyboard shortcut
- **Context Awareness** - Link notes to specific URLs/pages
- **Scratchpad Mode** - General notes not tied to any page
- **Auto-save** - Saves automatically 2 seconds after typing stops
- **Tag System** - Organize notes with free-text tags
- **Search** - Full-text search across all notes
- **Filter Modes** - View all notes, current page only, or scratchpad

🎨 **Design**
- Modern, clean interface
- Dark/light theme support (auto-detects system preference)
- Smooth animations
- Responsive layout
- Accessible keyboard navigation

🔒 **Privacy**
- **Local-first storage** - All data stored in browser's localStorage
- No cloud sync or external connections
- Full data ownership and control

## Installation

### 🎯 Recommended: Install via Sine (Easiest!)

**Sine** is a mod manager for Zen Browser that makes installation and updates effortless.

1. **Install Sine**: Follow the guide at https://github.com/CosmoCreeper/Sine
2. **Install Zen Notes**:
   - Open Zen Browser → `Settings` → `Sine`
   - Search for "Zen Notes" in the marketplace
   - Click `Install`
   - Restart browser
3. **Start using**: Press `Ctrl+Shift+N`!

📖 **Detailed Sine instructions**: See [SINE_INSTALLATION.md](SINE_INSTALLATION.md)

**Benefits of Sine**:
- ✅ One-click installation
- ✅ Automatic updates from GitHub
- ✅ Easy enable/disable toggle
- ✅ No manual file management

---

### Method 2: Manual userChrome.js Installation

1. **Enable userChrome.js in Zen Browser**
   - Navigate to `about:config`
   - Search for `toolkit.legacyUserProfileCustomizations.stylesheets`
   - Set to `true`

2. **Locate your Zen Browser profile folder**
   - Type `about:support` in the address bar
   - Find "Profile Folder" and click "Open Folder"
   
3. **Create chrome folder** (if it doesn't exist)
   - Inside your profile folder, create a folder named `chrome`

4. **Install the mod**
   - Copy `notes.js` to the `chrome` folder
   - Copy `notes.css` to the `chrome` folder
   
5. **Load the JavaScript**
   
   **Option A: Using userChrome.js loader**
   - Install a userChrome.js loader (like [xiaoxiaoflood's loader](https://github.com/xiaoxiaoflood/firefox-scripts))
   - Follow the loader's instructions to enable custom scripts
   - Rename `notes.js` to `notes.uc.js` for auto-loading
   
   **Option B: Manual integration**
   - Create/edit `userChrome.js` in the chrome folder:
   ```javascript
   // Load the Notes mod
   var notesScript = Services.scriptloader.loadSubScript(
     "chrome://userchrome/content/notes.js", 
     window
   );
   ```

6. **Load the CSS**
   - Create/edit `userChrome.css` in the chrome folder:
   ```css
   @import url("notes.css");
   ```

7. **Restart Zen Browser**

### Method 3: Browser Extension (Alternative)

If you prefer an extension-based approach, you can package this as a WebExtension:

1. Create a `manifest.json`:
```json
{
  "manifest_version": 3,
  "name": "Zen Notes",
  "version": "1.0.0",
  "description": "Integrated note-taking for Zen Browser",
  "permissions": ["storage"],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["notes.js"],
      "css": ["notes.css"],
      "run_at": "document_end"
    }
  ]
}
```

2. Load as temporary extension:
   - Go to `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Select the `manifest.json` file

## Usage

### Opening the Notes Panel

- **Keyboard Shortcut**: `Ctrl+Shift+N` (or `Cmd+Shift+N` on Mac)
- **UI Button**: Look for the Notes button in the sidebar (if added to toolbar)

### Creating a Note

1. Open the notes panel
2. Click the `+` button or press `Ctrl+Shift+N`
3. Type your note
4. Optionally:
   - Toggle "Link to current page" to associate the note with the current URL
   - Add comma-separated tags
5. Click "Save" or the note auto-saves after 2 seconds of inactivity

### Filtering Notes

Use the filter buttons at the top of the panel:
- **All Notes** - Shows all your notes
- **This Page** - Shows only notes linked to the current URL
- **Scratchpad** - Shows only notes not linked to any page

### Searching Notes

Use the search bar to find notes by content or tags. Search works across all notes regardless of the current filter.

### Editing/Deleting Notes

- **Edit**: Hover over a note card and click the edit icon (pencil)
- **Delete**: Hover over a note card and click the delete icon (trash)

### Visiting Linked Pages

Click on any note card that has a linked URL to navigate to that page.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+N` | Toggle notes panel |
| `Ctrl+S` (in editor) | Save note |
| `Esc` (in editor) | Cancel editing |

## Configuration

You can customize the mod by editing `notes.js`:

```javascript
const CONFIG = {
  AUTO_SAVE_DELAY: 2000,      // Auto-save delay in milliseconds
  STORAGE_KEY: 'zenBrowserNotes',  // localStorage key
  MAX_NOTES: 1000,            // Maximum number of notes to keep
  SIDEBAR_WIDTH: '350px'      // Width of the sidebar
};
```

## Customizing Appearance

Edit `notes.css` to customize colors and styling. CSS variables are used for easy theming:

```css
.zen-notes-sidebar {
  --zen-notes-bg: #1a1a1a;
  --zen-notes-accent: #0066cc;
  --zen-notes-text: #e0e0e0;
  /* ... more variables ... */
}
```

## Data Storage

All notes are stored in the browser's `localStorage` under the key `zenBrowserNotes`. The data format is:

```json
[
  {
    "id": "unique-id",
    "content": "Note content",
    "url": "https://example.com" or null,
    "tags": ["tag1", "tag2"],
    "created": "2025-01-01T00:00:00.000Z",
    "modified": "2025-01-01T00:00:00.000Z"
  }
]
```

### Backup Your Notes

To backup your notes:
1. Open browser console (F12)
2. Run: `copy(localStorage.getItem('zenBrowserNotes'))`
3. Paste into a text file and save

To restore:
1. Open browser console
2. Run: `localStorage.setItem('zenBrowserNotes', 'paste-your-backup-here')`
3. Refresh the page

## Performance

- **Initial Load**: < 500ms on first panel open
- **Auto-save**: 2-second debounce to minimize storage writes
- **Memory**: Minimal footprint when panel is closed
- **Storage**: ~1KB per average note (50-100 words)

## Browser Compatibility

Designed for **Zen Browser** (Firefox-based). Should work on:
- ✅ Zen Browser (all versions)
- ✅ Firefox 100+
- ⚠️ Other Firefox forks (may need adjustments)

## Troubleshooting

### Notes panel doesn't appear
- Check that CSS is properly loaded in `userChrome.css`
- Verify JavaScript is loading (check browser console for errors)
- Restart browser after installation

### Keyboard shortcut doesn't work
- Check for conflicts with other extensions
- Ensure the notes panel isn't already open
- Try clicking the UI button instead

### Notes aren't saving
- Check browser console for errors
- Verify localStorage is enabled
- Check if you've hit the storage quota (very rare)

### Styling looks wrong
- Ensure `notes.css` is in the chrome folder
- Check that `@import url("notes.css");` is in `userChrome.css`
- Try force-refreshing with `Ctrl+Shift+R`

## Roadmap

Potential future enhancements:
- [ ] Export/import notes (JSON, Markdown)
- [ ] Rich text formatting
- [ ] Note categories/folders
- [ ] Sync via third-party services (optional)
- [ ] Keyboard shortcuts customization
- [ ] Note templates
- [ ] Collaboration features
- [ ] Full-text search with highlighting
- [ ] Note history/versioning

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## License

MIT License - Feel free to modify and distribute as needed.

## Credits

Built with ❤️ for the Zen Browser community.

## Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review browser console for error messages
3. Check Zen Browser forums/community
4. Open an issue with details about your setup

---

**Note**: This is a community mod and is not officially affiliated with or endorsed by Zen Browser.

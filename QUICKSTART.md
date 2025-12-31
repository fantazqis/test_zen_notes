# Quick Start Guide - Zen Notes Mod

Get up and running with Zen Notes in 5 minutes!

## 🚀 Fastest Installation (userChrome Method)

### Step 1: Find Your Profile Folder
1. Open Zen Browser
2. Type `about:support` in the address bar
3. Find "Profile Folder" and click "Open Folder"

### Step 2: Create Chrome Folder
Inside your profile folder, create a folder named `chrome` (if it doesn't exist)

### Step 3: Copy Files
Copy these 2 files into the `chrome` folder:
- `notes.js`
- `notes.css`

### Step 4: Enable Custom Styles
1. Type `about:config` in the address bar
2. Accept the warning
3. Search for: `toolkit.legacyUserProfileCustomizations.stylesheets`
4. Set it to `true` (double-click)

### Step 5: Create userChrome.css
In the `chrome` folder, create a file named `userChrome.css` with this content:
```css
@import url("notes.css");
```

### Step 6: Enable JavaScript (Choose One Method)

**Method A: Simple Injection (Add to userChrome.css)**
Add this to your `userChrome.css`:
```css
@-moz-document url("chrome://browser/content/browser.xhtml") {
  /* The JS will be loaded via extension or content script */
}
```
Then install as a temporary extension (see Extension Method below).

**Method B: userChrome.js Loader (More Advanced)**
1. Install [xiaoxiaoflood's userChrome.js loader](https://github.com/xiaoxiaoflood/firefox-scripts)
2. Rename `notes.js` to `notes.uc.js`
3. Place it in the `chrome` folder

### Step 7: Restart Zen Browser

Done! Press `Ctrl+Shift+N` to open your notes panel.

---

## 📦 Extension Installation (Alternative)

### Step 1: Prepare Files
Make sure you have:
- `manifest.json`
- `notes.js`
- `notes.css`

All in the same folder.

### Step 2: Load as Temporary Extension
1. Type `about:debugging#/runtime/this-firefox` in the address bar
2. Click "Load Temporary Add-on"
3. Navigate to your mod folder
4. Select `manifest.json`

### Step 3: Start Using
Press `Ctrl+Shift+N` to open the notes panel!

**Note**: Temporary extensions are removed when you close the browser. For permanent installation, you'll need to package and sign the extension, or use the userChrome method above.

---

## 🎯 First Steps

### Create Your First Note
1. Press `Ctrl+Shift+N` to open the panel
2. Click the `+` button
3. Type your note
4. It auto-saves after 2 seconds!

### Link a Note to This Page
1. Create a note
2. Check "Link to current page"
3. Save
4. When you return to this page, your note will be there!

### Use Tags
1. While editing a note
2. Add tags in the tags field (comma-separated)
3. Example: `work, important, follow-up`

### Filter Your Notes
Use the buttons at the top:
- **All Notes**: See everything
- **This Page**: Only notes for the current URL
- **Scratchpad**: Notes not linked to any page

---

## 💡 Pro Tips

1. **Quick Scratchpad**: Leave "Link to current page" unchecked for quick, general notes
2. **Search Everything**: Use the search bar to find notes by content or tags
3. **Keyboard Shortcuts**: 
   - `Ctrl+Shift+N`: Toggle panel
   - `Ctrl+S`: Save (when editing)
   - `Esc`: Cancel (when editing)
4. **Backup Your Data**: See README.md for backup instructions

---

## ❓ Not Working?

### Panel doesn't open
- Check that you've enabled `toolkit.legacyUserProfileCustomizations.stylesheets` in `about:config`
- Verify files are in the correct `chrome` folder
- Restart browser completely

### Styles look wrong
- Make sure `@import url("notes.css");` is in your `userChrome.css`
- Check that `notes.css` is in the same folder as `userChrome.css`

### JavaScript not running
- For userChrome method: Ensure userChrome.js loader is properly installed
- For extension method: Check `about:debugging` to see if extension loaded
- Check browser console (F12) for error messages

---

## 📚 Next Steps

- Read the full [README.md](README.md) for advanced configuration
- Customize colors and styling in `notes.css`
- Set up automatic backups
- Join the community and share your experience!

---

**Need help?** Check the [README.md](README.md) troubleshooting section or reach out to the Zen Browser community!

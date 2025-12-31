/* Zen Browser - Custom JavaScript Loader */
/* This file loads custom JavaScript into Zen Browser */

// Note: This requires a userChrome.js loader to be installed first
// Recommended: https://github.com/xiaoxiaoflood/firefox-scripts

// For xiaoxiaoflood's loader, rename this file to anything.uc.js
// For example: zen-notes.uc.js

// If using a different loader, you may need to adapt the loading mechanism

(function() {
  'use strict';
  
  // Wait for browser to be ready
  if (typeof Services === 'undefined') {
    console.error('Services is not available. Make sure userChrome.js loader is properly installed.');
    return;
  }

  // Load the Zen Notes mod
  try {
    // For .uc.js files with xiaoxiaoflood's loader, the script in the same directory
    // will be automatically loaded. No additional code needed here.
    
    // If you need manual loading:
    // Services.scriptloader.loadSubScript('chrome://userchrome/content/notes.js', window);
    
    console.log('Zen Notes mod loader initialized');
  } catch (e) {
    console.error('Failed to load Zen Notes mod:', e);
  }
})();

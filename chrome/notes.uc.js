// Zen Browser Notes Mod
// Integrated note-taking component with context awareness

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    AUTO_SAVE_DELAY: 2000,
    STORAGE_KEY: 'zenBrowserNotes',
    MAX_NOTES: 1000,
    SIDEBAR_WIDTH: '350px'
  };

  // Storage Manager
  class NotesStorage {
    constructor() {
      this.notes = this.loadNotes();
    }

    loadNotes() {
      try {
        const data = localStorage.getItem(CONFIG.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
      } catch (e) {
        console.error('Failed to load notes:', e);
        return [];
      }
    }

    saveNotes() {
      try {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(this.notes));
        return true;
      } catch (e) {
        console.error('Failed to save notes:', e);
        return false;
      }
    }

    createNote(content, url = null, tags = []) {
      const note = {
        id: Date.now() + Math.random().toString(36).substr(2, 9),
        content: content,
        url: url,
        tags: tags,
        created: new Date().toISOString(),
        modified: new Date().toISOString()
      };
      
      this.notes.unshift(note);
      if (this.notes.length > CONFIG.MAX_NOTES) {
        this.notes = this.notes.slice(0, CONFIG.MAX_NOTES);
      }
      
      this.saveNotes();
      return note;
    }

    updateNote(id, updates) {
      const note = this.notes.find(n => n.id === id);
      if (note) {
        Object.assign(note, updates, { modified: new Date().toISOString() });
        this.saveNotes();
        return note;
      }
      return null;
    }

    deleteNote(id) {
      const index = this.notes.findIndex(n => n.id === id);
      if (index !== -1) {
        this.notes.splice(index, 1);
        this.saveNotes();
        return true;
      }
      return false;
    }

    getNotesForUrl(url) {
      return this.notes.filter(n => n.url === url);
    }

    searchNotes(query) {
      const lowerQuery = query.toLowerCase();
      return this.notes.filter(n => 
        n.content.toLowerCase().includes(lowerQuery) ||
        n.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    getAllNotes() {
      return this.notes;
    }
  }

  // UI Manager
  class NotesUI {
    constructor(storage) {
      this.storage = storage;
      this.sidebar = null;
      this.currentNote = null;
      this.autoSaveTimer = null;
      this.isVisible = false;
      this.filterMode = 'all'; // 'all', 'current', 'scratchpad'
      
      this.init();
    }

    init() {
      this.createSidebar();
      this.attachEventListeners();
      this.loadSettings();
    }

    loadSettings() {
      const savedState = localStorage.getItem('zenNotesState');
      if (savedState) {
        const state = JSON.parse(savedState);
        this.isVisible = state.visible || false;
        this.filterMode = state.filterMode || 'all';
      }
    }

    saveSettings() {
      localStorage.setItem('zenNotesState', JSON.stringify({
        visible: this.isVisible,
        filterMode: this.filterMode
      }));
    }

    createSidebar() {
      // Create sidebar container
      this.sidebar = document.createElement('div');
      this.sidebar.id = 'zen-notes-sidebar';
      this.sidebar.className = 'zen-notes-sidebar';
      
      this.sidebar.innerHTML = `
        <div class="zen-notes-header">
          <h2>Notes</h2>
          <div class="zen-notes-controls">
            <button id="zen-notes-new" title="New Note" aria-label="Create new note">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"/>
              </svg>
            </button>
            <button id="zen-notes-close" title="Close" aria-label="Close notes panel">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="zen-notes-filters">
          <button class="filter-btn active" data-filter="all">All Notes</button>
          <button class="filter-btn" data-filter="current">This Page</button>
          <button class="filter-btn" data-filter="scratchpad">Scratchpad</button>
        </div>

        <div class="zen-notes-search">
          <input type="text" id="zen-notes-search-input" placeholder="Search notes..." aria-label="Search notes">
        </div>
        
        <div class="zen-notes-content">
          <div id="zen-notes-editor" class="zen-notes-editor" style="display: none;">
            <div class="editor-toolbar">
              <label class="link-toggle">
                <input type="checkbox" id="zen-note-link-url">
                <span>Link to current page</span>
              </label>
              <button id="zen-note-save" class="btn-save">Save</button>
              <button id="zen-note-cancel" class="btn-cancel">Cancel</button>
            </div>
            <textarea id="zen-note-textarea" placeholder="Write your note..." aria-label="Note content"></textarea>
            <div class="editor-footer">
              <input type="text" id="zen-note-tags" placeholder="Tags (comma-separated)" aria-label="Note tags">
              <span class="char-count">0 characters</span>
            </div>
          </div>
          
          <div id="zen-notes-list" class="zen-notes-list"></div>
        </div>
      `;
      
      document.body.appendChild(this.sidebar);
      
      if (!this.isVisible) {
        this.sidebar.style.display = 'none';
      }
    }

    attachEventListeners() {
      // Toggle sidebar
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey && e.key === 'N') {
          e.preventDefault();
          this.toggleSidebar();
        }
      });

      // New note button
      document.getElementById('zen-notes-new').addEventListener('click', () => {
        this.showEditor();
      });

      // Close button
      document.getElementById('zen-notes-close').addEventListener('click', () => {
        this.toggleSidebar();
      });

      // Save and cancel buttons
      document.getElementById('zen-note-save').addEventListener('click', () => {
        this.saveCurrentNote();
      });

      document.getElementById('zen-note-cancel').addEventListener('click', () => {
        this.hideEditor();
      });

      // Auto-save on typing
      const textarea = document.getElementById('zen-note-textarea');
      textarea.addEventListener('input', () => {
        this.updateCharCount();
        this.scheduleAutoSave();
      });

      textarea.addEventListener('blur', () => {
        if (this.currentNote) {
          this.saveCurrentNote(true);
        }
      });

      // Character count
      textarea.addEventListener('input', () => {
        this.updateCharCount();
      });

      // Filter buttons
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          this.filterMode = e.target.dataset.filter;
          this.saveSettings();
          this.renderNotesList();
        });
      });

      // Search
      document.getElementById('zen-notes-search-input').addEventListener('input', (e) => {
        this.renderNotesList(e.target.value);
      });
    }

    toggleSidebar() {
      this.isVisible = !this.isVisible;
      this.sidebar.style.display = this.isVisible ? 'flex' : 'none';
      this.saveSettings();
      
      if (this.isVisible) {
        this.renderNotesList();
      }
    }

    showEditor(note = null) {
      this.currentNote = note;
      const editor = document.getElementById('zen-notes-editor');
      const list = document.getElementById('zen-notes-list');
      const textarea = document.getElementById('zen-note-textarea');
      const tagsInput = document.getElementById('zen-note-tags');
      const linkCheckbox = document.getElementById('zen-note-link-url');
      
      if (note) {
        textarea.value = note.content;
        tagsInput.value = note.tags.join(', ');
        linkCheckbox.checked = note.url !== null;
      } else {
        textarea.value = '';
        tagsInput.value = '';
        linkCheckbox.checked = false;
      }
      
      editor.style.display = 'block';
      list.style.display = 'none';
      textarea.focus();
      this.updateCharCount();
    }

    hideEditor() {
      const editor = document.getElementById('zen-notes-editor');
      const list = document.getElementById('zen-notes-list');
      
      editor.style.display = 'none';
      list.style.display = 'block';
      this.currentNote = null;
      this.renderNotesList();
    }

    scheduleAutoSave() {
      if (this.autoSaveTimer) {
        clearTimeout(this.autoSaveTimer);
      }
      
      this.autoSaveTimer = setTimeout(() => {
        if (this.currentNote) {
          this.saveCurrentNote(true);
        }
      }, CONFIG.AUTO_SAVE_DELAY);
    }

    saveCurrentNote(isAutoSave = false) {
      const textarea = document.getElementById('zen-note-textarea');
      const tagsInput = document.getElementById('zen-note-tags');
      const linkCheckbox = document.getElementById('zen-note-link-url');
      
      const content = textarea.value.trim();
      if (!content) {
        if (!isAutoSave) {
          this.hideEditor();
        }
        return;
      }
      
      const tags = tagsInput.value
        .split(',')
        .map(t => t.trim())
        .filter(t => t);
      
      const url = linkCheckbox.checked ? this.getCurrentUrl() : null;
      
      if (this.currentNote) {
        this.storage.updateNote(this.currentNote.id, { content, tags, url });
      } else {
        this.storage.createNote(content, url, tags);
      }
      
      if (!isAutoSave) {
        this.hideEditor();
      }
    }

    updateCharCount() {
      const textarea = document.getElementById('zen-note-textarea');
      const charCount = document.querySelector('.char-count');
      charCount.textContent = `${textarea.value.length} characters`;
    }

    getCurrentUrl() {
      return window.location.href;
    }

    renderNotesList(searchQuery = '') {
      const listContainer = document.getElementById('zen-notes-list');
      let notes = this.storage.getAllNotes();
      
      // Apply filters
      if (this.filterMode === 'current') {
        const currentUrl = this.getCurrentUrl();
        notes = notes.filter(n => n.url === currentUrl);
      } else if (this.filterMode === 'scratchpad') {
        notes = notes.filter(n => n.url === null);
      }
      
      // Apply search
      if (searchQuery) {
        notes = this.storage.searchNotes(searchQuery);
      }
      
      if (notes.length === 0) {
        listContainer.innerHTML = `
          <div class="zen-notes-empty">
            <p>No notes yet</p>
            <p class="empty-hint">Press the + button or Ctrl+Shift+N to create one</p>
          </div>
        `;
        return;
      }
      
      listContainer.innerHTML = notes.map(note => this.renderNoteCard(note)).join('');
      
      // Attach event listeners to note cards
      listContainer.querySelectorAll('.note-card').forEach(card => {
        const noteId = card.dataset.noteId;
        const note = notes.find(n => n.id === noteId);
        
        card.querySelector('.note-edit').addEventListener('click', (e) => {
          e.stopPropagation();
          this.showEditor(note);
        });
        
        card.querySelector('.note-delete').addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm('Delete this note?')) {
            this.storage.deleteNote(noteId);
            this.renderNotesList();
          }
        });
        
        if (note.url) {
          card.addEventListener('click', () => {
            window.location.href = note.url;
          });
        }
      });
    }

    renderNoteCard(note) {
      const preview = note.content.substring(0, 150) + (note.content.length > 150 ? '...' : '');
      const date = new Date(note.modified).toLocaleString();
      const urlPreview = note.url ? new URL(note.url).hostname : null;
      
      return `
        <div class="note-card ${note.url ? 'has-link' : ''}" data-note-id="${note.id}">
          <div class="note-header">
            <div class="note-meta">
              ${urlPreview ? `<span class="note-url" title="${note.url}">${urlPreview}</span>` : '<span class="note-url">Scratchpad</span>'}
              <span class="note-date">${date}</span>
            </div>
            <div class="note-actions">
              <button class="note-edit" title="Edit" aria-label="Edit note">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
              </button>
              <button class="note-delete" title="Delete" aria-label="Delete note">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="note-content">${this.escapeHtml(preview)}</div>
          ${note.tags.length > 0 ? `
            <div class="note-tags">
              ${note.tags.map(tag => `<span class="tag">${this.escapeHtml(tag)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  }

  // Initialize
  function initNotesComponent() {
    if (document.getElementById('zen-notes-sidebar')) {
      return; // Already initialized
    }

    const storage = new NotesStorage();
    const ui = new NotesUI(storage);
    
    console.log('Zen Browser Notes mod loaded successfully');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNotesComponent);
  } else {
    initNotesComponent();
  }

})();

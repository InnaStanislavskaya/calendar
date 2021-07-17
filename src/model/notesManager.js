const LOCAL_STORAGE_KEY = 'notes';

class NotesManager extends EventTarget {
    notes = {};

    constructor() {
        super();
        this.loadData();
        window.addEventListener('storage', () => {
            this.loadData();
            this.dispatchEvent(new CustomEvent('update', { detail: this.notes }));
        });
    }

    loadData() {
        const storedString = localStorage.getItem(LOCAL_STORAGE_KEY);
        this.notes = JSON.parse(storedString) || {};
    }

    updateNote(dateId, note) {
        this.notes[dateId] = note;
        this.saveNotes();
        this.dispatchEvent(new CustomEvent('update', { detail: this.notes }));
    }

    saveNotes() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.notes));
    }
}

export const notesManager = new NotesManager();
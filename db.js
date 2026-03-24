'use strict';

class Database {
    constructor(dbName, version) {
        this.dbName = dbName;
        this.version = version;
        this.db = null;
    }

    // Open the database
    open(callback) {
        const request = indexedDB.open(this.dbName, this.version);

        request.onupgradeneeded = (event) => {
            this.db = event.target.result;
            // Create object store (table)
            if (!this.db.objectStoreNames.contains('items')) {
                this.db.createObjectStore('items', { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => {
            this.db = event.target.result;
            callback(this.db);
        };

        request.onerror = (event) => {
            console.error('Database error:', event.target.error);
        };
    }

    // Add an item
    addItem(item) {
        const transaction = this.db.transaction(['items'], 'readwrite');
        const store = transaction.objectStore('items');
        store.add(item);
    }

    // Retrieve an item
    getItem(id, callback) {
        const transaction = this.db.transaction(['items'], 'readonly');
        const store = transaction.objectStore('items');
        const request = store.get(id);

        request.onsuccess = (event) => {
            callback(event.target.result);
        };

        request.onerror = (event) => {
            console.error('Get item error:', event.target.error);
        };
    }

    // Delete an item
    deleteItem(id) {
        const transaction = this.db.transaction(['items'], 'readwrite');
        const store = transaction.objectStore('items');
        store.delete(id);
    }

    // Clear the object store
    clearStore() {
        const transaction = this.db.transaction(['items'], 'readwrite');
        const store = transaction.objectStore('items');
        store.clear();
    }
}

// Exporting the Database class
export default Database;

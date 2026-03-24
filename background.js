// background.js

// background service worker for managing various tasks in the extension

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Handle messages from the extension
    console.log('Message received:', request);
});

// Add additional event listeners as needed
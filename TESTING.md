# Testing Instructions for Prompt Collector Extension

## How to Test the Extension
1. **Set Up the Environment**: Make sure you have the necessary tools installed to run the extension.
2. **Install Dependencies**: Run `npm install` in the terminal to install all required dependencies.
3. **Build the Extension**: Use `npm run build` to compile the extension for testing.
4. **Load the Extension**: Open your browser's extensions page and load the unpacked extension from the build directory.
5. **Run Tests**: Execute `npm test` to run automated tests.

## Supported Platforms
- **Browsers**: Chrome, Firefox, Edge
- **Operating Systems**: Windows, macOS, Linux

## Keyboard Shortcuts
- **Open Extension**: `Ctrl + Shift + P`
- **Toggle Toolbar**: `Ctrl + T`
- **Close Extension**: `Esc`

## Storage Information
- The extension uses localStorage to store user preferences and session data. Please ensure to clear localStorage for complete resets during testing.

## Troubleshooting Guide
- If the extension fails to load, check the browser's console for any error messages.
- Ensure that all dependencies are correctly installed.
- If issues persist, consider reinstalling the extension or clearing the browser cache and cookies.
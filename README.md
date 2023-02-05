# M2 Format VSCode Extension

This VSCode extension provides convenient work with M2 format in the editor. It provides:

- Highlight the corresponding range in the original sentence when hovering over the spans of an edit.
- Show the original sentence with this replacement when hovering over the corrected text inside the edit.
- Add a hover label next to the last edit of the specific annotator. After hovering, instead of the original sentence displays the version corrected by the specific annotator.

## Requirements
- Visual Studio Code v1.41.0 or later.

## Installation
You can install the extension directly from the Visual Studio Code marketplace:

1. Open Visual Studio Code
2. Click on the Extensions button on the Sidebar or use the `Ctrl/Cmd + Shift + X` keyboard shortcut
3. Search for 'M2 Format VSCode Extension'
4. Click the 'Install' button to install the extension
5. Reload Visual Studio Code

## Usage
1. Open a file in M2 format
2. Hover over the spans of an edit to highlight the corresponding range in the original sentence.
3. Hover over the corrected text inside the edit to show the original sentence with this replacement.
4. Click the last edit of the specific annotator to add a hover label and view the corrected sentence by the annotator.

## Development
1. Clone the repository: `git clone https://github.com/<username>/m2-format-vscode-extension.git`
2. Install the dependencies: `npm install`
3. Run the tests: `npm test`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Visual Studio Code API](https://code.visualstudio.com/api)
- [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)

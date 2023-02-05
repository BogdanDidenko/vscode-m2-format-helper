const vscode = require('vscode');
const utils = require('./utils');

function provideDocumentSymbols(document, token) {
  const lines = document.getText().split('\n');
  const labels = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if the line is an edit annotation
    if (utils.isEditLine(line)) {
      // Parse the edit annotation
      const edit = utils.getEdit(line);

      // Get the annotator id from the last field of the edit annotation
      const annotatorId = utils.getAnnotatorId(line);

      // Add a label next to the last edit of the specific annotator
      if (i === lines.length - 1 || !utils.isEditLine(lines[i + 1]) || utils.getAnnotatorId(lines[i + 1]) !== annotatorId) {
        labels.push(new vscode.DocumentSymbol(
          annotatorId,
          annotatorId,
          vscode.SymbolKind.Variable,
          new vscode.Range(i, line.length - 1, i, line.length),
          new vscode.Range(i, 0, i, line.length)
        ));
      }
    }
  }

  return labels;
}

exports.provideDocumentSymbols = provideDocumentSymbols;

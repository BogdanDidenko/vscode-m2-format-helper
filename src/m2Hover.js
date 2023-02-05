const vscode = require('vscode');
const utils = require('./utils');

function provideHover(document, position, token) {
  const wordRange = document.getWordRangeAtPosition(position);
  const word = document.getText(wordRange);
  const line = document.lineAt(position.line).text;
	vscode.window.showInformationMessage(word);
  // Check if the word is a corrected text inside an edit
  if (utils.isCorrectedText(line, word)) {
    // Parse the edit annotation and get the original sentence
    const edit = utils.getEdit(line, word);
    const originalSentence = utils.getOriginalSentence(document.getText(), edit.start);

    // Return the hover information with the original sentence
    return new vscode.Hover(`Original sentence: ${originalSentence}`);
  }

  // Return `null` if the word is not a corrected text
  return null;
}

exports.provideHover = provideHover;
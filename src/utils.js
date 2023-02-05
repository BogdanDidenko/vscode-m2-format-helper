const vscode = require('vscode');

function isEditLine(line) {
  return line.startsWith('A');
}

function getEdit(line) {
  const fields = line.split('|||');
  return {
    start: parseInt(fields[0].split(' ')[1], 10),
    end: parseInt(fields[0].split(' ')[2], 10),
    errorType: fields[1],
    correction: fields[2],
  };
}

function getAnnotatorId(line) {
  return parseInt(line.split('|||')[6], 10);
}

function getHoverMessage(edit, document) {
  const original = document.getText().split('\n')[edit.start];
  return new vscode.MarkdownString(`**Original:** ${original}\n**Corrected:** ${edit.correction}`);
}

exports.isEditLine = isEditLine;
exports.getEdit = getEdit;
exports.getAnnotatorId = getAnnotatorId;
exports.getHoverMessage = getHoverMessage;

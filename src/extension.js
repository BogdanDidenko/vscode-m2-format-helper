const vscode = require('vscode');
const m2Hover = require('./m2Hover');
const m2Label = require('./m2Label');

function activate(context) {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider('*', { provideHover: m2Hover.provideHover }),
    vscode.languages.registerCodeLensProvider('*', { provideCodeLenses: m2Label.provideCodeLenses }),
  );
}

exports.activate = activate;
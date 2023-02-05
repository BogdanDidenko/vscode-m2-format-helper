const vscode = require('vscode');
const m2Hover = require('./m2Hover');
const m2Label = require('./m2Label');

function activate(context) {
  console.log('Congratulations, your extension "test-ext" is now active!');
  let disposable = vscode.commands.registerCommand('test-ext.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from test_ext!');
	});
  context.subscriptions.push(
    vscode.languages.registerHoverProvider('*', { provideHover: m2Hover.provideHover }),
    vscode.languages.registerCodeLensProvider('*', { provideCodeLenses: m2Label.provideCodeLenses }),
    disposable
  );
}

exports.activate = activate;
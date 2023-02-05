const path = require('path');

module.exports = {
  entry: './src/extension.js',
  output: {
    path: path.resolve(__dirname, 'extension/out'),
    filename: 'extension.js',
  },
  externals: {
    'vscode': 'commonjs vscode' // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
  }
};

const colors = require('colors');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const dslete = (directory) => {
  let files = fs.readdirSync(directory);
  for (let i = 0; i < files.length; i++) {
    let file = path.join(directory, files[i]);
    if (files[i] == '.DS_Store' && fs.statSync(file).isFile()) {
      console.log(colors.red('Deleting: ') + colors.white(file));
      rimraf.sync(file);
    } else if (fs.statSync(file).isDirectory()) {
      dslete(file);
    }
  }
}

dslete('');

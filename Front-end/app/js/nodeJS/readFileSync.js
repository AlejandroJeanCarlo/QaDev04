// readFile.js
var fs = require('fs');// importa la libreria fs

var fileName = process.argv[2];

var content = fs.readFileSync(fileName).toString();

console.log('Content for file ',fileName,'is: ',content);
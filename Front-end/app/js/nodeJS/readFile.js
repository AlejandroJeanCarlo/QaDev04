// readFile.js
var fs = require('fs');// importa la libreria fs

var fileName = process.argv[2];



fs.readFile(fileName, function (err, data) {
  if (err) throw err;
  var res = data.toString();
  res = res.split('\n');
  console.log(res);
});

console.log('Iam Done');
// myFs.js

var fs = require('fs');

module.exports.Test = function()
{
	var readFileSync = function(fileName)
	{
	var content = fs.readFileSync(fileName).toString();

	return content;
	
	};

	var sayHello = function()
	{
		return "Hello";
	};
	
}





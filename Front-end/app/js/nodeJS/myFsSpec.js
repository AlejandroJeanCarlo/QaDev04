//MyFsSpec.js
var myFs = require('./myFs.js')
describe('myFs module',function(){
	it('should read a file synchronously',function(){
		var actRes = myFs.readFile('sum.js');
		expect(actRes).toBeDefined();
		expect(typeof(actRes)).toEqual('string');
	});
	it('should read a file asynchronously',function(){
		
		myFs.countFileLineAsync('sum.js',function(err,actRes){
			
			expect(actRes).toBeDefined();
			expect(typeof(actRes)).toEqual('number');
			
		});
	});
});
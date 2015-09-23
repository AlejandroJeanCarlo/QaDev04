
var Calculator = require('./calculator.js');

describe('Calculator',function()
{
	var calculator;
	beforeEach(function(){
		console.log('beforeEach')
		calculator = new Calculator();
	});
	afterEach(function(){
		console.log('afterEach')
		calculator = null;
	});
	
	xdescribe('sum',function()
	{
		it('Should sum 2 and 3 and return 5', function()
		{
		//Steps
		var actRes = calculator.sum(2,3);
		var expRes = 5;
		
		//Validation
		expect(actRes).toEqual(expRes);
		});
		
		it('Should throw a message if its sum e and 2 and return 3',function()
		{
		//Steps
		//var actRes = calculator.subtract('2',2);
		//var expRes =  
		//Validation
		expect(function(){calculator.sum('2',2)}).toThrow("type error");
		});
		
	});
	
	describe('divide',function(){
		
		it('should divide 10 between 5 and return 2',function(){
			expect(calculator.divide(10,5)).toEqual(2);
					
		});
		
		it('should divide 10 between 5 and return 2',function(){
			expect(calculator.divide(10,5)).toEqual(2);
					
		});
		
		
	});
	
	
	xit('Should subtract 5 and 2 and return 3',function()
	{
		//Steps
		var actRes = calculator.subtract(5,2);
		var expRes = 3;
		//Validation
		expect(actRes).toEqual(expRes);
	});
	
	
});
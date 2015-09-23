var Calculator = function()
{
	//Constructor
	
	
	
	
};

Calculator.prototype.sum = function(num1,num2)
{
	if(typeof(num1)!= "number" || typeof(num2)!= "number")
		throw "type error";
	
	return num1+num2;
};

Calculator.prototype.subtract = function(num1,num2)
{
	return num1-num2;
};

Calculator.prototype.divide = function(num1,num2)
{
	return num1/num2;
};


module.exports = Calculator;
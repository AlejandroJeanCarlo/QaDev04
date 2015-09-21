/**
 * Created by jeancarlorodriguez on 8/24/2015.
 */
/**
 *
 * @param numA number
 * @param numB number
 * @param callback, funcion
 * @returns {*}
 */
var doOperation = function(numA,numB,callback)
{
    callback();
    callback();
    callback();
    callback();
    return numA+numB;
};

doOperation(1,2,function()
{
    console.log('hello');
});
var name = 'Jean Carlo';
(function(name)
{
    if(!name)
        name = 'word';
    console.log('Hello '+name);
})(name);
/**
 * Constructor for Person class
 * @param name
 * @param age
 * @constructor
 */
var Person = function(name,age)
{
    this.name = name;
    var _age = age;

    this.printBio = function()
    {
        console.log('Hello, my name is ', this.name,' and I am ',_age,' years old');
        _doSomething();
    };

    this.getAge = function()
    {
        return _age;
    }

    this.setAge = function(newAge)
    {
        _age = newAge;
    }
    // Metodo privado
    var _doSomething = function ()
    {
        console.log('This is a private method')
    }
};

//Metodo statico
Person.sayHello = function ()
{
    console.log('Say Hello');
}

// test class person
var pepe = new Person('Pepe',23);
pepe.printBio();
//pepe._doSomething();
//_doSomething();
Person.sayHello();
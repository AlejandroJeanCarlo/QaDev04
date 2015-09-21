/**
 * Created by jeancarlorodriguez on 8/27/2015.
 */

var Person = function(name,age)
{
    this.name = name;
    var _age = age;



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

Person.prototype.printBio = function()
{
    console.log('Hello, my name is ', this.name,' and I am ',this.getAge(),' years old');
    _doSomething();
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
/**
 * Created by jeancarlorodriguez on 8/10/2015.
 */

console.log('This is a JS code from a JS file');
/**
 * Documentation for this method
 */
var sayHello = function(nombre)
{
    var message = 'Hello '+nombre;
    console.log(message);
};


sayHello("Jean Carlo");

/**
 * class Descriotion
 * @param name
 * @param age
 * @constructor
 */
var Person = function(name,age)
{
    this.name = name;
    this.age = age;
    /**
     * method description
     */
    this.sayHello = function(algo)
    {
        console.log(arguments);
        arguments.pop()
        console.log("Hello, my name is ", this.name," ",algo);
    }
};

var paco = new Person("Pago",19);
var hugo = new Person("Hugo",23);

var age = '';

var calculateAge = function(bornYear)
{
    age = 2015 - bornYear;
    return age;
}


var given = function()
{

}
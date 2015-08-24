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
/**
 * Created by jeancarlorodriguez on 8/21/2015.
 */

/**
 * Retornar el primer numero capicua
 * @param offset
 * @param limit
 */
var getFirstCapicua = function(offset,limit)
{
    var i = offset;
    while (i<=limit)
    {
        if (isCapicua(i))
        {
            return i;

        }
        i++;
    }

}

var isCapicua = function(num)
{
    var revNumber = parseInt(num.toString().split('').reverse().join(''));
    return num==revNumber;

}

console.log('First capicua is: ', getFirstCapicua(50,100));
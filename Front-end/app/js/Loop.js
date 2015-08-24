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
/**
 * funcion que devuelve los N primeros numeros pares
 * @param limit (N numeros pares)
 */
var getOdd = function(limit)
{
    var i=0;
    while(i<limit)
    {
        for(j=1;j<1000;j++) {
            if (j % 2 == 0) {
                console.log(j);
                i++;
            }
            if(i==limit)
            {
                break;
            }

        }
    }
}
/**
 * funcion que devuelve los N primeros numeros impares
 * @param limit (N numeros impares)
 */
var getEven = function(limit)
{
    var i=0;
    while(i<limit)
    {
        for(j=1;j<1000;j++) {
            if (j % 2 != 0) {
                console.log(j);
                i++;
            }
            if(i==limit)
            {
                break;
            }

        }
    }
}

var getOddEven = function(limit)
{
    var i=0;
    while(i<limit)
    {
        for(j=1;j<1000;j++) {

            if(i==limit)
            {
                break;
            }
            if (j % 2 != 0) {
                console.log('Even: ',j);
                i++;
                continue;
            }
            if (j % 2 == 0) {
                console.log('Odd: ',j);
                i++;
                continue;
            }
            if(i==limit)
            {
                break;
            }

        }
    }
}
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
    con:while(i<limit)
    {
        for(j=1;j<1000;j++) {
            if (j % 2 != 0) {
                console.log(j);
                i++;
            }
            if(i==limit)
            {
                continue con;
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
    var evenNumbers = [];
    while(i<limit)
    {
        for(j=0;j<limit*2;j++) {
            if (j % 2 != 0) {
                continue;
            }
            if (j % 2 == 0) {
                evenNumbers.push(j);
                i++;
            }
            if(i==limit)
            {
                break;
            }

        }
    }

    return evenNumbers;
};

var reverseString = function(n)
{
    var arr = n.split('');
    var res = [];
    for(var i = 0;i<arr.length;i++)
    {
        res.push((arr[(arr.length-i)-1]));
    }

    return res;
}

var str = 'Hello'
console.log(str,', reverse is: ',reverseString(str));

var truncateParagraph = function(para,number)
{
    var res = '';
    var incre = 0;
    while(number!=0)
    {
        res+= para[incre];
        --number;
        ++incre;
    }
    return res;
}


var paragraph = 'truncate this paragraph'
console.log('truncate this: ',paragraph,'--->',truncateParagraph(paragraph,5));


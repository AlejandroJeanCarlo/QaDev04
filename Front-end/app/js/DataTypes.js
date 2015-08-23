/**
 * Created by jeancarlorodriguez on 8/20/2015.
 */
/**
 * Function para contar el numero de palabras en una oracion
 * @param par
 * @returns {Number}
 */
countWords = function(par)
{
    var arr = par.split(' ');
    return arr.length;
}

console.log("Number of words is",countWords("Cuentame cuantas palabras tengo?"));

/**
 * Function para sumar un conjunto de numeros enviados como cadena
 * @param numbers (puede ser un arreglo de cadenas representando numeros ['1','2','3'] o una conjunto de cadenas representando numeros ('1','2','3'))
 * @param pos (posicion (opcional))
 * @returns {*}
 */
calculateSum = function(numbers,pos)
{
    if (typeof arguments[0] != "object")
    {
        return calculateSum(arguments);

    }
    if(pos === undefined)
    {
        pos = numbers.length -1;
    }
    if(pos ==0)
    {
        return Number(numbers[pos]);
    }else
    {
        return Number(numbers[pos])+this.calculateSum(numbers,--pos);
    }


};

/**
 * Calcula el promedio de un conjunto de cadenas representando numeros
 * @param numbers
 * @returns {number}
 */
calculateAverage = function(numbers)
{
    if (typeof arguments[0] != "object")
    {
        return this.calculateAverage(arguments);

    }
    var sum = this.calculateSum(numbers,numbers.length-1);
    return sum/numbers.length;
};
/**
 * Cuenta el numero de parametros enviados en esta funcion
 * @returns {*}
 */
count = function()
{
    return arguments.length();
}



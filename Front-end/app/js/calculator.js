/**
 * Created by jeancarlorodriguez on 8/14/2015.
 */
var Calculator = function()
{
    var args;
    /**
     *Calcula el promedio de un conjunto de numeros
     * @param numbers (puede ser un arreglo de numeros [1,2,3] o una conjunto de numeros (1,2,3))
     * @returns {el promedio}
     */
    this.calculateAverage = function(numbers)
    {
        if (typeof arguments[0] == "number")
        {
            return this.calculateAverage(arguments);

        }
        var sum = this.calculateSum(numbers,numbers.length-1);
        return sum/numbers.length;
    };
//repasar en la siquiente clase
    var mi = this;
    /**
     * Calcula la suma de un conjunto de numeros
     * @param (puede ser un arreglo de numeros [1,2,3] o una conjunto de numeros (1,2,3))
     * @param pos (la posicion (opcional))
     * @returns {*}
     */
    this.calculateSum = function(numbers,pos)
    {
        if (typeof arguments[0] == "number")
        {
            return this.calculateSum(arguments);

        }
        if(pos === undefined)
        {
            pos = numbers.length -1;
        }
        if(pos ==0)
        {
            return numbers[pos];
        }else
        {
            return numbers[pos]+this.calculateSum(numbers,--pos);
        }


    };
    /**
     * Retorna el maximo numero
     * @param numbers (puede ser un arreglo de numeros [1,2,3] o una conjunto de numeros (1,2,3))
     * @param pos (La posicion opcional)
     * @returns {numero maximo}
     */
    this.calculateMax = function(numbers, pos)
    {
        if (typeof arguments[0] == "number")
        {
            return this.calculateMax(arguments);

        }
        if(pos === undefined)
        {
            pos = numbers.length -1;
        }
        var res;
        if(pos ==0)
            return numbers[0];
        else {
            res = this.calculateMax(numbers, pos-1);
            if (numbers[pos] > res)
                return numbers[pos];
            else
                return res;
        }

    };
/*    this.getMAx = function (numbers,pos,max)
    {
        if(pos === undefined)
        {
            pos = numbers.length - 1 ;
        }
        if(max === undefined || numbers[pos] > max)
        {
            max = numbers[pos];
        }

        if (pos == 0)
        {
            return max;
        }
        else
            return this.getMAx(numbers,pos -1, max);
    }
*/
    /**
     * Retorna el numero minimo
     * @param numbers (puede ser un arreglo de numeros [1,2,3] o una conjunto de numeros (1,2,3))
     * @param pos (La posicion opcional)
     * @returns {numero minimo}
     */
    this.calculateMin = function(numbers, pos)
    {
        if (typeof arguments[0] == "number")
        {
            return this.calculateMin(arguments);

        }
        if(pos === undefined)
        {
            pos = numbers.length -1;
        }
        var res;
        if(pos ==0)
        {
            return numbers[0];

        }
        else {
            res = this.calculateMin(numbers, pos-1);
            if (numbers[pos] < res)
                return numbers[pos];
            else
                return res;
        }

    };
    /**
     * Calcula el minimo, maximo, promedio y la suma de un conjunto de numeros
     * @param numbers (puede ser un arreglo de numeros [1,2,3] o una conjunto de numeros (1,2,3))
     */
    this.calculate = function()
    {
        args = arguments;
        if(arguments.length != 0) {
            console.log("Min: ", this.calculateMin(arguments, arguments.length - 1));
            console.log("Max: ", this.calculateMax(arguments, arguments.length - 1));
            console.log("Promedio: ", this.calculateAverage(arguments));
            console.log("Suma: ", this.calculateSum(arguments));
        }
        else
            throw "Cannnot do the evaluation without a params"
    };

};



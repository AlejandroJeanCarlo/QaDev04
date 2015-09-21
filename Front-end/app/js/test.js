/**
 * Created by jeancarlorodriguez on 9/12/2015.
 */
var nb = 4;
var a = new Array(nb); // crea una matriz de longitud 4
for (var i = 0; i < nb; i++) {
    a[i] = new Array(nb); // define cada elemento como una matriz de longitud 4
    for (var j = 0; j < nb; j++) {
        a[i][j] = "[-]"; // asigna a cada elemento de la matriz bidimensional
                                           // los valores de i y j
    };
};
for (var i = 0; i < nb; i++) {
    var str = "Fila " + i + ":";
    for (var j = 0; j < nb; j++) {
        str += a[i][j]; // añade a la cadena el contenido de la matriz bidimensional
    }
    console.log(str);
};

//console.log(a[0][0],a[0][1]);
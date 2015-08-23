/**
 * Created by jeancarlorodriguez on 8/20/2015.
 */
var getDate = function()
{
    var now = new Date();
    var actualday = "";
    var days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    var ampm = now.getHours() > 12 ? 'PM':'AM';
    console.log("Today is :", days[now.getDay()]);
    console.log("Current time is:" ,now.getHours(),":",now.getMinutes(),":",now.getSeconds(),ampm);

}
getDate();
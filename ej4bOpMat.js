function numeros(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var res = "Suma: " + suma + "<br>" +
    "Resta: " + resta + "<br>" +
    "Multiplicación: " + multiplicacion + "<br>" +
    "División: " + division + "<br>";
    document.getElementById('res').innerHTML = res;
}
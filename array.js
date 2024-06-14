var guardaArreglo = {"Nombre": "Mema", 
    "Apellido:": "Pinedou",
    "Estado civil": "Solo Leveling",
    "Edad": 19,
    "Fecha de Nacimiento": "15/03/2005",
    "DNI": 45798194};

for (var clave in guardaArreglo){
        document.write(clave + ": " + guardaArreglo[clave] + "<br>");
}
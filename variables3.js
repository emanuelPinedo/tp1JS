function enviar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var estado = document.getElementById("estado").value;
    var edad = document.getElementById("edad").value;
    var fechaNac = document.getElementById("fechaNac").value;
    var dni = document.getElementById("dni").value;

    document.write("Datos Personales:<br>" + "Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Estado Civil: " + estado + "<br>Edad: " + edad + "<br>Fecha de Nacimiento: " + fechaNac + "<br>DNI: " + dni);
}
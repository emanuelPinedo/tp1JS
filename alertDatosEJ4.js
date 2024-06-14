function datosPersonales(){
    var nombre = (document.getElementById('nombre').value);
    var apellido = (document.getElementById('apellido').value);
    var edad = parseInt(document.getElementById('edad').value);
    var email = (document.getElementById('email').value);
    var datos = "Nombre: " + nombre + "<br>" +
    "Apellido: " + apellido + "<br>" +
    "Edad: " + edad + "<br>" +
    "Email: " + email + "<br>";
    var confirmar = confirm("¿Querés mostrar tus datos personales?")
    if(confirmar){
        document.getElementById('datos').innerHTML = datos;
        alert("Sus datos se mostraron");
    } else {
        alert("Sus datos no se mostraron");
    }
    
}
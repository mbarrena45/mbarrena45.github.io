// Función para la página de inicio (index.html)
function darBienvenida() {
    alert("¡Bienvenido a la Feria de Viajes!");
}
// Función para la página de destinos.html
function mostrarFecha() {
    document.getElementById("fecha-hora").innerHTML = new Date();
}
// Función para la página de agenda.html
function personalizarAgenda() {
    var nombre = prompt("Por favor, introduce tu nombre para personalizar la agenda:");
    document.getElementById("titulo-agenda").innerHTML = "Agenda de Eventos para " + nombre;
}
// Función para la página de galeria.html
function ocultarMostrarTexto() {
    var elemento = document.getElementById("texto-galeria");
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}
// Función para la página de contacto.html
function validarFormulario() {
    var nombreUsuario = document.getElementById("nombre").value;
    if (nombreUsuario == "") {
        alert("Por favor, escribe tu nombre antes de enviar.");
        return false;
    }
    return true;
}
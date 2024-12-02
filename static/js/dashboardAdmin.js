/* Funcion para activar el link cuando pase el cursor por encima de la opcion menu */

var lista = document.querySelectorAll('.nav li');
function activarLink() {
    lista.forEach((item) => 
        item.classList.remove('active'));
    this.classList.add('active');
}

lista.forEach((item) =>
    item.addEventListener('mouseover', activarLink));

/* Funcion para mostrar/ocultar menu */

var toggle = document.querySelector('.toggle');
var nav = document.querySelector('.nav');
var container = document.querySelector('.container');

toggle.onclick = function(){
    nav.classList.toggle('active');
    container.classList.toggle('active');
}


//OCULTAR/MOSTRAR MENU DE USUARIO
var perfilUsuario = document.querySelector('.perfil-usuario');

// Agregar un evento de clic para mostrar/ocultar el menú
perfilUsuario.onclick = function(e) {
    // Prevenir que el clic en el menú se propague al contenedor de la foto de perfil
    e.stopPropagation();
    
    // Alternar la clase 'active' en el contenedor de perfil
    perfilUsuario.classList.toggle('active');
};

// Agregar un evento para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(e) {
    if (!perfilUsuario.contains(e.target)) {
        perfilUsuario.classList.remove('active');
    }
});
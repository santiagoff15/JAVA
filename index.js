console.log("No, lo estoy escuchando no leyendo eeeeeeeee   ")
let edad = 17;
/* 
VARIABLE (CAMBIA)
CONSTANTES (NO CAMBIAN A LO LARGO DEL PROGRAMA)
*/
// Defino o declaro constante
const mensaje = document.getElementById('mensaje');

// Selecciono el boton
const boton = document.getElementById('boton');

// Escuchar un evento particular
boton.addEventListener('click',mostrarFondo);

// Crear la funcion mostrarFondo
function mostrarFondo(){
    console.log("click");
    mensaje.classList.add('bg-success');
}

// Seleccionamos mensaje y le agregamos o cambiamos el contenido
mensaje.textContent = "Desde Javascript";

// Eliminar clases
mensaje.classList.remove('bg-primary');

// Agregar una clase de CSS
//  mensaje.classList.add('text-center','bg-info');
titulo.classList.add('text-center','bg-danger');

// Funcion
function mostrarTexto(){
    console.log(edad);
}

// Invocacion de la funcion
mostrarTexto();

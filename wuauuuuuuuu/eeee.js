const mensaje = document.getElementById('mensaje');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const cuerpo = document.getElementById('cuerpo');
console.log(cuerpo);


mensaje.classList.add('text-center','bg-dark','text-light');
color1.classList.add('btn-warning');
color2.classList.add('btn-info');
color3.classList.add('btn-danger');

color1.addEventListener("click",mostrarFondo);
function mostrarFondo(){
    console.log("click");
    cuerpo.classList.add('bg-warning','text-dark');
    cuerpo.classList.remove('btn-info','btn-danger','bg-info','bg-danger');
}

color2.addEventListener("click",mostrarFondo2);
function mostrarFondo2(){
    console.log("click");
    cuerpo.classList.add('bg-info','text-dark');
    cuerpo.classList.remove('btn-warning','btn-danger','bg-warning','bg-danger');
}

color3.addEventListener("click",mostrarFondo3);
function mostrarFondo3(){
    console.log("click");
    cuerpo.classList.add('bg-danger','text-dark');
    cuerpo.classList.remove('btn-info','btn-warning','bg-info','bg-warning');
}
console.log('hola')
const resultado = document.getElementById('resultado');
const boton = document.getElementById('bot');




boton.addEventListener('click', promedio);
function promedio() {
    console.log('click')
    let nota1 = document.getElementById('nota1').value;
    nota1 = parseInt(nota1)
    let nota2 = document.getElementById('nota2').value;
    nota2 = parseInt(nota2)
    let nota3 = document.getElementById('nota3').value;
    nota3 = parseInt(nota3)
    let nota4 = document.getElementById('nota4').value;
    nota4 = parseInt(nota4);
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(promedio);
    resultado.innerHTML = `El promedio es ${promedio}`;
    if (promedio >= 7) {
        resultado.classList.remove("bg-danger");
        resultado.classList.add('bg-success');
    } else { 
        resultado.classList.remove('bg-success'); 
        resultado.classList.add('bg-danger');
    }
}

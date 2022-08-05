console.log('hola')

const medirr = document.getElementById('btn-medir');

medirr.addEventListener('click',Medir);
function Medir(){
    console.log('click')
    let medirr = parseInt(document.getElementById('medirr').value)
    let m = medirr*1000
    let c = medirr*100
    let d = medirr*10
    let dc = medirr/10
    let h = medirr/100
    let k = medirr/1000

    milimetro.innerHTML = `La medida es ${m}mm`
    centimetro.innerHTML = `La medida es ${c}cm`
    decimetro.innerHTML = `La medida es ${d}dm`
    decametro.innerHTML = `La medida es ${dc}dam`
    hectometro.innerHTML = `La medida es ${h}hm`
    kilometro.innerHTML = `La medida es ${k}km`
}
function sumar() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    let resultado = (num1 + num2)
    document.getElementById('resultado').innerText = resultado
}

function restar() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    let resultado = (num1 - num2)
    document.getElementById('resultado').innerText = resultado
}

let i = 0
function color() {
    let colores = ["red", "green", "blue"]
    if (i < colores.length) {
        document.body.style.background = colores[i]
        i++
    }
    
    if (i == colores.length){
        i = 0
    }
}  
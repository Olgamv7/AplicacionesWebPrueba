function cambiarParrafo() {
    let nombre = prompt("Dime tu nombre");
    document.getElementById('parrafo').innerText = nombre
}

function cambiarApellido() {
    let apellido = prompt("Dime tus apellidos");
    document.getElementById('parrafo2').innerText = apellido
}

//Ejercicio 2
function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

//Ejercicio 3
function mostrarOcultar() {
    const texto = document.getElementById('miTexto');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none'
    }
}
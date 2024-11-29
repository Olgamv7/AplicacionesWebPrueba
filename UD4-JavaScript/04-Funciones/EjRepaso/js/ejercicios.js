function ejercicio1() {
    let numero = parseInt(prompt("Dime un número y te dire si es par o impar:"))
    if (esPar(numero)) {
        alert("El número es PAR")
    } else {
        alert("El número es IMPAR")
    }
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function ejercicio2() {
    let a = parseInt(prompt("Dime el primer número:"))
    let b = parseInt(prompt("Dime el segundo número:"))
    let c = parseInt(prompt("Dime el tercer número:"))

    if (a == b && b == c) {
        alert(a + ", " + b + " y " + c + " son iguales")
    } else if (a == b) {
        alert(a + " es igual a " + b)
    } else if (a == c) {
        alert(a + " es igual a " + c)
    } else if (b == c) {
        alert(b + " es igual a " + c)
    } else {
        if (a, b > c) {
            if (a > b ) {
                alert(a + " es mayor que " + b + " y " + c)
            } else if (b > a) {
                alert(b + " es mayor que " + a + " y " + c)
            }
        } else if (c > a, b) {
        alert(c + " es mayor que " + a + " y " + b)
        }
    }
}


function ejercicio3() {
    let nota = parseInt(prompt("Dime la nota:"))
    if (nota < 50) {
        alert(nota + " es INSUFICIENTE")
    } else if (nota < 61) {
        alert(nota + " es SUFICIENTE")
    } else if (nota < 71) {
        alert(nota + " es un BIEN")
    } else if (nota < 91) {
        alert(nota + " es un NOTABLE")
    } else if (nota <= 100) {
        alert(nota + " es un SOBRESALIENTE")
    } else {
        alert("Introduce un número correcto")
    }
}

function ejercicio4() {
    let anio = parseInt(prompt("Dime el año:"))
    if (anio % 4 === 0) {
        alert("El año es BISIESTO")
    } else {
        alert("El año NO es bisiesto")
    }
}


function ejercicio5() {
    let posOneg = parseInt(prompt("Dime un número: "))
    if (posOneg > 0) {
        alert(posOneg + " es POSITIVO")
    } else if (posOneg < 0) {
        alert(posOneg + " es NEGATIVO")
    } else if (posOneg == 0) {
        alert("Has dicho 0")
    } else {
        alert("Introduce un número")
    }
}
//Ejercicio2: escribe por consola la tabla de multiplicar del 6
let mult = parseInt(prompt("Dime por que número quieres multiplicar"))

for (let num = 0; num < 11; num++) {

    let resultado = (mult * num)
    console.log(mult + " x " + num + " = " + resultado)

}

console.log(" ")

for (let numero = 5; numero >= 0; numero--) {

    console.log(numero)

}

console.log(" ")

for (let contador = 34; contador <= 100; contador ++) {
    
    if (contador%3 == 0) {
        console.log(contador + " es multiplo de 3")
    }
} 
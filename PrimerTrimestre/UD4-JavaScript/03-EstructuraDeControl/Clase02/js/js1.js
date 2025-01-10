//Ejercicio1: Escribe un script que pida una nota y te devuelva si es sobresaliente, 
//notable, aprobado o suspenso.
let nota = 9

if (nota >= 9 && nota <= 10) {

    console.log("La nota " + nota + " es un sobresaliente");

} else if (nota <= 8 && nota >= 7) {

    console.log("La nota " + nota + " es un notable");

} else if (nota <= 6 && nota >= 5) {

    console.log("La nota " + nota + " es un aprovado")

} else if (nota < 5 && nota >= 0) {
    
    console.log("La nota " + nota + " es un suspenso")

} else {
    console.log("ERROR, introduce un número entre 10 y 0")
}
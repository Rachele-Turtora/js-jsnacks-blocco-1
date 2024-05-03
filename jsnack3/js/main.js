"use strict"

let somma = 0

for (let i = 0; i < 10; i++) {
    let numero = prompt("digita un numero")
    numero = Number(numero)
    console.log("Hai digitato: ", numero)
    somma += numero
}

console.log("La somma è: ", somma)
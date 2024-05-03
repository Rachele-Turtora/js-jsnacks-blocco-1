"use strict";

let somma = 0;

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("digita un numero"));
    console.log("Hai digitato: ", numero);
    somma += numero;
}

console.log("La somma è: ", somma);
"use strict";

const parola1 = prompt("Scrivi una parola");
const parola2 = prompt("Scrivi un'altra parola");

if (parola1.length > parola2.length) {
    console.log(parola2);
    console.log(parola1);
} else if (parola1.length < parola2.length) {
    console.log(parola1);
    console.log(parola2);
} else {
    console.log("Le parole hanno la stessa lunghezza");
}
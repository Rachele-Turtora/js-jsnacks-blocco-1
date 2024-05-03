/* Chiedi un numero di 4 cifre all’utente
Calcola la somma di tutte le cifre che compongono il numero.
Stampa il risultato in console */

"use strict";

let somma = 0;
const number = prompt("Inserisci un numero di quattro cifre");

if (!isNaN(Number(number))) {

    if (number.length == 4) {
        for (let i = 0; i < 4; i++) {
            somma += Number(number[i]);
        }
        console.log("La somma delle cifre è ", somma);
    } else {
        console.log("Inserisci un numero di quattro cifre");
    }

} else {
    console.log("Inserisci un numero, non una stringa");
}
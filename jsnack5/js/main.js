/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Se è dispari inseriscilo nell’array.
Stampa in console l'array risultante.*/

"use strict";

const result = [];

for (let i = 1; i <= 6; i++) {

    const number = Number(prompt(`${i} di 6 - Inserisci un numero`));

    if (!isNaN(number)) {
        console.log("Hai digitato: ", number);

        if (number % 2 !== 0) {
            result.push(number);
        }

    } else {
        console.log("Inserisci un numero, non una stringa");
        i--;
    }
    
}

console.log(result);

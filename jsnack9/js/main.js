/* Calcola la somma e la media dei primi 10 numeri.
Stampa i risultati in console */

"use strict";

let somma = 0;
const maxNum = 10;

for (let i = 1; i <= maxNum; i++) {
    somma += i;
}

const media = (somma / maxNum);

console.log(`La somma dei primi ${maxNum} numeri è ${somma}`);
console.log(`La media dei primi ${maxNum} numeri è ${media}`);
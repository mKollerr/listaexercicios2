/*
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.
*/
const prompt = require('prompt-sync')();

let n = parseInt(prompt('Digite um número inteiro não negativo: '), 10);

function fatorial(n) {
    if (n < 0) {
        throw new Error('n deve ser um número não negativo');
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(fatorial(n))
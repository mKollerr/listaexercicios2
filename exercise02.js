/*
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/
const prompt = require('prompt-sync')()

let num = Math.floor(Math.random() * 100 + 1)
let numUsuario = null
let tentativas = 0

do {
    tentativas++
    numUsuario = Number(prompt('Informe um número entre 1 e 100: '))

    if (numUsuario < 1 || numUsuario > 100 || isNaN(numUsuario)) {
    console.log('Por favor, digite um número válido entre 1 e 100');
    continue;
    }
    if(numUsuario > num) {
        console.log('O número que voce digitou é maior que o número secreto')
    } else if (numUsuario < num) {
        console.log('O número que voce digitou é menor que o número secreto')
    } else {
        console.log(`Voce descobriu o número secreto com ${tentativas} tentativas`)
    }
} while (numUsuario != num)

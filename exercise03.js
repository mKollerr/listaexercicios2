/*
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/
const prompt = require('prompt-sync')()

let frase = prompt('Escreva uma frase para separar as palavras unicas:')
let palavras = frase.split(" ")
let unicas = []

for (let i = 0; i < palavras.length; i++) {
    if(unicas.indexOf(palavras[i]) === -1) {
        unicas.push(palavras[i])
    } 
}

console.log(unicas);
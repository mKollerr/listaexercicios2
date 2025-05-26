/*
Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.
*/
const prompt = require('prompt-sync')()
let dia = Number(prompt('Informe um dia (xx):'))
let mes = Number(prompt('Informe um mes (xx):'))
let ano = Number(prompt('Informe um ano (xxxx):'))

function ehAnoBissexto(ano) {
    if (ano % 4 == 0) {
        if(ano % 100 == 0) {
            if(ano % 400 == 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

function ehDataValida(dia, mes, ano) {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if(mes < 1 || mes > 12) return console.log(false)
    if(ehAnoBissexto(ano)) {
        diasPorMes[1] = 29
    }   
    if(dia < 1 || dia > diasPorMes[mes - 1]) return console.log(false)

    return console.log(true)
}

ehDataValida(dia, mes, ano)
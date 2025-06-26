/*
Implemente function memorize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.
*/ 

function memorize(fn) {
    const cache = {}
    
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache[key] !== undefined) {
            return cache[key]
        }
        const result = fn(...args)
        cache[key] = result
        return result
    }
}
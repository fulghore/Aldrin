const numeros = [10, 6.5, 8, 7.5]
let somaNotas = 0

for (let i=0; i < numeros.length; i++) {
    somaNotas += numeros[i]
}

let media = somaNotas/numeros.length

console.log(media)
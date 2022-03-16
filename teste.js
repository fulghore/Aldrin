const numeros = [10, 6.5, 8, 7.5]
let somaNotas = 0

numeros.forEach(notas =>{
    somaNotas += notas
})

let media = somaNotas/numeros.length

console.log(media)
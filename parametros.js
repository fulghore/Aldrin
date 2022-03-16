

// function soma(n1,n2){
//     return n1+n2
// }

// console.log(soma(3,4));

// function nomeIdade(nome,idade){
//     return `Meu nome é ${nome} e minha idade é ${idade}.`
// }

// console.log(nomeIdade("Aldrin", 35));

// function multiplica(n1=1, n2=1) {
//     return n1*n2
// }

// console.log(multiplica(soma(3,2), soma(3,3)));

const somarNumero = (n1, n2) => {
    if ((n1 >= 10) || (n2 >=10)) {
    return "Somente números menores que 10."
    } else {
        return n1 + n2
    }
}
console.log (somarNumero(10,7));
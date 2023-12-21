const prompt = require("prompt-sync")();

let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'), 10);
let contador = 0; // variavel contador e igual a qtd numeros
let soma = 0;


while(contador < qtdNumeros) { // enquannto o contador for maior que 0 execute o loop.
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero
    contador++;
}

let media = soma / qtdNumeros;

console.log(`A media do é ${media}`);
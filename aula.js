//Tipo de dados e declaração de variáveis

//String
let nome1 = "João";
let nome2 = 'João';

//Number
let idade = 17;
let altura = 1.87;

//Boolean
let eMaiorDeIdade = false;

//Object e Array

let listaDePessoas = ["João", "Maria", "José", 1,2,3, true,[1,2,3]];

let pessoa = {
    nome: "João",
    idade: 17,
    altura: 1.87,
}

// console.log(typeof corDoCabelo);

//Operadores aritméticos
// + - * / % **

let soma = 2 + 2;
// soma = soma + 2;
soma += 2;

// console.log(soma);

let restoDaDivisao = 10 % 3;
// console.log(restoDaDivisao);

let potencia = 2 ** 4;
// console.log(potencia);

//Operadores de comparação
// == === != !== > < >= <=

let numero1 = 10;
let numero2 = "10";

// console.log(typeof numero1);
// console.log(typeof numero2);

// console.log(numero1 == numero2);
// console.log(numero1 === numero2);

// console.log(numero1 != numero2);
// console.log(numero1 !== numero2);

//Operadores lógicos
// && || !

// console.log(idade > 18);
// console.log(altura > 1.80);

// console.log(idade > 18 && altura > 1.80);
// console.log(idade > 18 || altura > 1.80);

// Manipulação do DOM

let meuInput = document.getElementById("valor");
let meuValor = meuInput.value;

console.log(meuValor);



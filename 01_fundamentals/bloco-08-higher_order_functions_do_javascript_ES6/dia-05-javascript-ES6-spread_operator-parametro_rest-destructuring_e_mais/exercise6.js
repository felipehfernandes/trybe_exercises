// Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro.

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([model, manufacturer, year]) => ({ model, manufacturer, year });

console.log(toObject(palio)); // { model: 'Palio', manufacturer: 'Fiat', year: 2019 }
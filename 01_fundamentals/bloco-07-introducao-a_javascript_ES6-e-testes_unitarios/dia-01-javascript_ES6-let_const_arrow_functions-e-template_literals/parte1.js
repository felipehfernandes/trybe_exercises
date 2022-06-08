// --------- 1 --------

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     ifScope = ifScope + " ótimo, fui utilizada no escopo !";
//     console.log(ifScope);
//   } else {
//     var elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
//   console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
// }

const testingScope = (escopo) => {
  if (escopo) {
    var ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);
};

testingScope(true);

// --------- 2 --------

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function (a, b) {
  return a - b;
});

console.log(oddsAndEvens);

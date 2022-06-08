// Exercicio 1

const fatorial = (n) => {
  return n === 0 ? 1 : n * fatorial(n - 1);
};

console.log(fatorial(5));

// Exercicio 2

const longestWord = (word) => {
  let findingWord = word.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return findingWord[0];
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

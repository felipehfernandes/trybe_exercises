# Para fixar - Array.forEach

1. Use o método forEach chamando a callback _showEmailList_ para apresentar os emails

```
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
```

# Para fixar - Array.find

1. Utilize o `find` para retornar o primeiro número do array que é divisível por _3_ e _5_, caso ele exista:

```
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
}

console.log(findDivisibleBy3And5())
```

2. Utilize o `find` para encontrar o primeiro nome com cinco letras, caso ele exista:

```
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
}

console.log(findNameWithFiveLetters());
```

3. Utilize o `find` para encontrar a música com _id_ igual a _31031685_, caso ela exista:

```
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
}

console.log(findMusic('31031685'))
```

# Para fixar

1. Escreva uma função que dado um array de nomes e um nome retorne `true` se ele estiver contido e caso contrário, retorne `false`, use `some`;

```
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
}

console.log(hasName(names, 'Ana'))
```

2. Escreva uma função que dado um array de pessoas e uma idade mínima retorne `true` se todas tiverem a idade maior ou igual a mínima e caso contrário `false`, use `every`;

```
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
}

console.log(verifyAges(people, 18));
```

# Para fixar

1. Utilize a `sort` para ordenar o array pela _idade_ das pessoas em ordem _crescente_.

```
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

console.log(people);
```

2. Modifique o `sort` do exercício anterior para que ordene o array pela _idade_ das pessoas em ordem _decrescente_.

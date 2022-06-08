## Parte I

Agora você vai fazer alguns exercícios de fixação.

1. 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
<ul>
<li>Modifique a estrutura da função para que ela seja uma `arrow function`.</li>
<li>Modifique as concatenações para `template literals`.</li>
<li>Copie o código abaixo.</li>
</ul>

```
      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
```

2. 🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
<ul>
<li>Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".</li>
<li>Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.</li>
<li>Copie o código abaixo.</li>
</ul>
```
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.

      console.log(oddsAndEvens); // será necessário alterar essa linha 😉
```

## Parte I - Buscando elementos

Para você entender melhor, observe com atenção a estrutura HTML que temos abaixo:
```
<!-- arquivo index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <main>
    <div id="start"></div>
    nó
    <p>elemento</p>
  </main>
  <script src="script.js"></script>
</body>
</html>
```
Como você pode ver, o arquivo possui um elemento `main` contendo dois elementos filhos: uma `<div>` e um `<p>`. Então, você vai aplicar as propriedades `nextSibling` e `nextElementSibling` para ver a diferença entre elas:
```
// arquivo script.js

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
```
<strong>Observação</strong>: para testar o código acima, crie um arquivo `index.html` e outro `script.js`, copie os códigos e salve os documentos. Para visualizar as saídas no console, dê start no Live Server, inspecione a página e abra o console.

Primeiro, foi selecionado o elemento `div` utilizando o seu `id`, 'start'. Na sequência, aplicadas as propriedades `nextSibling` e `nextElementSibling`. Você pode ver que, `nextSibling` retornará o texto "nó" que representa o próximo nó do DOM a partir da div, enquanto que, `nextElementSibling` retornará o próximo elemento propriamente, ou seja, o elemento `<p>`.

🚀 Se liga nesse foguete!
Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀 Entendeu? Então vamos praticar! Adicione o código abaixo a uma página HTML e adicione uma tag `script`. Você deverá fazer tudo a seguir usando somente JavaScript.
```
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
```

1. Acesse o elemento `elementoOndeVoceEsta`.
2. Acesse `pai` a partir de `elementoOndeVoceEsta` e adicione uma `color` a ele.
3. Acesse o `primeiroFilhoDoFilho` e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4. Acesse o `primeiroFilho` a partir de `pai`.
5. Agora acesse o `primeiroFilho` a partir de `elementoOndeVoceEsta`.
6. Agora acesse o texto `Atenção`! a partir de `elementoOndeVoceEsta`.
7. Agora acesse o `terceiroFilho` a partir de `elementoOndeVoceEsta`.
8. Agora acesse o `terceiroFilho` a partir de `pai`.

## Parte II - Criando elementos

🚀 E a prática? Aqui!

1. Crie um irmão para `elementoOndeVoceEsta`.
2. Crie um filho para `elementoOndeVoceEsta`.
3. Crie um filho para `primeiroFilhoDoFilho`.
4. A partir desse filho criado, acesse `terceiroFilho`.

## Parte III - Removendo elementos

Para praticar:

1. Remova todos os elementos filhos de `paiDoPai` exceto `pai`, `elementoOndeVoceEsta` e `primeiroFilhoDoFilho`.
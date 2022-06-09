## Parte I

Lembra da calculadora que fizemos como exemplo anteriormente? Hora de levá-la para um nível mais avançado!

Copie e cole o código abaixo no seu editor de texto:

```
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```

Tire um tempinho para entender o código acima:

<ul>
    <li>A aplicação pede ao usuário que informe dois números para realizar uma soma. Esses números são inseridos através dos inputs;</li>
    <li>Ao clicar o botão, a função sum é chamada, capturando o valor escrito nos inputs e realizando a operação. Antes, é necessária a conversão do valor usando o parseInt, pois ele chega à função em forma de string;</li>
    <li>Ao final, a função sum imprime o valor em um parágrafo e limpa os inputs para que a pessoa usuária possa inserir novos valores.</li>
</ul>

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

1. 🚀 Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.

<ul>
    <li>Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?</li>
    <li>Utilize o throw new Error e o bloco try/catch.</li>
    <li>Imprima o erro no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!</li>
    <li>Evite funções que tenham muitas responsabilidades distintas.</li>
</ul>

2. 🚀 Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.

<ul>
    <li>Você pode fazer essa verificação utilizando a função isNan().</li>
</ul>

3. 🚀 Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally?
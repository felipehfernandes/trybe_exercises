## Exercício 1 - Variáveis

1. Crie uma constante chamada `myName` e atribua a ela o seu nome (Exemplo: Carolina).
2. Crie uma constante chamada `birthCity` e atribua a ela a sua cidade natal.
3. Crie uma variável chamada `birthYear` e atribua a ela o ano em que você nasceu.
4. Utilize o `console.log()` para imprimir as constantes e variáveis que você criou.
5. Altere o valor atribuído à variável `birthYear` para 2030. Faça um `console.log(birthYear)` novamente para ver o que acontece!
6. Altere o valor atribuído à constante `birthCity`. Faça um `console.log(birthCity)` novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

## Exercício 2 - Tipos Primitivos, Tipagem Dinâmica e Operações Aritiméticas

1. Crie uma constante chamada `base` e uma variável chamada `height` e atribua os seus respectivos valores: 5 e 8.
2. Crie uma constante chamada `area` e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o `console.log()` para imprimir as variáveis e checar os resultados das operações!
3. Crie uma constante chamada `perimeter` e atribua a ela a soma de todos os lados do retângulo.

## Exercício 3 - Condições If e Else

1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
<ul>
  <li>Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"</li>
  <li>Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"</li>
  <li>Se a nota for menor que 60, imprima "Você foi reprovada(o)"</li>
</ul>

6. Crie uma estrutura condicional utilizando o `if`, `else if` e `else` para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
7. Altere o valor da nota para verificar se as condições que você implementou funcionam;

## Exercício 4 - Operadores lógicos

<h3>Operador AND</h3>

1. Crie uma constante chamada `currentHour` que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
2. Crie uma variável chamada `message` que, inicialmente, é uma string vazia.
3. Implemente condicionais para que:
<ul>
  <li>Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável `message`.</li>
  <li>Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável `message`.</li>
  <li>Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável `message`.</li>
  <li>Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável `message`.</li>
  <li>Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável `message`.</li>
</ul>

4. Agora imprima a variável `message` fora das suas condições.

<h3>Operador OR</h3>

1. Crie uma variável chamada `weekDay` que recebe a string "quarta-feira".
2. Implemente condicionais para que:
<ul>
  <li>Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".</li>
  <li>Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".</li>
</ul>

## Exercício 5 - Switch e Case

1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: `'aprovada'`, `'lista'` ou `'reprovada'`;
2. Crie uma estrutura condicional com o `switch/case` que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for `'aprovada'`, `'lista'` ou `'reprovada'`. Como `default`, imprima a mensagem de `'não se aplica'`.

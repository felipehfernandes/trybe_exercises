## Parte II - Funções

Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.

<strong><em>Spoiler-alert</em></strong>: para os exercícios do dia, os métodos `split`, `join` e `reverse` podem ser muito úteis.

1. Crie uma função que receba uma `string` e retorne `true` se for um palíndromo, ou `false`, se não for.
<ul>
    <li>Exemplo de palíndromo: arara.</li>
    <li>verificaPalindrome('arara');</li>
    <li>Retorno esperado: true</li>
    <li>verificaPalindrome('desenvolvimento');</li>
    <li>Retorno esperado: false</li>
</ul>
2. Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.
<ul>
    <li>Array de teste: [2, 3, 6, 7, 10, 1];.</li>
    <li>alor esperado no retorno da função: 4.</li>
</ul>
3. Crie uma função que receba um `array` de inteiros e retorne o índice do menor valor.
<ul>
    <li>Array de teste: [2, 4, 6, 7, 10, 0,.3];.</li>
    <li>Valor esperado no retorno da função: 6.</li>
</ul>
4. Crie uma função que receba um `array` de nomes e retorne o nome com a maior quantidade de caracteres.
<ul>
    <li>Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.</li>
    <li>Valor esperado no retorno da função: Fernanda.</li>
</ul>
🚀 5. Crie uma função que receba um `array` de inteiros e retorne o inteiro que mais se repete.
<ul>
    <li>Array de teste: [2, 3, 2, 5, 8, 2, 3];.</li>
    <li>Valor esperado no retorno da função: 2.</li>
</ul>
6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
<ul>
    <li>Valor de teste: N = 5.</li>
    <li>Valor esperado no retorno da função: 1+2+3+4+5 = 15.</li>
</ul>
7. Crie uma função que receba uma `string word` e outra `string ending`. Verifique se a `string ending` é o final da `string word`. Considere que a `string ending` sempre será menor que a `string word`.
<ul>
    <li>Valor de teste: 'trybe' e 'be'</li>
    <li>Valor esperado no retorno da função: true</li>
    <li>verificaFimPalavra('trybe', 'be');</li>
    <li>Retorno esperado: true</li>
    <li>verificaFimPalavra('joaofernando', 'fernan');</li>
    <li>Retorno esperado: false</li>
</ul>

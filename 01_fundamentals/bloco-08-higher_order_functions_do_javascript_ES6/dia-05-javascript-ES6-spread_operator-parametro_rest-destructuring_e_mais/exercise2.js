// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => {
    return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sum(1, 2, 3, 4, 5));
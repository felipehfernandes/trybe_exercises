let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = 0;
let menor = 100000;

for (let i = 0; i < array.length; i++) {
    if (array[i].length >= maior) {
        arrayMaior = array[i];
        maior = arrayMaior.length;
    }

    if (array[i].length <= menor) {
        arrayMenor = array[i];
        menor = arrayMenor.length;
    }
}

console.log(arrayMaior, arrayMenor);
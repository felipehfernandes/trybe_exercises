let ehPrimo = false;
let ehPrimoContador = 0;
let numPrimos = [];

for (let i = 1; i <= 50; i++) {

    console.log("iteração", i)
    
    // verificando se é primo
    for (let j = 1; j <= i; j++) {

        // console.log(j);

        if (i%j == 0) {
            ehPrimoContador = ehPrimoContador + 1;
            console.log(ehPrimoContador);
        }

        if (ehPrimoContador > 2) {
            ehPrimo = true;
            numPrimos.push(i);
        }

        else if (ehPrimo = true) {
            break;
        }

    }

    ehPrimoContador = 0;

    // verificando se é o maior

}

// console.log(numPrimos);
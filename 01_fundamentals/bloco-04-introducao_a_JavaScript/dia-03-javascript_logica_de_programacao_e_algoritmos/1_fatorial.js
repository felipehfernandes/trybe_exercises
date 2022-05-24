let num = 10;
const numInicial = num;
let fat = 0;

for (let i = 1; i < numInicial; i++) {
    fat = num * (numInicial - i);
    num = fat;
}

console.log(fat);
let word = 'tryber';
let letters = [];

for (i = 1; i <= word.length; i++) {
    letters[i-1] = word[word.length-i];
}

console.log(letters.join(""));
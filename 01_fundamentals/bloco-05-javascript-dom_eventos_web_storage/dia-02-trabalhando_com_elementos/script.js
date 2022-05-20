const body = document.getElementsByTagName('body');

// PARTE 1

// 1
const h1Tag = document.createElement('h1');

h1Tag.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1Tag);

//2
const mainTag = document.createElement('main');

mainTag.className = 'main-content';
document.body.appendChild(mainTag);

//3
const sectionTagCenter = document.createElement('section');

sectionTagCenter.className = 'center-content';
mainTag.appendChild(sectionTagCenter);

//4
const pTag = document.createElement('p');

pTag.innerHTML = 'Felipe Fernandes';

sectionTagCenter.appendChild(pTag);

//5
const sectionTagLeft = document.createElement('section');

sectionTagLeft.className = 'left-content';
mainTag.appendChild(sectionTagLeft);

//6
const sectionTagRight = document.createElement('section');

sectionTagRight.className = 'right-content';
mainTag.appendChild(sectionTagRight);

//7
const smallImage = document.createElement('img');
smallImage.src = 'https://picsum.photos/200';
smallImage.className = 'small-image';

sectionTagLeft.appendChild(smallImage);

//8
const unorderedList = document.createElement('ul');
sectionTagRight.appendChild(unorderedList);

let numbersList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let i = 0; i < numbersList.length; i += 1) {
    let listItems = document.createElement('li');
    listItems.innerText = numbersList[i];
    unorderedList.appendChild(listItems)
};

//9
for (let i = 0; i < 3; i += 1) {
    const h3Tag = document.createElement('h3');
    h3Tag.innerText = 'h3 filhas';
    h3Tag.className = "description";
    mainTag.appendChild(h3Tag);
}

// PARTE 2

//1
h1Tag.className = 'title';

//3
mainTag.removeChild(sectionTagLeft);

//4
sectionTagRight.style.marginRight = 'auto';

//5
sectionTagCenter.parentElement.style.backgroundColor = 'green';

// 6

unorderedList.lastElementChild.previousElementSibling.remove();
unorderedList.lastElementChild.remove();
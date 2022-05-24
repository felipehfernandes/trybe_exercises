const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// 1.
function addClasseTech(element) {
    const techElement = document.querySelector(".tech");
    techElement.classList.remove('tech');
    element.target.classList.add("tech");
}

firstLi.addEventListener("click", addClasseTech);
secondLi.addEventListener("click", addClasseTech);
thirdLi.addEventListener("click", addClasseTech);

// 2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function addTextoTech(element) {
  const techElement = document.querySelector(".tech").innerText = input.value;
}

input.addEventListener("keyup", addTextoTech);

// 3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
function redirectToLinkedin (element) {
  window.open("https://www.linkedin.com/in/felipehfernandes/");
}

myWebpage.addEventListener("dblclick", redirectToLinkedin);

// 4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function hoverColor (element) {
  element.target.style.color = 'red';
}

myWebpage.addEventListener("mouseover", hoverColor);

function hoverColorBack (element) {
  element.target.style.color = 'white';
}

myWebpage.addEventListener("mouseleave", hoverColorBack);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
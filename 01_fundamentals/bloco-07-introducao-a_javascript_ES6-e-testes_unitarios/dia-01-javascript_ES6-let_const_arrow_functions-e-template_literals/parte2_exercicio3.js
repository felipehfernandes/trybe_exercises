const btn = document.getElementById("button");
let counterString = document.getElementById("counter");
let counter = 0;

const counterBtn = () => {
  counter += 1;
  counterString.innerHTML = counter;
};

const input = document.querySelector("input[type=text]");
const button = document.querySelector("button");
const div = document.querySelector(".man");
const form = document.querySelector("form");
const range=document.querySelector("input[type=range]");
const valeurRange=document.querySelector(".range-value");
console.log(input, button, div, form,range);

function deplacer() {
  div.innerHTML = input.value;
}

button.addEventListener("click", deplacer);

form.addEventListener("submit", function (e) {
  console.log(e);
  e.preventDefault();
});

const move = () => {};

input.addEventListener("input", (e) => {
  console.log(e.target.value);

  div.innerHTML = e.target.value;
});

range.addEventListener("input",function(e){
  valeurRange.innerHTML=range.value;
})

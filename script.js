// Requisito 6
function corInicial() {
let primeiraCor = document.getElementById("corUm");
primeiraCor.classList.add("selected");
}

window.onload = corInicial 

// Requisito 7
function removeAndAddSelected(event) {
let corSelecionada = document.getElementsByClassName("selected")[0];
corSelecionada.classList.remove("selected");
event.target.classList.add("selected");
}

let todasAsCores = document.getElementsByClassName("color");
for (posicao = 0; posicao < todasAsCores.length; posicao += 1)
{todasAsCores[posicao].addEventListener("click", removeAndAddSelected)}

// Requisito 8 - Referência para inserir comando getComputedStyle e getPropertyValue: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
function addPintura (event) {
event.target.classList.add("pixel-selected");
let corSelected = document.getElementsByClassName("selected")[0];
let styleSelected = window.getComputedStyle(corSelected);
let bgColorSelected = styleSelected.getPropertyValue("background-color");
event.target.style.backgroundColor = bgColorSelected;
}

let todosOsPixels = document.getElementsByClassName("pixel");
for (indice = 0; indice < todosOsPixels.length; indice += 1)
{todosOsPixels[indice].addEventListener("click", addPintura)}

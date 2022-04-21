// Requisito 6
function corInicial() {
let primeiraCor = document.getElementById("corUm")
primeiraCor.classList.add("selected")
}

window.onload = corInicial 

// Requisito 7
function removeAndAddSelected(event) {
let corSelecionada = document.getElementsByClassName("selected")[0]
corSelecionada.classList.remove("selected")
event.target.classList.add("selected")
}

let todasAsCores = document.getElementsByClassName("color")
for (posicao = 0; posicao < todasAsCores.length; posicao += 1)
{todasAsCores[posicao].addEventListener("click", removeAndAddSelected)}
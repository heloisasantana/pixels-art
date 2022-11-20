// Requisito 12 - Gerando cores não fixas & 
// Requisito 6 - Fazendo com que a cor preta que está no quadrado um seja o primeiro selecionado, e que as cores não fixas sejam inseridas &
// Requisito 7 - Fazendo com que outras cores (ao serem clicadas, uma por vez) recebam a classe selected para poder pintar o quadro:
const randomNumber = () => Math.floor(Math.random() * 255);
const rgb = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

function paletaCores(){
const corUm = document.getElementById('cor1');
corUm.style.backgroundColor = 'black';
corUm.classList.add('selected');
for (let i = 2; i <= 4; i+= 1) 
{document.getElementById(`cor${i}`).style.backgroundColor = rgb();}
const colors = document.getElementsByClassName('color');
for (let posicao = 0; posicao < colors.length; posicao += 1)
{colors[posicao].addEventListener('click', removeAndAddSelected = (event) => {
let corSelecionada = document.getElementsByClassName('selected')[0];
corSelecionada.classList.remove('selected');
event.target.classList.add('selected');
})}}

// Requisito 5 - Criando quadrados iniciais 5x5 para a partir disso criar os quadrados a partir dos inputs &
// Requisito 8 - Fazendo com que seja inserida a cor selecionada no quadrado clicado no quadro de pixels:
function pixelBoard(){
for (let linha = 1; linha <= 5; linha +=1)
{for (let colunas = 1; colunas <= 5; colunas +=1)
{const automaticoPixel = document.createElement('p');
automaticoPixel.innerText = '';
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.appendChild(automaticoPixel);
automaticoPixel.classList.add('pixel');
pixelBoard.style.maxInlineSize = '520px';
automaticoPixel.addEventListener('click', addPintura = (event) => {
const corSelected = document.getElementsByClassName('selected')[0];
event.target.style.backgroundColor = corSelected.style.backgroundColor;
})}}}

const inicializando = () => pixelBoard(); paletaCores();
window.onload = inicializando;

// Requisito 9 - Fazendo com que ao apertar o botão "Limpar" sejam limpos todos os quadrados.
function clearPintura(){
const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
pixels[index].style.backgroundColor = 'white';
}}

const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', clearPintura)

// Requisito 10 - Criando quadrados a partir dos inputs:
function pixerlBoardGenerator(){
const numero = document.getElementById('board-size');
const quantidadeGerada = numero.value;
console.log(numero);
if (quantidadeGerada > 5 && quantidadeGerada < 50) {
for (let linha = 1; linha <= quantidadeGerada; linha +=1)
{for (let colunas = 1; colunas <= quantidadeGerada; colunas +=1)    
{const pixelGerado = document.createElement('p');
pixelGerado.innerText = '';
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.appendChild(pixelGerado);
pixelGerado.classList.add('pixel');
const calculoLinhaTamanho = (104*quantidadeGerada);
pixelBoard.style.maxInlineSize = `${calculoLinhaTamanho}px`;
pixelGerado.addEventListener('click', addPintura = (event) => {
const corSelected = document.getElementsByClassName('selected')[0];
event.target.style.backgroundColor = corSelected.style.backgroundColor;
})}}}
if (numero.value === '') 
{alert('Board inválido!')}
}

const botaoVqv = document.getElementById('generate-board');
botaoVqv.addEventListener('click', pixerlBoardGenerator)

const maiorValor = 100
const menorValor = 1
const numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const box = document.querySelector('.box')
box.innerText = 

console.log()
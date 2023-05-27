function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chute.toLowerCase() == 'game over') {
        var body = document.getElementsByTagName('body')
        body[0].style.backgroundColor = '#A52A2A'
        elementoChute.innerHTML +=
        `
        <div>
            <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        </div>
        `
        return
    }
    else if (numeroIsInvalid(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(chute)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
        return
    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
    else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function numeroIsInvalid(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
function confirmarDeposito() {
    let inpValor = document.getElementById('inpValor')
    let outTempo = document.getElementById('outTempo')
    let outTroco = document.getElementById('outTroco')

    let valor = Number(inpValor.value)

    if (valor == '' || isNaN(valor)) {
        alert('Informe o valor corretamente!')
        inpValor.focus()
        return
    }

    if (valor < 1) {
        alert('Valor insuficiente!')
        inpValor.focus()
        return
    }
    
    let troco1 = valor - 1
    let troco2 = (valor - 1.75)
    let troco3 = (valor - 3)

    if (valor < 1.75) {
        outTempo.textContent = 'Tempo: 30 min'
        if (troco1 > 0) {
        outTroco.textContent = `Troco: ${troco1.toFixed(2)}`
        }
    } else if (valor >= 1.75 && valor < 3) {
        outTempo.textContent = 'Tempo: 60 min'
        if (troco2 > 0) {
        outTroco.textContent = `Troco: ${troco2.toFixed(2)}`
        }
    } else {
        outTempo.textContent = 'Tempo: 120 min'
        if (troco3 > 0) {
        outTroco.textContent = `Troco: ${troco3.toFixed(2)}`
        }
    }
    
}
let btnDeposito = document.getElementById('btnDeposito')
btnDeposito.addEventListener('click', confirmarDeposito)
function decrescerNumero() {
    let inpNumero = document.getElementById('inpNumero')
    let outResposta = document.getElementById('outResposta')

    let numero = Number(inpNumero.value)

    if (numero == '' || isNaN(numero)) {
        alert('Informe um número válido')
        inpNumero.focus()
        return
    }

    let resposta = `Entre ${numero} e 1: ${numero}`

    for (let i = numero - 1; i > 0; i--) {
        resposta = `${resposta + ', ' + i}`
    }
    resposta = `${resposta}.`
    
    outResposta.textContent = `${resposta}`
}
let btnDecrescer = document.getElementById('btnDecrescer')
btnDecrescer.addEventListener('click', decrescerNumero)
function verificarPerfeito() {
    let inpNumero = document.getElementById('inpNumero')
    let outDivisores = document.getElementById('outDivisores')
    let outPerfeito = document.getElementById('outPerfeito')

    let numero = Number(inpNumero.value)

    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido...')
        inpNumero.focus()
        return
    }

    let resposta = `Divisores de ${numero}:`
    let soma = ''

    for (i = 1; i < numero; i++) {
        if (numero % i == 0) {
            resposta += `${i}, `
            soma += `${i}`
            //outDivisores.textContent = `${resposta}. (soma: ${i++})`
        } else {
            outDivisores.textContent = `${resposta}.`
        }
    }
    outDivisores.textContent = `${resposta}. (soma: ${soma})`
}
let btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click', verificarPerfeito)
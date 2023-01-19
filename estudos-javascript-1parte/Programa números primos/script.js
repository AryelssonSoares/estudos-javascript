function verificarPrimo() {
    let inpNumero = document.getElementById('inpNumero')
    let outResposta = document.getElementById('outResposta')

    let numero = Number(inpNumero.value)

    if (numero == 0 || isNaN(numero)) {
        alert('Número inválido...')
        inpNumero.focus()
        return
    }

    let numDivisores = 0

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            temDivisor = 1
            break
        }
    }

    if (numero > 1 && !temDivisor) {
        outResposta.textContent = `${numero} é primo`
    } else {
        outResposta.textContent = `${numero} não é primo`
    }
}
let btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click', verificarPrimo)
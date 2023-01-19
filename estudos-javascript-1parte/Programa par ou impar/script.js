function verificar(prams) {
    let inpNumero = document.getElementById('inpNumero')
    let outResposta = document.getElementById('outResposta')

    outResposta.textContent = ''

    let numero = Number(inpNumero.value)

    if (numero == '' || isNaN(numero)) {
        alert('Informe o número corretamente!')
        inpNumero.focus()
        return
    }

    if (numero % 2 == 0) {
        outResposta.textContent = `Resposta: ${numero} é Par`
    } else {
        outResposta.textContent = `Resposta: ${numero} é Impar`
    } 
}
let btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click',verificar)
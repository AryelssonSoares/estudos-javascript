function calcularValor() {
    let inValor = document.getElementById('inValor')
    let inTempo = document.getElementById('inTempo')
    let outValorFinal = document.getElementById('outValorFinal')

    let valor = Number(inValor.value)
    let tempo = Number(inTempo.value)

    let valorApagar = (tempo) / 15 * 2 

    outValorFinal.textContent = `Valor a pagar R$: ${valorApagar.toFixed(2)}`
}
let btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', calcularValor)
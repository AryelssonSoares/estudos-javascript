function mostrarPreco() {
    let inQuilo = document.getElementById('inQuilo')
    let inConsumo = document.getElementById('inConsumo')
    let outValor = document.getElementById('outValor')

    let quilo = Number(inQuilo.value)
    let consumo = Number(inConsumo.value)

    let valor = (quilo / 1000) * consumo

    outValor.textContent = `Valor a pagar R$: ${valor}`
}
let btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', mostrarPreco)
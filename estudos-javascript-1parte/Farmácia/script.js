function mostrarPromocao() {
    let inMedicamento = document.getElementById('inMedicamento')
    let inPreco = document.getElementById('inPreco')
    let outPromocao = document.getElementById('outPromocao')
    let outPrecoFinal = document.getElementById('outPrecoFinal')

    let medicamento = inMedicamento.value
    let preco = inPreco.value

    let precoFinal = Math.floor(preco) * 2

    outPromocao.textContent = `Promoção de ${medicamento}`
    outPrecoFinal.textContent = `Leve 2 por apenas R$: ${precoFinal}`
}
let btnMostrar = document.getElementById('btnMostrar')
btnMostrar.addEventListener('click', mostrarPromocao)
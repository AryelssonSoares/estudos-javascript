function verPromocao() {
    let inVeiculo = document.getElementById('inVeiculo')
    let inPreco = document.getElementById('inPreco')
    let outVeiculo = document.getElementById('outVeiculo')
    let outEntrada = document.getElementById('outEntrada')
    let outParcelas = document.getElementById('outParcelas')

    let veiculo = inVeiculo.value
    let preco = Number(inPreco.value)

    let entrada = preco / 2
    let parcelas = (preco / 2) / 12

    outVeiculo.textContent = `Promoção: ${veiculo}`
    outEntrada.textContent = `Entrada de R$: ${entrada}`
    outParcelas.textContent = `+ 12x de R$: ${parcelas}`
}
let btnVer = document.getElementById('btnVer')
btnVer.addEventListener('click', verPromocao)
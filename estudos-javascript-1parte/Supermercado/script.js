function mostrarPromocao() {
    let inProduto = document.getElementById('inProduto')
    let inPreco = document.getElementById('inPreco')
    let outPromocao = document.getElementById('outPromocao')
    let outDesconto = document.getElementById('outDesconto')

    let produto = inProduto.value 
    let preco = Number(inPreco.value)

    let precoNormal= preco * 2 
    let promocao = preco * 0.5
    let precoFinal = precoNormal + promocao

    outPromocao.textContent = `${produto} - Promoção: Leve 3 por R$: ${precoFinal.toFixed(2)}`
    outDesconto.textContent = `O 3 custa apenas R$: ${promocao.toFixed(2)}`
}
let btnVer = document.getElementById('btnVer')
btnVer.addEventListener('click', mostrarPromocao)
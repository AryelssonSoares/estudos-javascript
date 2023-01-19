
let btnExibir = document.getElementById('btnExibir');
btnExibir.addEventListener('click', function () {
    let inpPreco = document.querySelector('#inpPreco');
    let outParcelas = document.querySelector('#outParcelas');

    let preco = Number(inpPreco.value);

    if (preco == 0 || isNaN(preco)) {
        alert('Informe corretamente o preço...');
        inpPreco.focus();
        return;
    }

    let opcoes = '';

    for (let i = 1; i <= 10; i++) {
        opcoes += `${i}x de R$: ${(preco / i).toFixed(2)} \n`;
    }

    outParcelas.textContent = `Opçoes de pagamento: \n\n ${opcoes}`;
});

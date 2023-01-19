function revendaCarros() {
    let inpModelo = document.querySelector('#inpModelo');
    let inpAno = document.querySelector('#inpAno');
    let inpPreco = document.querySelector('#inpPreco');
    let outModelo = document.querySelector('#outModelo');
    let outPreco = document.querySelector('#outPreco');

    let modelo = inpModelo.value;
    let ano = Number(inpAno.value);
    let preco = Number(inpPreco.value);

    if (modelo == '' || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
        alert('Informe corretamente os dados do veículo');
        inpModelo.focus();
        return;
    }

    let classificacao = classificarVeiculo(ano);
    let precoVenda = calcularVenda(preco, classificacao);

    outModelo.textContent = `Modelo - ${classificacao}`;
    outPreco.textContent = `Preço de venda: ${precoVenda.toFixed(2)}`;
}

let btnClaCal = document.querySelector('#btnClaCal');
btnClaCal.addEventListener('click', revendaCarros);

function classificarVeiculo(ano) {
    let anoAtual = new Date().getFullYear();
    let classif;

    if (ano == anoAtual) {
        classif = 'Novo';
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = 'Seminovo'
    } else {
        classif = 'Usado'
    }
    return classif;
}

function calcularVenda(valor, status) {
    let prVenda = (status == 'Novo') ? valor * 1.08 : valor * 1.10;
    return prVenda;
}
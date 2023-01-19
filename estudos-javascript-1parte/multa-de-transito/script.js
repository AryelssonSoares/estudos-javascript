
    function multaTransito() {
    let inpData = document.querySelector('#inpData');
    let inpValor = document.querySelector('#inpValor');
    let outLimite = document.querySelector('#outLimite');
    let outDesconto = document.querySelector('#outDesconto');

    let data = inpData.value;
    let valor = Number(inpValor.value);

    if (data == '' || valor == 0 || isNaN(valor)) {
        alert('Informe os dados corretamente...');
        inpData.focus();
        return;
    }
    
    let dataLimite = new Date();

    let partes = data.split('-');
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1);
    dataLimite.setFullYear(Number(partes[0]));

    let dia = dataLimite.getDate();

    dataLimite.setDate(dia + 90);
    let mes = dataLimite.getMonth() + 1;
    let ano = dataLimite.getFullYear();

    let comDesconto = valor - (20 * valor / 100);

    outLimite.textContent = 'Data limite para pagamento com desconto:' + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    outDesconto.textContent = `Valor com desconto R$: ${comDesconto.toFixed(2)}`;
   
};

let btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', multaTransito);

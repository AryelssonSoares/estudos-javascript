const btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', function veterinaria() {
   const inpValor = document.querySelector('#inpValor');
   const inOpcao = document.querySelector('#inOpcao');
   const outDesconto = document.querySelector('#outDesconto');
   const outPrecoFinal = document.querySelector('#outPrecoFinal');

   const preco = inpValor.value;

   let desconto;

   if (rbSim.checked) {
      if (inOpcao.value === 'amigo') {
         desconto = calcularDesconto(preco, 20);
      } else {
         desconto = calcularDesconto(preco, 50);
      }
   } else {
      desconto = calcularDesconto(preco, 10);
   }

   outDesconto.textContent = `Desconto R$: ${desconto.toFixed(2)}`;
   outPrecoFinal.textContent = `A pagar: ${(preco - desconto).toFixed(2)}`
});

const calcularDesconto = (valor, taxa) => valor * (taxa / 100);

rbSim.addEventListener('change', () => {
   inOpcao.className = 'exibe';
});

rbNao.addEventListener('change', () => {
   inOpcao.className = 'oculta';
});

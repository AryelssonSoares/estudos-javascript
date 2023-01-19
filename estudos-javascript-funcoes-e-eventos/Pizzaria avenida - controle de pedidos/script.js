let itens = []; // Vetor global para armazenar os itens do pedido

function trocarItem() {
    // Referência aos elementos select
    let inPizza = document.querySelector('#inPizza');
    let inBebida = document.querySelector('#inBebida');

    // Se estiver marcado
    if (rbPizza.checked) {
        inBebida.className = 'oculta'; // Oculta select das bebidas
        inPizza.className = 'exibe'; // Exibe select das pizzas
    } else {
        inPizza.className = 'oculta'; // Oculta as pizzas
        inBebida.className= 'exibe'; // Oculta as bebidas
    }
}
// Cria referência ao radiobutton's e associa a função ao evento change
let rbPizza = document.querySelector('#rbPizza');
rbPizza.addEventListener('change', trocarItem);

let rbBebida = document.querySelector('#rbBebida');
rbBebida.addEventListener('change', trocarItem);

function mostrarNumSabores() {
    // Se radioButton rbPizza estiver marcado
    if (rbPizza.checked) {
        let pizza = inPizza.value; // Obtém valor do item selecionado
        // Uso o operador condicional para indicar o número de sabores
        let num = (pizza == 'media') ? 2 : (pizza == 'grande') ? 3 : 4;
        // Atributo placeholder exibe uma dica de preenchimento do campo 
        inpDetalhes.placeholder = `Até ${num} sabores`;
    }
}
// Associa função ao evento focus
let inpDetalhes = document.querySelector('#inpDetalhes');
inpDetalhes.addEventListener('focus', mostrarNumSabores);

// Cria função (anônima) ao evento blur (quando o campo perde o foco)
inpDetalhes.addEventListener('blur', function() {
    inpDetalhes.placeholder = ''; // Limpa a dica de preenchimento
});

// Cria função (anônima) associada ao evento keypress (tecla pressionada)
inpDetalhes.addEventListener('keypress', function (tecla) {
   // Se pressionou tecla de código 13 (enter)
   if (tecla.keyCode == 13) {
    adicionarItem(); // Adicionar item no pedido
   } 
});

function adicionarItem() {
    let inPizza = document.querySelector('#inPizza');
    let inBebida = document.querySelector('#inBebida');
    let outPedido = document.querySelector('#outPedido');

    // Se radiobutton pizza estiver marcado
    if (rbPizza.checked) {
        let num = inPizza.selectedIndex; // Obtem n° do item selecionado
        let produto = inPizza.options.text; // Texto do item selecionado
    } else {
        let num = inBebida.selectedIndex;
        let produto = inBebida.options.text;
    }
    let detalhes = inpDetalhes.value;
    itens.push(`${produto} (${detalhes})`); // Adiciona au vetor
    outPedido.textContent = itens.join('\n');
    limparCampos(); 
}
let btnAdicionar = document.querySelector('#btnAdicionar');
btnAdicionar.addEventListener('click', adicionarItem);

function limparCampos() {
    rbPizza.checked = true;
    inBebida.className = 'oculta';
    inPizza.className = 'exibe';
    inPizza.selectedIndex = 0; // Seleciona 1° item (posição 0)
    inpDetalhes.value = ''; 
    rbPizza.focus();
}
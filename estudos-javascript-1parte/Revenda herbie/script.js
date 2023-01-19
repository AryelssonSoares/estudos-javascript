//declara vetor de escopo global que irá os carros disponíveis
let carros = []

function adicionarCarros() {
    let inpModelo = document.getElementById('inpModelo')
    let inpPreco = document.getElementById('inpPreco')
    
    let modelo = inpModelo.value 
    let preco = Number(inpPreco.value)

    if (modelo == '' || preco == '' || isNaN(preco)) {
        alert('Informe os dados corretamente...')
        inpModelo.focus()
        return
    }
    //adiciona dados ao vetor de objetos
    carros.push({modelo: modelo, preco: preco})

    //limpa campos e posiciona cursor em inpModelo
    inpModelo.value = ''
    inpPreco.value = ''
    inpModelo.focus()

    listarCarros() //chama function que lista os carros 
}
let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionarCarros)

function listarCarros() {
    //verifica se vetor está vazio
    if (carros.length == 0) {
        alert('Não há carros na lista')
        return
    }

    let lista = '' //para concatenar lista de carros

    //percorre os elementos do vetor
    for (i = 0; i < carros.length; i++) {
        //adiciona à lista, cada objeto do vetor
        lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`
    }
    //referencia o elemento e altera conteúdo exibido
    document.getElementById('outLista').textContent = lista
}
let btnListar = document.getElementById('btnListar')
btnListar.addEventListener('click', listarCarros)

function filtrarCarros() {
    //faz a leitura do valor máximo a partir do método prompt
    let maximo = Number(prompt('Qual o valor máximo  que o cliente deseja pagar?'))

    //se não preencheu ou conteúdo inválido
    if (maximo == 0 || isNaN(maximo)) {
        return //... retorna
    }
    //para concateenar lista de carros que obedecem ao critério de pesquisa / filtro
    let lista = ''

    //percorre todos os elementos do vetor
    for (i = 0; i < carros.length; i++) {
        //verifica se o preço é inferior(ou igual) ao máximo
        if (carros[i].preco <= maximo) {
            lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`
        }
    }
    let outLista = document.getElementById('outLista') //cria referência a outLista

    //se a lista está vazia, significa que nenhum veículo foi encontrado (no for)
    if (lista == '') {
        outLista.textContent = `Não há carros com preço até R$ ${maximo.toFixed(2)}`
    } else {
        //senão, mostra os veículos obtidos
        outLista.textContent = `Carros até R$ ${maximo.toFixed(2)} \n ------------------------- \n ${lista}`
    }
}
let btnFiltrar = document.getElementById('btnFiltrar')
btnFiltrar.addEventListener('click', filtrarCarros)
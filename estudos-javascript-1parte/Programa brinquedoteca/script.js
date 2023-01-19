let criancas = []

function adicionarCriancas() {
    let inpNome = document.getElementById('inpNome')
    let inpIdade = document.getElementById('inpIdade')

    let nome = inpNome.value 
    let idade = Number(inpIdade.value)

    if (nome == '' || idade == '' || isNaN(idade)) {
        alert('Informe os dados corretamente...')
        inpNome.focus()
        return
    }
    //adiciona dados ao vetor criancas
    criancas.push({nome: nome, idade: idade})

    //limpa campos e adiciona cursor em inpNome
    inpNome.value = ''
    inpIdade.value = ''
    inpNome.focus()

    listarCriancas() //chama function que lista crianças
}
let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionarCriancas)

function listarCriancas() {
    //verifica se vetor está vazio
    if (criancas.length == '') {
        alert('Não há crianças na lista')
        return
    }

    let lista = '' //Para concatenar lista de crianças

    //percorre os elementos do vetor
    for (i = 0; i < criancas.length; i++) {
        //adiciona a lista cada elemento do vetor
        lista += `${criancas[i].nome} - ${criancas[i].idade} anos \n`
    }
    //referencia o elemento e altera o conteúdo exibido
    document.getElementById('outLista').textContent = lista
}
let btnListar = document.getElementById('btnListar')
btnListar.addEventListener('click', listarCriancas)

function resumirLista() {
    if (criancas.length == '') {
        alert('Não há crianças na lista')
        return
    }
    //cria uma copia do vetor criancas
    let copia = criancas.slice()

    //ordena o vetor copia pela idade
    copia.sort(function (a, b) {return a.idade - b.idade})

    let resumo = '' //para concatenar saída

    let aux = copia[0].idade //menor idade do vetor ordenado
    let nomes = [] //vetor para inserir nomes de cada idade

    for (i = 0; i < copia.length; i++) {
        //se é da mesma idade auxiliar, adiciona ao vetor
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome)
        } else {
            //senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
            resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
            resumo += `${(nomes.length / copia.length * 100).toFixed(2)}% \n`
            resumo += `(${nomes.join(', ')}) \n \n`
            aux = copia[i].idade //obtem a nova idade na ordem
            nomes = [] //limpa os vetor dos nomes
            nomes.push(copia[i].nome) //adiciona o primeiro da nova idade
        }
    }
    //adiciona os nomes da última idade ordenada
    resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
    resumo += `${(nomes.length / copia.length * 100).toFixed(2)}% \n`
    resumo+= `(${nomes.join(', ')}) \n \n`

    //altera conteúdo de outLista
    document.getElementById('outLista').textContent = resumo
}
let btnResumir = document.getElementById('btnResumir')
btnResumir.addEventListener('click', resumirLista)

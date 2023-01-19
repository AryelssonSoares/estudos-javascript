let clubes = []

function adicionarClubes() {
    let inpClube = document.getElementById('inpClube')

    let clube = inpClube.value 

    if (clube == '') {
        alert('Informe o nome do clube...')
        inpClube.focus()
        return
    }

    clubes.push({clube: clube}) //adicionar dados ao vetor

    inpClube.value = ''
    inpClube.focus()

    listarClubes() //chama function que lista os clubes
}
let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionarClubes)

function listarClubes() {
    if (clubes.length == 0) {
        alert('Não há clubes na lista')
        return
    }

    let lista = ''

    for (i = 0; i < clubes.length; i++) {
        lista += `${i + 1}. ${clubes[i].clube} \n`
    }

    //exibe a lista em uma única instrução
    document.getElementById('outLista').textContent = lista
}
let btnListar = document.getElementById('btnListar')
btnListar.addEventListener('click', listarClubes)

function montarTabela() {
    if (clubes.length == 0) {
        alert('Não há clubes na lista')
        return
    }

    let tamanho = clubes.length

    if (tamanho == 0 || (tamanho % 2 != 0)) {
        alert('Deve haver um número par de clubes')
        inpClube.focus()
        return
    }

    let jogos = ''
    let ultimo = tamanho - 1

    for (i = 0; i < tamanho / 2; i++) {
        jogos += `${clubes[i].clube} x ${clubes[ultimo - i].clube} \n`
    }

    document.getElementById('outLista').textContent = jogos
}
let btnMontar = document.getElementById('btnMontar')
btnMontar.addEventListener('click', montarTabela)
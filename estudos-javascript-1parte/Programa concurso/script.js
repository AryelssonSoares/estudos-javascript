let candidatos = []

function adicionarCandidatos() {
    let inpNome = document.getElementById('inpNome')
    let inpAcertos = document.getElementById('inpAcertos')

    let nome = inpNome.value 
    let acertos = inpAcertos.value

    if (nome == '' || acertos == '') {
        alert('Informe os dados corretamente!')
        inpNome.focus()
        return
    }

    candidatos.push({nome: nome, acertos: acertos})

    inpNome.value = ''
    inpAcertos.value = ''
    inpNome.focus()

    listarCandidatos()
}
let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionarCandidatos)

function  listarCandidatos() {
    if (candidatos.length == 0) {
        alert('Não há candidatos na lista!')
        return
    }

    let lista = ''

    for (i = 0; i < candidatos.length; i++) {
        lista += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos \n`
    }

    document.getElementById('outLista').textContent = lista
}
let btnListar = document.getElementById('btnListar')
btnListar.addEventListener('click', listarCandidatos)

function candidatosAprovados() {
    if (candidatos.length == 0) {
        alert('Não há candidatos na lista!')
        return
    }

    let corte = Number(prompt('Número de acertos para aprovação?'))

    if (corte == 0 || isNaN(corte)) {
        alert('Número inválido!')
        return
    }

    let copia = candidatos.slice()
    copia.sort(function (a, b) {return a.acertos - b.acertos})
    copia.reverse()

    let aprovados = ''

    for (i = 0; i < copia.length; i++) {
        if (copia[i].acertos >= corte) {
            aprovados += `${copia[i].nome} - ${copia[i].acertos} acertos \n`
        } 
    }

    document.getElementById('outLista').textContent = aprovados

    if (aprovados == 0) {
        alert('Não há candidatos aprovados!')
    }

}
let btnAprovados = document.getElementById('btnAprovados')
btnAprovados.addEventListener('click', candidatosAprovados)

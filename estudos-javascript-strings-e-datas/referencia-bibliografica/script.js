function referenBiblio() {
    let inpNome = document.getElementById('inpNome')
    let outCitacao = document.getElementById('outCitacao')

    let nome = inpNome.value.toUpperCase()

    if (nome == '') {
        alert('Informe corretamente o nome do autor...')
        inpNome.focus()
        return
    }

    let priEspaco = nome.indexOf(' ')
    let ultEspaco = nome.lastIndexOf(' ')

    let referencia = `${nome.substr(ultEspaco)}, ${nome.charAt(0)}. ${nome.substr(priEspaco, 2)}.`

    outCitacao.textContent = referencia
    
}

let btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', referenBiblio)
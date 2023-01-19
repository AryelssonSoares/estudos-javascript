function gerarCracha() {
    let inpNome = document.getElementById('inpNome')
    let outCracha = document.getElementById('outCracha')

    let nome = inpNome.value 

    if (nome == '' || nome.indexOf(' ') == -1) {
        alert('Informe o nome completo do participante...')
        inpNome.focus()
        return
    }

    let priEspaco = nome.indexOf(' ')
    let ultEspaco = nome.lastIndexOf(' ')

    let cracha = `${nome.substr(0, priEspaco)} ${nome.substr(ultEspaco)}`

    outCracha.textContent = `Crachá: ${cracha}`
}
let btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', gerarCracha)
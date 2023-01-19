function criarEstrelas() {
    let inpNumLinhas = document.getElementById('inpNumLinhas')
    let outEstrelas = document.getElementById('outEstrelas')

    let numLinhas = Number(inpNumLinhas.value)

    if (numLinhas === 0 || isNaN(numLinhas)) {
        alert('Informe um número de linhas válido!')
        inpNumLinhas.focus()
        return
    }

    let resposta = ''

    for (let i = 1; i <= numLinhas; i++) {
        resposta += `${i}* \n`
    }

    outEstrelas.textContent = `${resposta}`
}
let btnCriar = document.getElementById('btnCriar')
btnCriar.addEventListener('click', criarEstrelas)
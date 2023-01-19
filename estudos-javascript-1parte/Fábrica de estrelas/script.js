function preencherEspaco() {
    let inpNumero = document.getElementById('inpNumero')
    let outEspacos = document.getElementById('outEspacos')

    let numero = Number(inpNumero.value)

    if (numero == 0 || isNaN(numero)) {
        alert('Número inválido...')
        inpNumero.focus()
        return
    }

    let estrelas = ''
    
    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            estrelas = `${estrelas} *`
        } else {
            estrelas = `${estrelas} -`
        }
    }
    outEspacos.textContent = `${estrelas}`
}
let btnPreencher = document.getElementById('btnPreencher')
btnPreencher.addEventListener('click', preencherEspaco)
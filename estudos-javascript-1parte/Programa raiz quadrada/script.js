function exibirRaiz() {
    let inpNumero = document.getElementById('inpNumero')
    let outResultado = document.getElementById('outResultado')

    let numero = Number(inpNumero.value)

    if (numero == '' || isNaN(numero)) {
        alert('Informe o número corretamente')
        inpNumero.focus()
        return
    }

    let raiz = Math.sqrt(numero)

    if (raiz === Math.floor(raiz)) {
        outResultado.textContent = `A raiz quadrada de ${numero} é ${raiz}`
    } else {
        outResultado.textContent = `Não há raiz exata para ${numero}`
    }
}
let btnExibir = document.getElementById('btnExibir')
btnExibir.addEventListener('click',exibirRaiz)
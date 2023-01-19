function mostrarTabuada() {
    let inpNumero = document.getElementById('inpNumero')
    let outTabuada = document.getElementById('outTabuada')

    let numero = Number(inpNumero.value)

    if (numero == '' || isNaN(numero)) {
        alert('Informe um número válido')
        inpNumero.focus()
        return
    }

    let resposta = ''

    for (let i = 1; i <= 10; i++) {
        resposta = `${resposta} ${numero} x ${i} = ${numero * i} \n`
    }

    outTabuada.textContent = `${resposta}`
}
let btnMostrar = document.getElementById('btnMostrar')
btnMostrar.addEventListener('click', mostrarTabuada)
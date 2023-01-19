let numeros = []

function adicionarNumeros() {
    let inpNumero = document.getElementById('inpNumero')
    let outNumeros = document.getElementById('outNumeros')

    let numero = Number(inpNumero.value)

    if (numero == '' || isNaN(numero)) {
        alert('Informe o número corrtamente!')
        inpNumero.focus
        return
    }

    numeros.push(numero)

    let lista = 'Números: '

    for (let i = 0; i < numeros.length; i++) {
            lista += `${numeros[i]}, `
    }

    outNumeros.textContent = lista

    inpNumero.value = ''
    inpNumero.focus()

}
let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionarNumeros)

function verificarOrdem() {
    let outAtencao = document.getElementById('outAtencao')

    if (numeros.length == 0) {
        alert('Não há números na lista!')
    }

    let ordem = true

    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            ordem = false
            break
        }
    }
    outAtencao.textContent = ordem ? 'Ok! Números estão em ordem crescente' : 'Atenção... Números não estão em ordem crescente'
    outAtencao.style.color = 'blue'
}   
let btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click', verificarOrdem)

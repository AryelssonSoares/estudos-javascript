function mostrarPrevisao() {
    let inpChinchilas = document.getElementById('inpChinchilas')
    let inpAnos = document.getElementById('inpAnos')
    let outLista = document.getElementById('outLista')

    let chinchilas = Number(inpChinchilas.value)
    let anos = Number(inpAnos.value)

    if (chinchilas < 2 || anos ===0 || isNaN(anos)) {
        alert('Informe os dados corretamente!')
        inpChinchilas.focus()
        return
    }

    let resposta = ''

    for (let i = 1; i <= anos; i++) {
        if (i === 1) {
            resposta += `${i}° ano: ${chinchilas} chinchilas \n`
        } else if (i > 1) {
            resposta += `${i}° ano: ${chinchilas *= 3} chinchilas \n`
        }
    }

    outLista.textContent = `${resposta}`
}
let btnMostrar = document.getElementById('btnMostrar')
btnMostrar.addEventListener('click', mostrarPrevisao)
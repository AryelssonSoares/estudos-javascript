function verificarLados() {
    let inpLadoA = document.getElementById('inpLadoA')
    let inpLadoB = document.getElementById('inpLadoB')
    let inpLadoC = document.getElementById('inpLadoC')
    let outLados = document.getElementById('outLados')
    let outTipo = document.getElementById('outTipo')
    
    let ladoA = Number(inpLadoA.value)
    let ladoB = Number(inpLadoB.value)
    let ladoC = Number(inpLadoC.value)

    if (ladoA == '' || isNaN(ladoA) || ladoB == '' || isNaN(ladoB) || ladoC == '' || isNaN(ladoC)) {
        alert('Informe os lados corretamente!')
        inpLadoA.focus()
        return
    }
    if (ladoA > ladoB + ladoC|| ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        outLados.textContent = 'Lados não podem formar um triângulo'
    } else {
        outLados.textContent = 'Lados podem formar um triângulo'
    }

    if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
        outTipo.textContent = 'Tipo: Equilátero'
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        outTipo.textContent = 'Tipo: Isósceles'
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        outTipo.textContent = 'Tipo: Escaleno'
    }
}
let btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click', verificarLados)
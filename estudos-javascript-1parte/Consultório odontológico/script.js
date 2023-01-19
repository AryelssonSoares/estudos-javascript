let pacientes = [] // Vetor global

function adicionarPaciente() {
    let inpPaciente = document.getElementById('inpPaciente')
    let outLista = document.getElementById('outLista')

    let nome = inpPaciente.value 

    if (nome == '') {
        alert('Informe o nome do paciente')
        inpPaciente.focus()
        return
    }

    pacientes.push(nome) // Adiciona o nome no final do vetor

    let lista = ''

    for (i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    outLista.textContent = `${lista}`

    // Limpa campo e posiciona cursor em impPaciente
    inpPaciente.value = ''
    inpPaciente.focus()
}
let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionarPaciente)

function urgenciaPaciente() {
    let inpPaciente = document.getElementById('inpPaciente')
    let outLista = document.getElementById('outLista')

    let nome = inpPaciente.value 

    if (nome == '') {
        alert('Informe o nome do paciente')
        inpPaciente.focus()
        return
    }

    pacientes.unshift(nome) // Adiciona o nome no inicio do vetor

    let lista = ''

    for (i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    outLista.textContent = `${lista}`

    inpPaciente.value = ''
    inpPaciente.focus()
}
let btnUrgencia = document.getElementById('btnUrgencia')
btnUrgencia.addEventListener('click', urgenciaPaciente)

function atenderPaciente() {
    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera')
        inpPacientes.focus()
        return
    }

    let outAtendimento = document.getElementById('outAtendimento')
    let outLista = document.getElementById('outLista')

    let atender = pacientes.shift() // Remove paciente do inicio da fila

    outAtendimento.textContent = `${atender}`

    let lista = ''

    for (i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    outLista.textContent = `${lista}`
}
let btnAtender = document.getElementById('btnAtender')
btnAtender.addEventListener('click', atenderPaciente)

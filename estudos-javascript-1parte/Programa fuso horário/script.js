function exibirHora() {
    let inpHora = document.getElementById('inpHora')
    let outHoraFranca = document.getElementById('outHoraFranca')

    let hora = Number(inpHora.value)

    if (inpHora.value == '' || hora == isNaN(hora)) {
       alert('Informe a hora no Brasil corretamente')
       inpHora.focus() 
       return
    }

    let horaFranca = hora + 5

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }

    outHoraFranca.textContent = `Hora na França: ${horaFranca.toFixed(2)}`
} 
let btnExibir = document.getElementById('btnExibir')
btnExibir.addEventListener('click',exibirHora)
function verificarVelocidade() {
    let inpVelPermitido = document.getElementById('inpVelPermitido')
    let inpVelCondutor = document.getElementById('inpVelCondutor')
    let outSituacao = document.getElementById('outSituacao')

    let velPermitido = Number(inpVelPermitido.value)
    let velCondutor = Number(inpVelCondutor.value)

    if (velPermitido == '' || isNaN(velPermitido)) {
        alert('Informe a velocidade permitido corretamente')
        inpVelPermitido.focus()
        return
    }

    if (velCondutor == '' || isNaN(velCondutor)) {
       alert('Informe a velocidade do condutor corretamente')
       inpVelCondutor.focus()
       return
    }

    if (velCondutor <= velPermitido) {
        outSituacao.textContent = 'Situação: Sem Multa'
    } else if (velCondutor <= velPermitido * 0.2 + velPermitido) {
        outSituacao.textContent = 'Situação: Multa Leve'
    } else if (velCondutor > velPermitido * 0.2) {
        outSituacao.textContent = 'Situacao: Multa grave'
    }
}
let btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click',verificarVelocidade)
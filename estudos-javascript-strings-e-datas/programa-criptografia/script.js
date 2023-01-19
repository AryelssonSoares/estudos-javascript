function mensagemCripto() {
    let inpMensagem = document.getElementById('inpMensagem')
    let outMens = document.getElementById('outMens')

    let mensagem = inpMensagem.value 

    if (mensagem == '') {
        alert('Digite corretamente a mensagem...')
        inpMensagem.focus()
        return
    }

    let par = ''
    let inpar = ''
    let tam = mensagem.length

    for (i = 0; i < tam; i++) {
        if (i % 2 == 1) {
            par += mensagem.charAt(i)
        } else {
            inpar += mensagem.charAt(i)
        }
    }

    outMens.textContent = par + inpar

}

let btnCripto = document.getElementById('btnCripto')
btnCripto.addEventListener('click', mensagemCripto)

function mensagemDecripto() {
    let inpMensagem = document.getElementById('inpMensagem')
    let outMens = document.getElementById('outMens')

    let mensagem = inpMensagem.value 

    if (mensagem == '') {
        alert('Não há mensagem criptografada...')
        inpMensagem.focus()
        return
    }

    outMens.textContent = mensagem

}

let btnDecripto = document.getElementById('btnDecripto')
btnDecripto.addEventListener('click', mensagemDecripto)
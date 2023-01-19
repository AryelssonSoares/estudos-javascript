function gerarEmail() {
    let inpNome = document.getElementById('inpNome')
    let outEmail = document.getElementById('outEmail')

    let nome = inpNome.value 

    if (nome == '' || nome.indexOf(' ') == -1) {
        alert('Informe o nome completo do funcionário...')
        inpNome.focus()
        return
    }

    let partes = nome.split(' ')
    let email = ''
    let tam = partes.length

    for (i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0)
    }

    email += `${partes[tam - 1]}@empresa.com.br`

    outEmail.textContent = `E-mail: ${email.toLowerCase()}`
    
}
let btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', gerarEmail)
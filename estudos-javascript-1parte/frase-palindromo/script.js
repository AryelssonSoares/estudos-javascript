function verificarFrase() {
    let inpFrase = document.querySelector('#inpFrase')
    let outResultado = document.querySelector('#outResultado')

    let frase = inpFrase.value.toUpperCase()

    if (frase == '') {
        outResultado.textContent = 'Digite corretamente a frase...'
        outResultado.style.color = 'orange'
        inpFrase.focus()
        return
    }
   
    //para tirar os espaços da frase: AmeOpoema
    let frase1 = frase.replace(/ /g , '')

    let tam = frase1.length
    let inverso = frase1.charAt(tam - 1)

    for (i = tam - 2; i >= 0; i--) {
        inverso += frase1.charAt(i)
    }

    if (frase1 == inverso) {
        outResultado.textContent = `${frase} é palíndromo`
        outResultado.style.color = 'green'
    } else {
        outResultado.textContent = `${frase} não é palíndromo`
        outResultado.style.color = 'red'
    }
}

let btnVerificar = document.querySelector('#btnVerificar')
btnVerificar.addEventListener('click', verificarFrase)
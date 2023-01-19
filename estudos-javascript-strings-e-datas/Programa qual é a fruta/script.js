function montarDica() {
    let inpFruta = document.getElementById('inpFruta')
    let outDica = document.getElementById('outDica')

    let fruta = inpFruta.value.toUpperCase()

    if (fruta == '') {
        alert('Informe o nome da fruta...')
        inpFruta.focus()
        return
    }

    let resposta = fruta.charAt(0)
    let estrelas = '*'
    let tam = fruta.length

    for (i = 1; i < tam; i++) { 
        if (fruta.charAt(i) == fruta.charAt(0)) { 
            resposta += fruta.charAt(0)
        } else {
            resposta += ' _ '
        }
        estrelas += '*'
    }
    outDica.textContent = resposta
    inpFruta.value = estrelas
}
let btnMontarDica = document.getElementById('btnMontarDica')
btnMontarDica.addEventListener('click', montarDica) 
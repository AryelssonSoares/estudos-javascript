   
function repetirFruta() {
    let inpFruta = document.getElementById('inpFruta')
    let inpNumero = document.getElementById('inpNumero')
    let outResultado = document.getElementById('outResultado')
    
    let fruta = inpFruta.value 
    let numero = Number(inpNumero.value)
    
    if (fruta == '' || numero == 0 || isNaN(numero)) {
        alert('Informe os dados corretamente...')
        return
    }
    
    let numRepeticao = ''

    for (let i = 1; i <= numero; i++) {
        if (i <= numero) {
            numRepeticao += `* ${fruta}`
        } 
    }
    outResultado.textContent = `${numRepeticao}`
}
let btnRepetir = document.getElementById('btnRepetir')
btnRepetir.addEventListener('click', repetirFruta)

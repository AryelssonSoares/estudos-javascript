let numContas = 0
let valTotal = 0

let resposta = ''

function registrarConta() {
    let inpDescricao = document.getElementById('inpDescricao')
    let inpValor = document.getElementById('inpValor')
    let outListaContas = document.getElementById('outListaContas')
    let outTotal = document.getElementById('outTotal')

    let descricao = inpDescricao.value 
    let valor = Number(inpValor.value)
    
    if (descricao == '' || valor == 0 || isNaN(valor)) {
        alert('Informe os dados corretamente...')
        inpDescricao.focus()
        return
    }

    numContas++
    valTotal = valTotal + valor

    resposta = `${resposta} ${descricao} R$: ${valor.toFixed(2)} \n`

    outListaContas.textContent = `${resposta} ---------------------------------`
    outTotal.textContent = `${numContas} conta(s) - Total R$: ${valTotal.toFixed(2)}`

    inpDescricao.value = ''
    inpValor.value = ''
    inpDescricao.focus()
}
let btnRegistrar = document.getElementById('btnRegistrar')
btnRegistrar.addEventListener('click', registrarConta)
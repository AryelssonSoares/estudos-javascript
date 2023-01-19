
const TAXA_MULTA = 2 / 100 //multa por atraso
const TAXA_JUROS = 0.33 / 100 //juros por dia de atraso

function calcularMultaJuros() {
    let inpDataVenc = document.getElementById('inpDataVenc')
    let inpValor = document.getElementById('inpValor')
    let outMulta = document.getElementById('outMulta')
    let outJuros = document.getElementById('outJuros')
    let outTotal = document.getElementById('outTotal')

    let dataVenc = inpDataVenc.value 
    let valor = Number(inpValor.value)

    if (dataVenc == '' || valor == 0 || isNaN(valor)) {
        alert('Informe corretamente os dados da conta...')
        inpDataVenc.focus()
        return
    }

    let hoje = new Date()
    let vencto = new Date()

    //a data vem em formato aaaa-mm-dd
    let partes = dataVenc.split('-')
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    //calcula a diferença de dias entre as datas (em milissegundos)
    let atraso = hoje - vencto

    let multa = 0 //inicializa multa e juros com 0
    let juros = 0

    //se conta estiver em atraso 
    if (atraso > 0) {
        //converte os milissegundos da diferença em dias
        //(1 dia = 24hrs x 60min x 60seg x 1000seg: 86400000)
        //round(): necessario para periodos envolvolvendo horário de verão
        let dias = Math.round(atraso / 86400000)

        multa = valor * TAXA_MULTA //calcula multa e juros
        juros = (valor * TAXA_JUROS) * dias
    }

    let total = valor + multa + juros //calcula o total

    outMulta.value = multa.toFixed(2) //exibe os valores com 2 decimais
    outJuros.value = juros.toFixed(2)
    outTotal.value = total.toFixed(2)
}

let btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', calcularMultaJuros)

function limparCampos() {
    location.reload()
}

let btnNovaConta = document.getElementById('btnNovaConta')
btnNovaConta.addEventListener('click', limparCampos)
    function calcularPeso() {
        let inpNome = document.getElementById('inpNome')
        let rbMasculino = document.getElementById('rbMasculino')
        let rbFeminino = document.getElementById('rbFeminino')
        let inpAltura = document.getElementById('inpAltura')
        let outResposta = document.getElementById('outResposta')

        
        let nome = inpNome.value 
        let masculino = rbMasculino.checked
        let feminino = rbFeminino.checked
        let altura = Number(inpAltura.value)

        if (nome == '' || (masculino == false && feminino == false)) {
        alert('Por favor, informe o nome e selecione o sexo...')
        inpNome.focus() 
        return
        }

        if (altura == 0 || isNaN(altura)) {
            alert('Por favor, informe a altura corretamente...')
            inpAltura.focus()
            return
        }

        if (masculino) {
            let peso = 22 * Math.pow(altura, 2)
            outResposta.textContent = `${nome} Seu peso ideal é ${peso.toFixed(3)}kg`
        } else {
            let peso = 21 * Math.pow(altura, 2)
            outResposta.textContent = `${nome} Seu peso ideal é ${peso.toFixed(3)} kg`
        }
        outResposta.textContent = `${nome} Seu peso ideal é ${peso}kg`
    }
    let btnCalcular = document.getElementById('btnCalcular')
    btnCalcular.addEventListener('click',calcularPeso)
    
    function limparCampos() {
        document.getElementById('inpNome').value = ''
        document.getElementById('rbMasculino').checked = false
        document.getElementById('rbFeminino').checked = false
        document.getElementById('inpAltura').value = ''
        document.getElementById('outResposta').textContent = ''

        document.getElementById('inpNome').focus()
    }
    let btnLimpar = document.getElementById('btnLimpar')
    btnLimpar.addEventListener('click',limparCampos)
    */
    function limparCampos() {
        location.reload()

        document.getElementById('inpNome').focus()
    }
    let btnLimpar = document.getElementById('btnLimpar')
    btnLimpar.addEventListener('click',limparCampos)

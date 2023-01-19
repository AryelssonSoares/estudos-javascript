function exibirMedia() {
    let inpNome = document.getElementById('inpNome')
    let inpPrimeiraNota = document.getElementById('inpPrimeiraNota')
    let inpSegundaNota = document.getElementById('inpSegundaNota')
    let outMedia = document.getElementById('outMedia')
    let outSituacao = document.getElementById('outSituacao')

    let nome = inpNome.value 
    let nota1 = Number(inpPrimeiraNota.value)
    let nota2 = Number(inpSegundaNota.value)

    let media = (nota1 + nota2) / 2
    
    if (media >= 7) {
        outMedia.textContent = `Média das notas: ${media}`
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a)`
        outSituacao.style.color = 'green'
    } else if (media >= 4) {
        outMedia.textContent = `Média das notas: ${media}`
        outSituacao.textContent = `Atenção ${nome}. Você está em exame`
        outSituacao.style.color = 'blue'
    } else {
        outMedia.textContent = `Média das notas: ${media}`
        outSituacao.textContent = `Ops ${nome}! você foi reprovado(a)`
        outSituacao.style.color = 'red'
    }
}
let btnExibir = document.getElementById('btnExibir')
btnExibir.addEventListener('click',exibirMedia)
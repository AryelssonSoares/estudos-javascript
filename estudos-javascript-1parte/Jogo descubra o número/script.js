// declara vetor de escopo global que irá conter os números já apostados
let erros = []

// gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1

// declara constante com o número de chances
const CHANCES = 6

function apostarNumero() {
    // cria referência ao campo de entrada e obtém seu conteúdo
    let inpNumero = document.getElementById('inpNumero')
    let numero = Number(inpNumero.value)

    // valida o número
    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert('Informe um número válido...')
        inpNumero.focus()
        return
    }

    // referencia espaços das saidas de dados
    let outDica = document.getElementById('outDica')
    let outErros = document.getElementById('outErros')
    let outChances = document.getElementById('outChances')

    // Se aposta do jogador for igual ao número sorteado
    if (numero == sorteado) {
        alert('Parabéns! Você acertou!!!')
        // Troca status dos botões
        btnApostar.disabled = true
        btnJogar.className = "exibe"
        outDica.textContent = `Parabéns!! número sorteado: ${sorteado}`
    } else {
        // Se número existe no vetor erros
        if (erros.indexOf(numero) >= 0) {
            alert(`Você já apostou o número ${numero}. tente outro...`)
        } else {
            erros.push(numero) // adiciona número no vetor
            let numErros = erros.length // obtém tamanho do vetor
            let numChances = `${CHANCES - numErros}` // Calcula n° de chances
            // Exibe n° de erros, conteúdo do vetor e n° de chances
            outErros.textContent = `${numErros} (${erros.join(', ')})`
            outChances.textContent = `${numChances}`

            if (numChances == 0) {
                alert('Suas chances acabaram...')
                btnApostar.disabled = true
                btnJogar.className = "exibe"
                outDica.textContent = `Game over!! número sorteado: ${sorteado}`
            } else {
                // Usa operador ternário para (condicional) para mensagem da dica
                let dica = numero < sorteado ? 'Maior' : 'Menor'
                outDica.textContent = `Dica: tente um número ${dica} que ${numero}`
            }
        }
    }
    // Limpa campo de entrada e posiciona cursor neste campo
    inpNumero.value = ''
    inpNumero.focus()
}
let btnApostar = document.getElementById('btnApostar')
btnApostar.addEventListener('click', apostarNumero)

function jogarNovamente() {
    location.reload() // Recarrega a página
}
let btnJogar = document.getElementById('btnJogar')
btnJogar.addEventListener('click', jogarNovamente)
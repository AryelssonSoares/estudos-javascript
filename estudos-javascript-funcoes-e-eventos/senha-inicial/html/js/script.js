function senhaInicial() {
    const inpNome = document.querySelector('#inpNome');
    const outSenha = document.querySelector('#outSenha');

    const aluno = inpNome.value;

    if (!validarNome(aluno)) {
        alert('Informe corretamente o nome do aluno...');
        inpNome.focus();
        return;
    }

//const sobrenome = obterSobrenome(aluno);
//const numVogais = contarVogais(aluno)

    outSenha.textContent = `Senha inicial: ${obterSobrenome(aluno)}${contarVogais(aluno)}`;
}
const btnGerar = document.querySelector('#btnGerar');
btnGerar.addEventListener('click', senhaInicial);

function validarNome(nome) {
    // se houver espaço no nome...
    if (nome.includes(' ')) {
        return true;
    } else {
        return false;
    }
}
    
function obterSobrenome(nome) {
    const ultEspaco = nome.lastIndexOf(' ');

    const ultSobrenome = nome.substr(ultEspaco + 1).toLowerCase();

    return ultSobrenome;
}

function contarVogais(nome) {
    let num = 0;

    for (const letra of nome) {
        const letraUC = letra.toUpperCase();
        if (letraUC === 'A' || letraUC === 'E' || letraUC === 'I' || letraUC === 'O' || letraUC === 'U') {
            num++;
        }
    }
    return num < 10 ? '0' + num : num;
}

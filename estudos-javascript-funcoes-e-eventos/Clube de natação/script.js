function clubeNatacao() {
    const inpNome = document.querySelector('#inpNome');
    const inpIdade = document.querySelector('#inpIdade');
    const outResposta = document.querySelector('#outResposta');

    const atleta = inpNome.value;
    const idade = Number(inpIdade.value);

    if (atleta === '' || idade === 0 || isNaN(idade)) {
        alert('Informe corretamente os dados do aluno...');
        inpNome.focus();
        return;
    }

    const tracos = retornarTracos(atleta);
    const categoria = categorizarAluno(idade);

    outResposta.textContent = ` ${atleta} \n ${tracos} \n Categoria: ${categoria}`;
}
const btnCategorizar = document.querySelector('#btnCategorizar');
btnCategorizar.addEventListener('click', clubeNatacao);

function retornarTracos(nome) {
    let tracos = '';

    for (const letra of nome) {
        if (letra === ' ') {
            tracos += ' ';
        } else {
            tracos += '-'
        }
    }
    return tracos;
}

function categorizarAluno(idade) {
    let cat;

    if (idade <= 12) {
        cat = 'Infantil';
    } else if (idade <= 18) {
        cat = 'Juvenil';
    } else {
        cat = 'Adulto';
    }
    return cat;
}

function mostrarOla() {
    let nome = document.getElementById('nome').value
    let resposta = document.getElementById('resposta')
    resposta.textContent = `Olá ${nome}`
}
let mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click',mostrarOla)
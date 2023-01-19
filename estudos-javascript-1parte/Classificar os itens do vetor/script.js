/*
let nomes = ['Pedro', 'Ana', 'João']

nomes.sort()

console.log(nomes.join(', ')) // Ana, João, Pedro

nomes.reverse()

console.log(nomes.join(', ')) // Pedro, João, Ana
*/

let numeros = [50, 100, 2]

numeros.sort()

console.log(numeros.join(', ')) // 100, 2, 50

numeros.sort(function (a, b) {return a - b})
console.log(numeros.join(', ')) // 2, 50, 100


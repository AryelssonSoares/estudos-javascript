let carros = []
carros.push({modelo: 'Fusca', preco: 6500})
carros.push({modelo: 'Escort', preco: 7800})

for (i = 0; i < carros.length; i++) {
    console.log(`${carros[i].modelo} R$: ${carros[i].preco}`)
}
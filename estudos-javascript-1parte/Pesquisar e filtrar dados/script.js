let idades = [12, 16, 15, 17, 14]

let maiores = false

for (i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        console.log(idades[i])
        maiores = true
    }
}
if (!maiores) {
    console.log('Não há idades maiores que 18 na lista')
}
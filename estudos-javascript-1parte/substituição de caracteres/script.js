let senha = 'ABACAD'

let senha1 = senha.replace('A', 'X')
console.log(senha1) //XBACAD

let senha2 = senha.replace(/A/g, 'X')
console.log(senha2) //XBXCXD
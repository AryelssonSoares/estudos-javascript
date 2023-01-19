let app = 'App Controle Financeiro'

let app2 = app.replace(' ','')
console.log(app2) // AppControle Financeiro

let app3 = app.replace(/ /g, '')
console.log(app3) //AppControleFinanceiro

let app4 = app.replace(/ /g, '').toLowerCase()
console.log(app4) //appcontrolefinanceiro
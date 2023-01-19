    noticias = []
    
    function adicionarNoticias() {
        let inpNoticia = document.getElementById('inpNoticia')
    
        let informacao = inpNoticia.value 
    
        if (informacao == '') {
            alert('Informe a notícia corretamente!')
            inpNoticia.focus()
            return
        }
    
        noticias.push(informacao)
    
        inpNoticia.value = ''
        inpNoticia.focus()
    
        let lista = ''
    
        for (let i = 1; i <= noticias.length; i++) {
            lista = `${i}`
            outNoticias.style.color = 'blue'
        }
    
        document.getElementById('outNoticias').textContent = `Notícias cadastradas: ${lista}` 
    
        //listarNoticias()
    }
    let btnAdicionar = document.getElementById('btnAdicionar')
    btnAdicionar.addEventListener('click', adicionarNoticias)
    
    function  listarNoticias() {
        if (noticias.length == 0) {
            alert('Não há notícias!')
            return
        }
    
        let numNoticias = Number(prompt('Número de notícias que desejas ver?'))
    
        let copia = noticias.slice()
        copia.sort(function (a) {return a.informacao})
        copia.reverse()
        
        if (copia.length < numNoticias) {
            alert('Número deve ser inferior ou igual ao de notícias cadastradas...')
        }

        //const ult = copia.length - 1
        let ultimas = ''
    
       for (i = 0; i < numNoticias; i++) {
            ultimas += `${copia.length - i}°) ${copia[i]} \n`
       }
    
       document.getElementById('outUltimas').textContent = `${numNoticias} últimas notícias: \n ----------------------------------------------- \n ${ultimas}`
    
    }
    let btnListar = document.getElementById('btnListar')
    btnListar.addEventListener('click', listarNoticias)
    
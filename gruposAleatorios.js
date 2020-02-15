var nomes = ['beto', 'luxa', 'pinduca', 'marquinho', 'euzebio', 'joão', 'lila', 'nina', 'pri', 'alice', 'cleonice']

function geraGrupos (tamanhoDoGrupo) {
    let grupo = []
    let numeroDoGrupo = 1

    while(nomes.length > 0) {
        populaGrupo(nomes, grupo)
        
        if(grupo.length == tamanhoDoGrupo || nomes.length == 0){
            imprimeGrupo(grupo, ++numeroDoGrupo)
            grupo.length = 0
        }
    }
}

function numeroAleatorio(min = 0, max) {
    let nr = Math.random() * (max - min) + min

    return Math.floor(nr)
}

function populaGrupo(arrayNomes, arrayGrupo) {
    let posicao = numeroAleatorio(0, arrayNomes.length)
        
        arrayGrupo.push(arrayNomes[posicao])
        arrayNomes.splice(posicao, 1)
    
        return arrayNomes, arrayGrupo
}

function imprimeGrupo(arrayGrupo, contador){
    console.log(`grupo ${contador}: ${arrayGrupo}`)
}

geraGrupos(3)
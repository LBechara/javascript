var nomes = ['beto', 'luxa', 'pinduca', 'marquinho', 'euzebio', 'joão', 'lila', 'nina', 'pri', 'alice', 'cleonice']
const tamanhoDoGrupo = 3

function geraGrupos () {
    let grupo = []
    let c = 1

    while(nomes != 0){
        if(nomes.length != 0){
        var posicao = numeroAleatorio(0, nomes.length)
        }
        else{
            posicao = 0
        }
        grupo.push(nomes[posicao])
        nomes.splice(posicao, 1)
        
        if(grupo.length == tamanhoDoGrupo || nomes.length == 0){
            console.log(`grupo ${c}: ${grupo}`)
            grupo = []
            c++
        }
        // console.log(`nomes = ${nomes.length}`)
    }
}

function numeroAleatorio(a = 0, b) {
    let n = Math.random() * (b - a) + a

    return Math.floor(n)
}

geraGrupos()
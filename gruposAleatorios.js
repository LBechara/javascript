var nomes = ['beto', 'luxa', 'pinduca', 'marquinho', 'euzebio', 'joão', 'lila', 'nina', 'pri', 'alice', 'cleonice']
const b = nomes.length
const tamanhoDoGrupo = 5

console.log(nomes.length)

function geraGrupos () {
    let grupo = []

    while(nomes != 0){
        let posicao = numeroAleatorio(0, nomes.length)

        grupo.push(nomes[posicao])
        nomes.splice(posicao, 1)
        
        if(grupo.length == 5 || nomes == 0){
            imprimeGrupo(grupo)
        }
        console.log(`nomes = ${nomes.length}`)
    }
}

function numeroAleatorio(a = 0, b) {
    let n = Math.random() * (b - a) + a

    return Math.floor(n)
}

function imprimeGrupo(a) {
    console.log(a)
    a = []
}

geraGrupos()
var nomes = ['beto', 'luxa', 'pinduca', 'marquinho', 'euzebio', 'joão', 'lila', 'nina', 'pri', 'alice', 'cleonice']
const b = nomes.length
const tamanhoDoGrupo = 5

console.log(nomes.length)

const imprimeGrupos = () => {
    let grupo = []

    for(let i = 0; i < nomes.length; i++){
        let posicao = numeroAleatorio(0, nomes.length - i)

        if(nomes > 0) {
            grupo.push(nomes[posicao])
            nomes.pop(posicao)
        }
        if(grupo.length == 5 || nomes == 0){
            imprimeGrupo(grupo)
        }
    }
}

function numeroAleatorio(a = 0, b) {
    let n = Math.random() * (b - a) + a

    return Math.ceil(n)
}

function imprimeGrupo(a) {
    console.log(a)
    a = []
}
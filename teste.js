var a = [1, 2, 3, 4, 5]
var b = [1, 2]

    a.push(b[0])
    console.log(a)
    a.pop()
    console.log(a)
    console.log(b.length)

function imprimeGrupo() {
    console.log(a)
    a = []
    console.log(a)

}

imprimeGrupo()
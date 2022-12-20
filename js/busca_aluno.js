const alunos = ['João', 'Maria', 'Pedro', 'José']
const medias = [10, 7, 9, 6]

const listaDeAlunosEmedias = [alunos, medias]

function getNotaAluno(aluno) {
    if (listaDeAlunosEmedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosEmedias[0]
        // const medias = listaDeAlunosEmedias[1]
        const [alunos, medias] = listaDeAlunosEmedias

        const posicao = alunos.indexOf(aluno) //retorno o valor do indice
        const mediaAluno = medias[posicao]
        console.log(`${aluno} tem a média ${mediaAluno}`)
    }
    else {
        console.log(`${aluno}não está cadastrado!`)
    }
}
getNotaAluno('Maria')
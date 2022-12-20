const nomes = ['João', 'Maria', 'Pedro', 'José', 'Lucas', 'Ana', 'Paulo']
console.log(nomes)
nomes.splice(1, 2) // Remove 2 elementos a partir do índice 1 e adiciona 'Luiza' e 'Fernanda' a partir do índice 1
nomes.splice(1, 2, 'Cardoso') //remove 2 elementos a partir do índice 1 e adiciona 'Cardoso' a partir do índice 1
//nomes.push('Juca')
console.log(nomes)
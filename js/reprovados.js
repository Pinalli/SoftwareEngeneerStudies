const names = ['ana Julia', 'Paula bala', "Ricardo teixeira", "Bárbara Bonita", "João das Neves"];
const medias = [9.5, 7, 6.4, 7.8, 8];
                               // _ = names
const reprovados = names.filter((_, index) => medias[index] < 7);
console.log(reprovados);
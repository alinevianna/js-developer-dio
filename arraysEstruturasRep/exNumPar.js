/* Exercicio
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.*/

let listaNum = [60,47,15,30,87,91,86,49,84,32,97,51,5,53,6,17,83,5,100,75,97,12,9,63,14,43,99,17,13,58,38,54,90,47,51,7,30,90,45,97];

const listaPar = [];

for (let i = 1; i < listaNum.length; i++) {
    if ((listaNum[i] % 2) == 0) {
        console.log(listaNum[i])
        listaPar.push(listaNum[i])
    };
}

/*console.log(listaPar)*/
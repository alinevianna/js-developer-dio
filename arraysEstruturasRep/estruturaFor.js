/*Aula sobre estruturas de repetição FOR. Usando para calcular média.*/
/*const nome = 'Aline Vianna';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
*/

const notas = [];

notas.push(10);
notas.push(5);
notas.push(8);
notas.push(7);
notas.push(9);
notas.push(6);
notas.push(8);

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    somaNotas += nota;   
}

const media = somaNotas / notas.length

console.log(media)
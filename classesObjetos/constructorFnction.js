class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`)
    } else if (p2.nome > p1.nome){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`)
    } else {
        console.log('As pessoas tem a mesma idade.')
    }
};

const aline = new Pessoa("Aline", 28);
const matheus = new Pessoa("Matheus",14)

compararPessoa(aline,matheus);
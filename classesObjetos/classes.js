class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

const aline = new Pessoa();
aline.nome = "Aline Vianna";
aline.idade = 18;

console.log(aline);

aline.descrever();
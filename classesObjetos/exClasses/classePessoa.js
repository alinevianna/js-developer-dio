class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(peso, altura) {
       return this.peso/(this.altura*this.altura)
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return (`${this.nome} tem a altura de ${this.altura} e pesa ${this.peso} kilos, portanto seu IMC é de ${(imc)}. Está abaixo do peso.`);
        } else if (imc >= 18.5 && imc < 25) {
            return (`${this.nome} tem a altura de ${this.altura} e pesa ${this.peso} kilos, portanto seu IMC é de ${(imc)}. Está no peso normal.`);
        } else if (imc >= 25 && imc < 30){
            return (`${this.nome} tem a altura de ${this.altura} e pesa ${this.peso} kilos, portanto seu IMC é de ${(imc)}. Está acima do peso.`);
        } else if (imc >= 30 && imc < 40) {
            return (`${this.nome} tem a altura de ${this.altura} e pesa ${this.peso} kilos, portanto seu IMC é de ${(imc)}. Está obeso.`);
        } else {
            return (`${this.nome} tem a altura de ${this.altura} e pesa ${this.peso} kilos, portanto seu IMC é de ${(imc)}. Obesidade grave.`);
        }
    }
};

const jose = new Pessoa("José",70, 1.80);

console.log(jose.classificarIMC());
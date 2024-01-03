/*
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class modeloCarro {
    nomeCarro;
    marca;
    cor;
    gastoMedioPorKM; 

    constructor(nomeCarro, marca, cor, gastoMedioPorKM){
        this.nomeCarro = nomeCarro,
        this.marca = marca,
        this.cor = cor,
        this.gastoMedioPorKM = gastoMedioPorKM
    }

    calcularGastoPercurso(distanciaEmKM,precoLitro){
        /*return this.gastoMedioPorKM * distanciaEmKM * precoLitro;*/
        console.log(`Para percorrer uma distancia de ${distanciaEmKM} km's com o carro ${this.nomeCarro} ${this.cor} da marca ${this.marca} o usúario gastará em média R$${(this.gastoMedioPorKM * distanciaEmKM * precoLitro)}, pois este modelo tem uma média de gasto de ${this.gastoMedioPorKM} por Km rodado.`)
    }
};
const uno = new modeloCarro("Uno", 'Fiat', 'Prata', 1/12)
const onix = new modeloCarro('Onix', 'Chevrollet', 'Preto', 1/9)
console.log(uno.calcularGastoPercurso(70,5))
console.log(onix.calcularGastoPercurso(70,5))
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}
//Arrow Function entrou na vida dos Devs a partir da versão ES6 2015
const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow('Daniel'));

const somar (num1, num2) => num1 + num2;

//Arrow Function com + de 1 linha de instrução
const somarNumerosPequenos (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

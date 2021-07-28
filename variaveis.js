/* //boolean
const usuarioLogado = true;
const contaPaga = false;

//truthy or falsy
// 0 => false
// 1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

//null and undefined 
//null == tipo de dados vazio, não representa nada.
let minhaConta;
let varNull = null;

console.log(minhaConta)
console.log(varNull)

let numero = 3;
let texto = "alura";

console.log(typeof minhaConta);
console.log(typeof varNull)

//var - primeira variável do JavaScript 
/* var altura = 5;
var comprimento = 7;
area = altura * comprimento;
console.log (area)
var area;
 */

//let - foi criado na versão 2015 do js para resolver problemas de bug 
/* let forma = 'retangulo'; 
let altura = 5;
let comprimento = 7;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log (area)
let area;
 */
 
/* //const - variável imutavel, inauteravel  
/* const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area = null;


if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
} */

/* console.log(area) */

/* let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura"; */

/* var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi) */

//Hardyfloor
//laboratório
let lab1;
let labArea1Largura = 5.75;
let labArea1Comprimento = 5.15;

let lab2;
let labArea2Largura = 10.42;
let labArea2Comprimento = 4.22;

let area1;

lab1 = labArea1Comprimento * labArea1Largura;
lab2 = labArea2Comprimento * labArea2Largura;

console.log(lab1)
console.log(lab2)

area1 = lab1 + lab2
console.log(area1)

//sala de reunião
let sr1;
let salaReuniao1Largura = 7.92;
let salaReuniao1Comprimento = 4.88;

let sr2;
let salaReuniao2Largura = 3.54;
let salaReuniao2Comprimento = 1.55;

let area2;

sr1 = salaReuniao1Comprimento * salaReuniao1Largura;
sr2 = salaReuniao2Comprimento * salaReuniao2Largura;

console.log(sr1)
console.log(sr2)

area2 = sr1 + sr2;
console.log(area2)

console.log(area1 + area2)

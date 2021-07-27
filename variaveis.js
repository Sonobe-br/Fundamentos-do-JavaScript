//boolean
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
 
//const - variável imutavel, inauteravel  
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area = null;


if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)
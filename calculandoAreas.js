/* //Hardyfloor

//Empresa: ANTON PAAR BRASIL
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

console.log(area1 + area2) */

//Empresa: Snowball Church
//Escadaria 3º andar
/* let degraus3;
const degrauLargura3 = 0.35;
const degrauComprimento3 = 1.10;
const degrauAltura3 = 0.18;

let quantidadeDegraus3 = 14;

let patamares3;
const patamarLargura3 = 2.50;
const patamarComprimento3 = 3.10;

degraus3 = (degrauAltura3 + degrauLargura3) * degrauComprimento3;
patamar3 = patamarLargura3 * patamarComprimento3;

let terceiroAndar;

console.log(degraus3.toFixed(2))
console.log(patamar3.toFixed(2)) 
terceiroAndar = degraus3 + patamar3;
terceiroAndar = quantidadeDegraus3 * degraus3;
console.log(terceiroAndar)


//Escadaria 2º andar
let degraus2;
const degrauLargura2 = .35;
const degrauComprimento2 = 1.10;
const degrauAltura2 = .18;

let quantidadeDegraus2 = 14;

let patamares2;
const patamarLargura2 = 4.50;
const patamarComprimento2 = 2.95;

let segundoAndar;

degraus2 = (degrauAltura2 + degrauLargura2) * degrauComprimento2;
patamares2 = patamarLargura2 * patamarComprimento2;
segundoAndar = quantidadeDegraus2 * degraus2;
console.log(segundoAndar)

console.log(degraus2.toFixed(2))
console.log(patamares2.toFixed(2)) 
segundoAndar = degraus2 + patamares2;
console.log(segundoAndar.toFixed(2))

let andares
console.log(terceiroAndar + segundoAndar); */


//teste
let degraus2;
let degrauLargura2 = .35;
let degrauComprimento2 = 1.10;
let degrauAltura2 = .18;

let quantidadeDegraus2 = 10;

degraus2 = (degrauAltura2 + degrauLargura2) * degrauComprimento2 * quantidadeDegraus2;
console.log(degraus2.toFixed(2))

let degraus3;
let degrauLargura3 = .35;
let degrauComprimento3 = 2.10;
let degrauAltura3 = .20;

let quantidadeDegraus3 = 15;

degraus3 = (degrauLargura3 + degrauComprimento3) * degrauAltura3 * quantidadeDegraus3;
console.log(degraus3.toFixed(2))

let totalAreas;
totalAreas = degraus2 + degraus3;
console.log(totalAreas)


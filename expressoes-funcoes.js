//declaração de função 
function minhaFuncao(param) {
    return param;
}
console.log(minhaFuncao('Sunshine'));

//expressão de função
const soma = function(num1, num2) {return num1 + num2}
console.log(soma(2, 2));

//Qual a diferença das formas:
//1)
console.log(apresentar());
function apresentar() {
    return "hi there!"
}
/* Resultado no terminal: hi there! */

//2)
console.log(multiplica(3, 3));
const multiplica = function(num1, num2) {return num1 * num2}
/* Resultado no terminal: ReferenceError: Cannot access 'multiplica' before initialization at Object.<anonymous> 
(C:\Users\Daniel Sonobe\fundamentos_javascript\expressoes-funcoes.js:18:13) */

/* A declaração de soma com const fez a função se comportar como uma variável e, no javaScript primeiro ela precisaria
ser iniciada alguma vez para depois se obter o resultado. O interpretador do js passa pelo código e puxar todas as 
declarações para o todo do código. As funções e as variáveis são listadas e esta 'operação' ele executa é denominada 
de HOISTING que é içar, levantar.*/


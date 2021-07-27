// tipo de dado
//booleanos

//conversão implicita - permite que converta um dado em outro (um numero para string).
const numero = 27;
/* const numeroString = '27'; */

/* console.log (numero === numeroString) */ //(=) usado para atribuir um valor a variável, (==) comparação do valor, apenas o que esta dentro e o operador (===) compara não somente o valor, mas também o tipo se é string, numero.  

/* console.log(numero + numeroString) */ //resultado = 2727 >>> houve uma concatenação e não uma soma. 

//Numero
//String

//Conversão explicita
/* const numeroString = Number('27'); */
/* console.log(numero + Number(numeroString)) 
 */

//NaN - Not a Number
const numeroString = Number('27dan');
console.log(numero + numeroString)
// == (comparação implicita)

const number = 5;
const text = '5';
/* console.log(number == text); */
console.log(number === text); // === (comparação explicita. Ele faz a comparação não só dos valores, mas também dos tipos).

//typeof (Ele nos retorna o tipo de dado que a variável esta armazenando)
console.log(typeof number);
console.log(typeof text);

/* conclusão: 
== compara apenas o valor;
=== compara os valores e os tipos de dados; */  

//conversão explicita 
Number()
String()
/* 
Até agora praticamos com alguns dos operadores do JavaScript, especialmente alguns dos utilizados 
em operações matemáticas:

nome	                        operador
Atribuição de adição	        x + y
Atribuição de subtração	        x - y
Atribuição de multiplicação	    x * y
Atribuição de divisão	        x / y
Começamos com os operadores mais utilizados, pois sempre que aprendemos uma linguagem de programação 
nova, o melhor é absorvermos mais conhecimentos aos poucos sobre cada assunto, em vez de tentar dominar 
tudo de uma vez.

Porém, a lista de operadores é extensa e há muitas formas de utilizá-los. Além das operações matemáticas 
básicas, do = para atribuição de valor em uma variável e das comparações com == e ===, utilizamos operadores 
para diversas outras tarefas de código, por exemplo:

||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma 
que == e === retornam true ou false.

A documentação do MDN sobre operadores tem a lista completa, com vários exemplos. Invista um tempo para se 
familiarizar com cada um deles e tente pensar em exemplos de uso para cada um. */

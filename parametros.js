// 1ª func.: parâmetros de função
/* /* function soma(numero1, num2) {
    return numero1 + num2;
}

console.log(soma(2, 2));
console.log(soma(3, 15));
console.log(soma(-290, 1490));
console.log(soma(-399, 181));
 */

// 2ª func.: parâmetros x argumentos 
/* function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos de idade.`
}
console.log(nomeIdade('Daniel', 43)); */


// 3ª func.
function soma(numero1, num2) {
    return numero1 + num2;
}

function multiplica(numero1, num2) {
    return numero1 * num2;
}
//console.log(soma(4, 5));
console.log(multiplica(soma(4, 5), soma(3, 3)));


/* Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, 
sem a necessidade de disponibilizar o resultado para o restante do código. Neste exemplo 
escolhemos usar uma string fixa, então não há necessidade de parâmetros. */
function cumprimentar() {
    console.log('Hi guys!');
}
cumprimentar();


/* Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, 
o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione 
de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string. */
function cumprimentaPessoa(pessoa) {
    console.log(`Good morning ${pessoa}`);
}
cumprimentaPessoa('Helena');


/* Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte 
do código e elas trabalhem juntas.
No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela 
está sendo utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string 
”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da 
palavra-chave return. */
function cumprimentar() {
    return 'Hi guys!'
}
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} My name's ${nomePessoa}`);
}
cumprimentaPessoa('Daniel');


/* Função com return e mais de um parâmetro: Lembrando que as funções podem receber a quantidade de parâmetros 
necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 
se refere a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que estamos 
desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber - no 
caso, números.
Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros 
no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos 
para executar a função (ou seja, 30, 45, etc). */
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}
operacaoMatematica(15, 30, 40);  



function comParametro(param) {
    console.log(param)
}
comParametro()
//undefined

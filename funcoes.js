/* let x = '';
console.log(x);
x = 'oi'; */

//DECLARAÇÃO DE FUNÇÃO_ 
// 1) declara a função_
                      //2 -> valor da soma()  
/* function imprimeTexto(texto){
    console.log(texto)
} */

// 2) executa a função (1 ou + vezes)_
// imprimeTexto(soma()); 
/* imprimeTexto('say hello again'); */
// o js possui três forma de escrever funções

    //function soma(){
     /* const resultado = 2 + 2; */
     /* return  2 + 2; //a linha return deve ser a última linha do bloco
    } */
   /*console.log(soma()); */            

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
    return e
}
console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))


//detalhando a estrutura do código acima:
//let listaFuncionarios = ['José', 'Ana', 'Luiza'] /* criei uma lista com nomes */
//let listaIdades = [22,19,33] /* criei uma lista com idades */

/* const exibeLista = ( lista, descricao ) => { */ /* dei inicio a criação de uma função chamada exibeLista que aceita 
dois parâmetros: lista e descrição */

    /* e = '' */ /* criei uma variável chamada e com conteúdo igual a uma cadeia de caracteres vazia */

    /* for ( let i = 0; i < lista.length; i++ ) { */  
        /* início de um bloco ( laço ) de repetição. 
        Defini a varável de controle i com valor inicial 0, defini a condição que deve ser verdadeira para que as 
        instruções dentro do laço sejam executadas (elas serão executadas se o valor de i for menor que o comprimento 
        da lista, como cada lista tem 3 elementos então se i for menor que 3 o bloco será executado), defini o 
        incremento da variável de controle (ao final do laço o valor da variável aumenta em 1 ( i++ )  ). Então o 
        bloco será executado 3 vezes: na primeira com i=0, ao final i recebe mais um e fica com valor = 1, na 
        segunda com valor 1, incrementa e na terceria com valor = 2 */

        /* e += '\n'+ descricao + lista [i] */ 
        /* Adicionei uma nova linha na cadeia de caracteres, o valor passado no parâmetro descrição e o elemento 
        da lista. Na primeira execução, elemento 0 ( José ), na segunda execução, elemento 1 ( Ana ), etc */

        /* return e */ 
        /* Isto é o que faltava no código original. A instrução return indica o valor retornado pela função. Esta 
        função retorna as linhas com os elementos e descrições */

    /* } termino o laço de repetição */

/* } termino a criação da função exibeLista */

/* console.log(exibeLista(listaFuncionarios, 'Funcionário: ')) */ /* Aqui exibe a mensagem com os elementos e descrições 
retornados pela função exibeLista */
/* console.log(exibeLista(listaIdades, "Idades: ")) */ /* Exibe mensagem com os elementos e descrições retornados 
pela função exibeLista */
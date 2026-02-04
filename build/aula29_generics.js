// GENERICS 
/**
 * Generics em TypeScript servem para criar tipos e funções reutilizáveis, mantendo segurança de tipo sem fixar um tipo específico.
 * Ideia central
 * Em vez de dizer “isso é number” ou “isso é string”, você diz: “isso é um tipo que será decidido depois”.
 *
 * UE, mas por que não colocar o tipo "any", isto é, com tipo 'any' e retorno 'any'?
 * Porque perderíamos a tipagem, ou seja, generics permitem escrever código flexível sem perder tipagem.
 *
 */
function f_teste(valor) {
    // Ao colocar <T>, estamos especificando um tipo de dado que será passado na hora de chamar a função, esse tipo de dado vai ser o mesmo para a variável "valor" e para o retorno da função. 
    return valor;
}
console.log(f_teste(10));
console.log(f_teste('10'));
console.log(f_teste(true));
// Podemos ter mais de um tipo genérico
function f_teste2(valor, teste) {
    // A ordem dos genéricos NÃO precisa bater com a ordem dos parâmetros.
    return teste;
}
console.log(f_teste2(23, 'Teste'));
// PODEMOS UTILIZAR O GENERICS EM UMA CLASSE
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const c1 = new C_teste(10);
console.log(c1.valor);
export {};

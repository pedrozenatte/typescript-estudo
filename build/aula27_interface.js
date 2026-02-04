// INTERFACE
// Vamos fazer um objeto
let curso1;
curso1 = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescript',
    aula: 100,
    max_alunos: 50
};
console.log(curso1);
// Se quisermos criar mais um objeto curso, por exemplo curso2, faremos:
let curso2;
curso2 = {
    titulo: 'Javascript',
    descricao: 'Curso de Javascript',
    aula: 200,
    max_alunos: 80
};
console.log(curso2);
let curso3 = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescritp',
    aula: 100,
    max_alunos: 200
};
console.log(curso3);
export {};
/**
 * O que significa “definir contratos de dados?
 * Quando falamos:
 * Interfaces e Types: definir contratos de dados
 * quer dizer:
 * “estabelecer como um objeto deve ser, independentemente de quem vai criá-lo ou onde ele será usado”.
 * Ou seja:
 * - forma
 * - tipos
 * - obrigações
 * - opcionalidade
 *
 * Não é “criar um objeto”, é definir as regras que ele deve seguir.
 *
 */ 

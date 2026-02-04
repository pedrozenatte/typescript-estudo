// FUNÇÕES EM INTERFACE e HERANÇA EM INTERFACE
let curso1 = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescritp',
    aula: 100,
    max_alunos: 200,
    iniciar_curso(t) {
        console.log(t);
    }
};
let curso2 = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescritp',
    aula: 100,
    max_alunos: 200,
    linguagem: 'TS',
    pre_requisito: 'nada'
};
class Pessoa {
    constructor(nome, idade, comida) {
        this.nome = nome;
        this.idade = idade;
        this.comida = comida;
    }
    get imprimir_nome() {
        return this.nome;
    }
    // Método obrigatório vindo da interface
    comer_comida() {
        return `Comendo ${this.comida}`;
    }
}
const pessoa1 = new Pessoa('Pedro', 23, 'maça');
console.log(pessoa1.comer_comida());
export {};

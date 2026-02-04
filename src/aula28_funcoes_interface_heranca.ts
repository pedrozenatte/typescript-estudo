// FUNÇÕES EM INTERFACE e HERANÇA EM INTERFACE

// Interface
interface curso {
    titulo: string;
    descricao: string;
    aula: number;
    max_alunos?: number; // Virou um parâmetro opcional

    iniciar_curso?(teste: string): void;  // Sem o "?" teriamos uma função obrigatória
}

let curso1: curso = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescritp',
    aula: 100,
    max_alunos: 200,    
    
    iniciar_curso(t: string): void { // Passamos uma função para a interface
        console.log(t);

    }
}

// Interface com Herança
// Também podemos aplicar herança, de modo que um tipo de dado é a base para outros tipos

interface cursoProg extends curso {
    linguagem: string;
    pre_requisito: string;
}

let curso2: cursoProg = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescritp',
    aula: 100,
    max_alunos: 200,    
    linguagem: 'TS',
    pre_requisito: 'nada'
}

// Essas interfaces podem se extender para classes também:
interface Comer {
    comida: string;

    comer_comida(): string;
}


class Pessoa implements Comer{ // Agora, obrigatoriamente, a classe Pessoa precisa possuir os mesmo atributos e métodos da interface Comer implementados
    nome: string; 
    idade: number;
    // Propriedade que obrigatoriamente precisa ter
    comida: string

    constructor(nome: string, idade: number, comida: string) {
        this.nome = nome;
        this.idade = idade;
        this.comida = comida;
    }

    public get imprimir_nome(): string {
        return this.nome
    }

    // Método obrigatório vindo da interface
    comer_comida(): string {
        return `Comendo ${this.comida}`
    }
}

const pessoa1 = new Pessoa('Pedro', 23, 'maça')
console.log(pessoa1.comer_comida())


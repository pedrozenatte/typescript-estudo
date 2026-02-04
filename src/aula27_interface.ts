// INTERFACE

// Vamos fazer um objeto

let curso1: {
    titulo: string;
    descricao: string;
    aula: number;
    max_alunos: number;
}

curso1 = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescript',
    aula: 100,
    max_alunos: 50
}

console.log(curso1)

// Se quisermos criar mais um objeto curso, por exemplo curso2, faremos:

let curso2: {
    titulo: string;
    descricao: string;
    aula: number;
    max_alunos: number;
}

curso2 = {
    titulo: 'Javascript',
    descricao: 'Curso de Javascript',
    aula: 200,
    max_alunos: 80
}

console.log(curso2)

// Percebe que tivemos um retrabalho muito grande, não seria mais fácil fazer igual em C com struct, em que criavamos um TIPO de dado, e depois so declarava aquele tipo? 
/**
 * Pois é, faremos isso com INTERFACE
 * 
 * Uma interface é um contrato que define quais propriedades e métodos uma classe ou objeto deve possuir, sem implementar o comportamento.
 * Ela garante que diferentes classes sigam a mesma estrutura, promovendo padronização e desacoplamento.
 */

// Vamos criar um novo tipo
interface curso {
    titulo: string;
    descricao: string;
    aula: number;
    max_alunos?: number; // Virou um parâmetro opcional
}

let curso3: curso = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescritp',
    aula: 100,
    max_alunos: 200
}

console.log(curso3)

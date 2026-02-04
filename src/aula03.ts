class Curso {
    canal: string;
    curso: string;

    constructor(canal: string, curso: string) {
        this.canal = canal;
        this.curso = curso;
    }
}

let curso1 = new Curso('CFBCursos', 'TypeScript');
console.log(curso1.canal);
console.log(curso1.canal);
console.log(curso1.curso);
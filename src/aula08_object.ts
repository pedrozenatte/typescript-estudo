// OBJECT 

// Um object pode receber propriedades ou funções, isto é, podem receber variáveis ou métodos.
// O objeto tipado do TypeScript é o equivalente conceitual mais próximo de um struct em C.

// ================
// Forma correta 1:
// ================
let dados1: {
    nome: string;
    idade: number;
    status: string;
} = {
    nome: 'Pedro',
    idade: 23,
    status: 'A'
};

// console.log(dados1.nome); 

// ================
// Forma correta 2: 
// ================
interface Dados {
    nome: string;
    idade: number;
    status: string;
}

let dados2: Dados = {
    nome: 'Pedro',
    idade: 23,
    status: 'A'
};

// console.log(dados2.nome); 

// ================
// Forma correta 3 - deixar o TS inferir
// ================
let dados = {
    nome: 'Pedro',
    idade: 23,
    status: 'A',

    ola: () => {console.log('oi')},
    info: (p: string) => {console.log(p)}
}

dados.nome = 'Pedro Zenatte'
console.log(typeof(dados));
console.log(dados.nome);
dados.info('Nome qualquer')
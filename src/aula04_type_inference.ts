// TIPAGEM DE TYPESCRIPT 

// Parte de tipagem do TS (TS é fortemente tipado, se eu coloco um tipo nessa variável, apenas valores daquele tipo entram na variável)
let nome = 'Pedro'; // é um str

let numero = 10;        // (tipo number) --> isso inclui int, float, bin, hex
numero = 10.5;           // Mas se não fosse número, daria errado

// E se quisermos declarar e atribuir depois?
let nome2;          // Mas o tipo vira "any" (que é qualquer coisa)
nome2 = 'Pedro'; 

// E para um tipo específico que voce quer declarar e depois atribuir
let nome3: string;
// nome3 = 4  // ERRO 

console.log(numero)
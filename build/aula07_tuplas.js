// TUPLAS
// JS não possui tuplas, mas TS sim
let coisas = [10, 20, 30, 'teste'];
// Nesse caso, não estamos especificando aonde queremos uma string e aonde eu queremos um número, ou seja, pode ser em qualquer posição
// O conceito de tupla é diferente, pois precisamos especificar os tipos de dados para cada posição. 
let coisas2 = ['corda', 10]; // Precisa seguir exatamente como foi declarado, pois se colocassemos ['corda', 10, 10] iríamos ter erro. 
console.log(coisas2);
console.log(coisas2[0]);
// Apesar de termos especificado da forma de coisas como string e number, podemos dar um push
coisas2.push('kit médico', 5);
console.log(coisas2);
// Mas não dá para acessar o coisas2[3]
// Também podemos colocar um readonly em coisas
let coisas3 = ['corda', 10];
export {};
// Agora o push não funciona e não tem como alterar posições

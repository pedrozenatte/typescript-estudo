// Array somente de leitura (readonly array)


// =========== Declarações de Arrays ===========
// let numeros = [20, 30, 40]      // Não definimos explicitamente o tipo, mas o compilador entende que é do tipo number
// let numeros: number[]        // Definimos o tipo para um vetor de numeros

// Outras formas de declarar arrays, agr até de mais de um tipo
// let numeros: Array<number|string>
// let numeros: (number | string)[] 

// LEMBRANDO QUE PODEMOS INICIALIZAR TAMBÉM
// =============================================

let numeros: number[] = [10, 20, 30];

numeros.push(50);       // Insere no final
numeros.unshift(27);    // Insere no início

numeros.pop();          // Retira o último elemento
numeros.shift;          // Retira o primeiro elemento

console.log(numeros)

// =============================================
// AS VEZES, VAMOS PRECISAR DE UM ARRAY ESPECÍFICO AONDE NÃO PODEMOS OPERAR COM ESSES VALORES

let numeros_ro: ReadonlyArray<number> = [100, 200, 300]
// Esse array descarta todos os métodos do array comum que podem alterar os elementos do array (como se fosse uma tupla em Python)


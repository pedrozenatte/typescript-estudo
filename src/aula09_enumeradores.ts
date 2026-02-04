// ENUMERADORES - ENUM

// Os enumeradores são um conjunto de dados que podemos utilizar e classificar por valores numerais ou textuais. 

enum dias {
    domingo = 0,
    segunda = 1,
    terça = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
};

// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])

const d = new Date();
// console.log(dias[d.getDay()])

enum cores {
    branco = '#fff',
    preto = '#000',
    vermelho = '#f00', 
    verde = '#0f0',
    azul = '#00f'
};

console.log(cores.branco); // Retorna o código do branco
console.log(cores['branco']); // Retorna o código do branco
// Não podemos utilizar um índice numérico, pois ele é um enum textual
// console.log(cores[0]) ERRO  
// console.log(cores['#fff']) ERRO  

// Também podemos fazer atribuição automática
enum tipoUsuario {
    USER,
    ADMIN,
    SUPER
};

console.log(tipoUsuario.ADMIN)  // Quando não especificamos o valor, ele atribui do como se fosse índice de vetores, começando em 0

let tp: tipoUsuario;    // Agora esse tp tem o tipo do tipoUsuario, ou seja, só aceita valores de 0, 1 e 2 (ou os valores que foram atribuidos para os itens do tipoUsuario)

// tp = 5 ERRO
tp = 1  // OK
tp = tipoUsuario.ADMIN
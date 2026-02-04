/**
 * TYPE ASSERTION e "TYPE CAST" (TypeScript)
 *
 * IMPORTANTE:
 * TypeScript NÃO faz type cast em runtime.
 * Ele apenas CONFIA na sua afirmação (assertion).
 */

// É afirmação de tipos, que é quando precisamos afirmar que um tipo desconhecido é de um tipo conhecido.

/* =========================
   TYPE ASSERTION
   =========================
   - Você diz ao TypeScript: "confia em mim, eu sei o tipo disso"
   - NÃO altera o valor em runtime
   - Só afeta a verificação de tipos
*/

// Exemplo básico
let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10; 

console.log(typeof(uvalor));
console.log(uvalor);

// Vamos tentar colocar:
// nvalor = uvalor;   // ERRO, porque não podemos fazer um associação direta de um tipo unknown para um tipo number

// Para isso, precisamos fazer uma afirmação de tipo 
// Sintaxe menos usada, mas existe (OBS: não funciona em JSX/React)
nvalor = <number>uvalor;

console.log(typeof(uvalor));
console.log(uvalor);

// OU: 

// Type assertion usando "as"
nvalor = uvalor as number

console.log(typeof(uvalor));
console.log(uvalor);


svalor = <string>uvalor  // Ele passa o valor, mas o tipo real vai ser número
console.log(typeof(svalor));
console.log(svalor);

svalor = '10'
// E se quisermos passar de svalor para nvalor:
// nvalor = <number>svalor   // ERRO, porque isso só funciona para unknown
// Como solução:
nvalor = <number><unknown>svalor;


/* =========================
   ATENÇÃO: ASSERTION NÃO CONVERTE
   =========================
*/

let numero: unknown = "10";

// Isso NÃO converte string para number
let n = numero as number;

// console.log(n + 1); // Pode causar bug em runtime

// PARA CONVERTER O VALOR: 
let convertido = Number(numero);
let conv_string = convertido.toString()

console.log(convertido + 1); 

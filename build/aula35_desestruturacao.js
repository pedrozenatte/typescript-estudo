// DESESTRUTURAÇÃO
/**
 * Desestruturação em TypeScript é uma sintaxe para extrair valores de arrays ou propriedades de objetos e colocá-los em variáveis, de forma mais curta, legível e segura (com tipos).
 */
let aa, bb, cc, dd;
let valores = [10, 20, 30, 40, 50];
// Sem a técnica de desestruturação
aa = valores[0];
bb = valores[1];
//... e assim vai;
/**============================
 * COM DESESTRUTURAÇÃO
 * ============================
 */
// Temos que desestruturar com o mesmo tipo, então se vamos desestruturar um Array, temos que usar o tipo de array
let valores2 = [100, 200, 300, 400, 500];
let [ee, ff, gg, hh] = valores2;
// OBS: A desestruturação precisa ocorrer no momento da declaração
console.log(ee, ff, gg, hh);
// Também podemos fazer de forma direta: 
let [a, b, c, d] = ['um', 'dois', 'três', 'quatro'];
/**============================
 * DESESTRUTURAÇÃO COM OBJETO
 * ============================
 */
const obj = {
    cor1: 'Verde',
    cor2: 'Amarelo',
    cor3: 'Azul',
    cor4: 'Branco'
};
// Como no objeto utilizamos '{}', então na desestruturação também precisamos utilizar "{}". Além disso, também precisamos ter os mesmos nomes das chaves do objeto.
let { cor1, cor2, cor3, cor4 } = obj;
console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
export {};

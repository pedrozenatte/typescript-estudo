// DESESTRUTURAÇÃO

/**
 * Desestruturação em TypeScript é uma sintaxe para extrair valores de arrays ou propriedades de objetos e colocá-los em variáveis, de forma mais curta, legível e segura (com tipos).
 */

let aa, bb, cc, dd;
let valores: number[] = [10, 20, 30, 40, 50];

// Sem a técnica de desestruturação
aa = valores[0];
bb = valores[1]; 
//... e assim vai;

/**============================
 * COM DESESTRUTURAÇÃO
 * ============================
 */
// Temos que desestruturar com o mesmo tipo, então se vamos desestruturar um Array, temos que usar o tipo de array

let valores2: number[] = [100, 200, 300, 400, 500];
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
}

// Como no objeto utilizamos '{}', então na desestruturação também precisamos utilizar "{}". Além disso, também precisamos ter os mesmos nomes das chaves do objeto.

let {cor1, cor2, cor3, cor4} = obj;

console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);

// A grande vantagem é que conseguimos separar as propriedades do objeto em variáveis individuais. 

/**============================
 * DESESTRUTURAÇÃO DE UM ELEMENTO
 * ============================
 */

// E se quisermos desestruturar um único elemento em várias variáveis?
// Assim daria erro, então precisamos colocar como se fosse parâmetros padrões
// let [nu1, nu2, nu3] = [10]       // ERRO, pois só o nu1 receberia o valor 10

let [nu1, nu2 = 0, nu3 = 0] = [10] 
// Poderíamos colocar até o próprio 'nu1 = 0' que ele ainda receberia o 10. Nesse caso, só passamos o valor 10 para uma variável individual. 

// Também podemos fazer o contrário
let [nu_1, nu_2, nu_3] = [10, 20, 30, 40, 50, 60, 70]; 
// Nesse caso, as variáveis recebem o que dá para receber, ou seja, nu_1 fica com o primeiro valor, nu_2 com o segundo e nu_3 com o terceiro, o resto fica como resto

// Também podemos atribuir o resto para um variável individual
let [num1, num2,...num3] = [10, 20, 30, 40, 50, 60, 70]; 
// Agora o num1 recebe o primeiro valor, o num2 o segundo valor e o num3 recebe uma lista com todo o resto dos valores.

/**============================
 * DESESTRUTURAÇÃO COM FUNÇÕES
 * ============================
 */

const fcores = () => {
    return ['Verde', 'Amarelo', 'Azul', 'Branco']
}

let [c1, c2, c3, c4] = fcores();
// As variáveis recebem o retorno da função 

let texto = 'Pedro Guilherme de Barros Zenatte'
let [...t] = texto.split(' ');
let [p1, p2, p3, p4] = texto.split(' ');

console.log(t);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
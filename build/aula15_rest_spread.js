// PARÂMETROS REST COM SPREAD
/**
 * REST (...): usado em parâmetros de função para juntar vários argumentos em um array.
 * SPREAD (...): usado na chamada, array ou objeto para espalhar um array/objeto em valores individuais.
 *
 * Regra: REST junta, SPREAD espalha.
 */
function fsoma(v1, v2) {
    return v1 + v2;
}
// Se quisermos adicionar mais um valor para ser somado, precisa acrescentar na função um terceiro parâmetro. Para evitar isso, podemos:
function fsoma_rest(...n) {
    let soma = 0;
    // for(let valor of n) {
    //     soma += valor;
    // }
    n.forEach((valor) => { soma += valor; });
    return soma;
}
console.log(fsoma_rest(10, 20, 30, 40)); // Posso colocar quantos valores quisermos
export {};
// Não precisamos de um número fixo de parâmetros

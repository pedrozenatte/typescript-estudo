// ENUMERADORES - ENUM
// Os enumeradores são um conjunto de dados que podemos utilizar e classificar por valores numerais ou textuais. 
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["ter\u00E7a"] = 2] = "ter\u00E7a";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
;
// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])
const d = new Date();
// console.log(dias[d.getDay()])
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
;
console.log(cores.branco); // Retorna o código do branco
console.log(cores['branco']); // Retorna o código do branco
// Não podemos utilizar um índice numérico, pois ele é um enum textual
// console.log(cores[0]) ERRO  
// console.log(cores['#fff']) ERRO  
// Também podemos fazer atribuição automática
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 0] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 1] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 2] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
;
console.log(tipoUsuario.ADMIN); // Quando não especificamos o valor, ele atribui do como se fosse índice de vetores, começando em 0
let tp; // Agora esse tp tem o tipo do tipoUsuario, ou seja, só aceita valores de 0, 1 e 2 (ou os valores que foram atribuidos para os itens do tipoUsuario)
// tp = 5 ERRO
tp = 1; // OK
tp = tipoUsuario.ADMIN;
export {};

// NULL, UNDEFINED E UNKNOWN
/* =========================
   NULL
   =========================
   - Valor intencionalmente vazio
   - Você DEFINE que não há valor
*/
let usuario = null;
// depois pode receber valor
usuario = "Pedro";
// usuario = 10;    // Erro de tipo
/* =========================
   UNDEFINED
   =========================
   - Valor não definido
   - O JavaScript chegou ali e não encontrou nada
*/
let idade;
console.log(idade); // undefined
function retornaNada() {
    // não retorna nada
}
let resultado = retornaNada(); // resultado é undefined
/* =========================
   DIFERENÇA PRÁTICA
   =========================
   null  -> ausência intencional
   undefined -> ausência implícita
*/
let a = null;
let b;
console.log(a); // null
console.log(b); // undefined
// ---------------------------------------------------
/* =========================
   UNKNOWN (TypeScript)
   =========================
   - É um TIPO, não um valor
   - Existe um valor, mas o tipo é desconhecido
   - Mais seguro que any
*/
let dado;
dado = 10;
dado = "texto";
dado = true;
// OBS: Unknown só pode ser atribuído em tipos unknown ou any
// ERRO: não pode usar sem verificar o tipo
// dado.toUpperCase(); ❌
// Correto: checar antes
if (typeof dado === "string") {
    console.log(dado.toUpperCase()); // ✅
}
if (typeof dado === "number") {
    console.log(dado + 10); // ✅
}
export {};
/* =========================
   COMPARAÇÃO FINAL
   =========================

   null       -> valor vazio intencional
   undefined  -> valor ausente
   unknown    -> tipo ainda não conhecido
*/
/* =========================
   REGRA PRÁTICA
   =========================
   - Use null quando VOCÊ decide que não há valor
   - Aceite undefined como estado natural do JS
   - Use unknown para dados externos (API, input, JSON)
*/

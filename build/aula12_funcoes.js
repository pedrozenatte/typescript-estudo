// FUNÇÕES
/* =========================
   FUNÇÃO BÁSICA
   =========================
   - Tipamos os parâmetros
   - Tipamos o retorno
*/
function soma(a, b) {
    return a + b;
}
/* =========================
   TIPO DE RETORNO
   =========================
*/
function mensagem() {
    return "Olá";
}
// function erro(): string {
//   return 10; ❌ erro
// }
/* =========================
   FUNÇÃO VOID
   =========================
   - Não retorna nada
*/
function logMensagem(msg) {
    console.log(msg);
}
logMensagem("Teste");
export {};

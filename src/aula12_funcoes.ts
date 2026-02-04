// FUNÇÕES

/* =========================
   FUNÇÃO BÁSICA
   =========================
   - Tipamos os parâmetros
   - Tipamos o retorno
*/

function soma(a: number, b: number): number {
  return a + b;
}




/* =========================
   TIPO DE RETORNO
   =========================
*/

function mensagem(): string {
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

function logMensagem(msg: string): void {
  console.log(msg);
}

logMensagem("Teste");





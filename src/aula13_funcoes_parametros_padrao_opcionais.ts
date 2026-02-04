// FUNÇÕES: PARÂMETROS PADRÕES E OPCIONAIS


/* =========================
   VALOR PADRÃO (também é opcional)
   =========================
*/

function potencia(base: number, exp: number = 2): number {
  return base ** exp;
}

potencia(3);    // 9
potencia(3, 3); // 27




/* =========================
   PARÂMETROS OPCIONAIS
   =========================
*/

function saudacao(nome?: string): string {
  if (nome) {
    return `Olá, ${nome}`;  // '`' é uma CRASE
  }
  return "Olá";
}

saudacao();
saudacao("Pedro");

function novoUser(user: string, pass: string, nome?: string): void {
    
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`);  // Se não passar, o valor vai ser undefined

}

novoUser('Admin', '123');




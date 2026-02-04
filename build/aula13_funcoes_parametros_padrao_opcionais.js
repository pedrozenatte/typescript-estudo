// FUNÇÕES: PARÂMETROS PADRÕES E OPCIONAIS
/* =========================
   VALOR PADRÃO (também é opcional)
   =========================
*/
function potencia(base, exp = 2) {
    return base ** exp;
}
potencia(3); // 9
potencia(3, 3); // 27
/* =========================
   PARÂMETROS OPCIONAIS
   =========================
*/
function saudacao(nome) {
    if (nome) {
        return `Olá, ${nome}`; // '`' é uma CRASE
    }
    return "Olá";
}
saudacao();
saudacao("Pedro");
function novoUser(user, pass, nome) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`); // Se não passar, o valor vai ser undefined
}
novoUser('Admin', '123');
export {};

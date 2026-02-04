// ARROW FUNCTION OU FUÇÃO DE SETA e FUNÇÃO ANÔNIMA

/**
 * Mas qual é a diferença das funções normais?
 * 
 * A principal diferença vem de que o compilador, ao encontrar uma arrow function, não eleva ela para cima do código, de modo que conseguimos utilizar ela antes dela ser declarada (as funções normais podem ser utilizadas antes de terem sido declaradas)
 * Aqui, obrigatóriamente as chamadas das funções precisam vir depois de declará-las
 * 
 * Além disso, a declaração de uma função anônima sempre tem que estar associada a uma variável ou a uma constante.
 */


/* =========================
   ARROW FUNCTION
   =========================
*/

const multiplicar = (a: number, b: number): number => {
    return a * b;
};

const dividir = (a: number, b: number): number => a / b;


const fsoma2 = (vetor: number[]): number => {
    let soma: number = 0

    // for(let valor of vetor) {
    //     soma += valor
    // }

    vetor.forEach((elementos) => {soma += elementos})

    return soma
}

let numeros: number[] = [10, 20, 30, 40, 50]

console.log(fsoma2(numeros))







/* =========================
   FUNÇÃO COMO TIPO
   =========================
*/

type Operacao = (x: number, y: number) => number;

const subtrair: Operacao = (a, b) => a - b;




/* =========================
   FUNÇÃO COM UNKNOWN
   =========================
*/

function processar(valor: unknown): void {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase());
  } else if (typeof valor === "number") {
    console.log(valor * 2);
  } else {
    console.log("Tipo não suportado");
  }
}

processar("teste");
processar(10);
processar(true);




/* =========================
   FUNÇÃO NEVER
   =========================
   - Nunca retorna
   - Lança erro ou loop infinito
*/

function erroFatal(msg: string): never {
  throw new Error(msg);
}

// erroFatal("Algo deu errado");




/* =========================
   FUNÇÃO ASSÍNCRONA
   =========================
*/

async function buscarUsuario(id: number): Promise<string> {
  return `Usuário ${id}`;
}

buscarUsuario(1).then(console.log);            



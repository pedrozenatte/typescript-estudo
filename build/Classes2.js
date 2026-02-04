// Vamos supor que não queremos colocar o "export" em todas as classes
const coisas = ['Corda', 'Pilha', 'Lampada']; // Estamos exportando essa constante (na verdade tornando ela visível para outros arquivos .ts)
// Vamos tornar a classe Pessoas como um elemento padrão 
class Pessoas {
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
// A forma como exportamos vai implicar na forma que importamos, caso for o padrão, não precisaremos utilizar { nome da classe }
export default Pessoas;
export { coisas };

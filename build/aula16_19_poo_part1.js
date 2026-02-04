// POO
/**
 * =================================
 * CLASSES
 * =================================
 */
class Computador {
    // Parâmetros da classe Computador
    nome;
    ram;
    freq_cpu;
    ligado;
    // Construtor (função, que chamaremos de método, porque é uma função de uma classe)
    constructor(nome, ram, freq_cpu) {
        this.nome = nome;
        this.ram = ram;
        this.freq_cpu = freq_cpu;
        this.ligado = false;
    }
    // Métodos
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Memória RAM: ${this.ram}`);
        console.log(`Frequência do processador: ${this.freq_cpu}`);
        console.log(`Status: ${this.ligado ? 'Sim' : 'Não'}`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
// Vamos criar um objeto da classe, isto é, instanciando a classe
const comp1 = new Computador('pc1', 4, 1.1);
const comp2 = new Computador('pc2', 4, 2.2);
const comp3 = new Computador('pc3', 32, 4.8); // Estamos com 3 instâncias de Computador
// Vamos utilizar um dos métodos
comp1.info();
comp1.ligar();
comp1.info();
//-----------------------------------------------------------------------------------------
// As vezes é interessante proteger os nossos atributos ou métodos
/**
 * =================================
 * MODIFICADORES DE ACESSO
 * =================================
 */
// A gente consegue acessar 'coisas' fora da classe que talvez não deveriam ser acessadas, por exemplo
comp1.ram = -100; // Fora da classe, consegui atribuir um valor que nem faz sentido para a memória
/**
 * public    -> acesso de qualquer lugar (se não colocar nada, como na classe Computador, é considerado public)
 * protected -> acesso da classe e das subclasses
 * private   -> acesso somente dentro da própria classe
 */
// Isso é válido para parâmetros e métodos 
class Computadores {
    // Parâmetros da classe Computador
    nome;
    ram;
    freq_cpu;
    ligado;
    // Construtor (função, que chamaremos de método, porque é uma função de uma classe)
    constructor(nome, ram, freq_cpu) {
        this.nome = nome;
        this.ram = ram;
        this.freq_cpu = freq_cpu;
        this.ligado = false;
    }
    // Métodos
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Memória RAM: ${this.ram}`);
        console.log(`Frequência do processador: ${this.freq_cpu}`);
        console.log(`Status: ${this.ligado ? 'Sim' : 'Não'}`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qntd) {
        if (qntd > 0) {
            this.ram = qntd;
        }
        else {
            console.log('Valor inválido');
        }
    }
}
// Instâncias
const compdr1 = new Computadores('pc1', 4, 1.1);
const compdr2 = new Computadores('pc2', 4, 2.2);
const compdr3 = new Computadores('pc3', 32, 4.8);
compdr1.upRam(-1);
export {};

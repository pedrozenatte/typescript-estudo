// HERANÇA
/**
 * Herança é um mecanismo da POO em que uma classe filha reutiliza atributos e métodos de uma classe pai (super classe).
 * A classe filha pode acrescentar novos comportamentos ou especializar os existentes.
 *
 * Normalmente, utiliza-se um .ts específico para cada classe, então para isso, faça-se:
 *
 * Pessoa.js
 * export class Pessoa {
 * constructor(public nome: string) {}
 * }
 *
 * Aluno.js
 * import { Pessoa } from "./Pessoa";
 * export class Aluno extends Pessoa {
 *    constructor(nome: string, public ra: number) {
 *          super(nome);
 *    }
 * }
 *
 *
 * main.ts
 * import { Aluno } from "./Aluno";
 * const a = new Aluno("Pedro", 123);
 *
 *
 * OBS: Precisa ter {nome da classe} se o export for simples, mas se for um:
 * export default class.... {}
 * Nesse caso, não ao importar, não precisamos de {}
 *
 * A Ideia de não usar o 'default' é que podemos ter várias classes dentro de um mesmo .ts e a partir disso
 *
 * ATENÇÃO:
 * Use export para tornar a classe visível
 * Use import para trazer a classe
 */
// ----------------------------------------------------------------------------------------
class ContaBancaria {
    constructor(titular) {
        this.numero = this.gerar_numero();
        this.titular = titular;
        this.saldo = 0;
    }
    // Vamos gerar numero aleatorio para a conta
    gerar_numero() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    // Ver as informações gerais da conta
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    }
    // Ver o saldo da conta
    ver_saldo() {
        return this.saldo;
    }
    // Depositar um valor na conta
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
        }
        else {
            console.log('Saldo insuficiente...');
        }
    }
}
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
class Teste extends ContaBancaria {
}
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// Suponhamos que queiramos criar mais duas classes, de modo que uma seja uma conta para PJ e uma conta para PF.
class ContaPF extends ContaBancaria {
    // Quando vamos fazer um construtor de uma subclasse, precisamos passar os mesmos parâmetros da super classe.
    constructor(titular, cpf) {
        // Mas também temos que passar os valores dos parâmetros que a super classe tem, para a super classe
        super(titular);
        // OBS: Passando os valores para a super classe (OBRIGATORIAMENTE ESSE super() precisa vir antes de TUDO no construtor, e com '()')
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}`);
    }
    // Vamos criar um método de info() para essa classe também, por mais que já exista um método herdado chamado info()
    info() {
        super.info();
        console.log(`CPF: ${this.cpf}`);
    }
    // Agora um método para sacar específico para PF 
    sacar(valor) {
        if (valor > 2500) {
            console.log('Valor acima do limite de saque. MAX R$2500,00');
        }
        else {
            super.sacar(valor);
        }
    }
}
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
class ContaPJ extends ContaBancaria {
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${titular}`);
    }
    info() {
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
    }
    sacar(valor) {
        if (valor > 25000) {
            console.log('Valor acima do limite de saque. MAX R$25000,00');
        }
        else {
            super.sacar(valor);
        }
    }
}
// ----------------------------------------------------------------------------------------
// Podemos instanciar uma conta de Teste sem ter nada na classe de Teste, pois ela herda tudo da super classe
const conta = new Teste('Pedro');
const conta1 = new ContaPF('Pedro Z', 46407940885);
const conta2 = new ContaPJ('Empresa', 1248874544);
console.log('\n');
conta1.info();
console.log('\n');
conta2.info();
conta1.depositar(100);
console.log(conta1.ver_saldo());
conta1.sacar(5000);
conta1.sacar(2500);
console.log(conta1.ver_saldo());
export {};

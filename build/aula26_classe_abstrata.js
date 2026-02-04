// CLASSES ABSTRATAS 
/**
 * Classes abstratas são usadas quando queremos definir um modelo base, mas não permitir a criação de objetos dessa classe.
 * Elas servem como superclasses, fornecendo atributos e métodos comuns, além de métodos abstratos que as subclasses são obrigadas a implementar.
 * Assim, garantem uma estrutura padrão para as classes filhas sem permitir instância direta da classe genérica.
 *
 */
class Conta {
    constructor(titular) {
        this.numero = this.gerar_numero();
        this.titular = titular;
        this.saldo = 0;
    }
    // Se tentarmos utilizar o numero fora do construtor, não será possível
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
    get ver_saldo() {
        return this.saldo;
    }
    // Setar o saldo
    set saldo_conta(saldo) {
        this.saldo = saldo;
    }
    // Depositar um valor na conta
    depositar(valor) {
        if (valor > 0) {
            this.saldo_conta += valor;
        }
    }
    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo_conta -= valor;
        }
        else {
            console.log('Saldo insuficiente...');
        }
    }
}
export {};
// Agora não conseguimos mais instanciar uma classe Conta
// const conta = new Conta;
//"Não é possível criar uma instância de uma classe abstrata."

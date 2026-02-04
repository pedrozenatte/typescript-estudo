// CLASSES ABSTRATAS 

/**
 * Classes abstratas são usadas quando queremos definir um modelo base, mas não permitir a criação de objetos dessa classe.
 * Elas servem como superclasses, fornecendo atributos e métodos comuns, além de métodos abstratos que as subclasses são obrigadas a implementar.
 * Assim, garantem uma estrutura padrão para as classes filhas sem permitir instância direta da classe genérica.
 * 
 */

abstract class Conta {
    // Vamos supor que queremos que o número da conta, além de privado, nunca mais seja alterado após ser criado no construtor, então colocaremos apenas para leitura
    private readonly numero: number;
    protected titular: string;
    private saldo: number;

    constructor(titular: string) {
        this.numero = this.gerar_numero()
        this.titular = titular;
        this.saldo = 0;
    }
    // Se tentarmos utilizar o numero fora do construtor, não será possível

    // Vamos gerar numero aleatorio para a conta
    private gerar_numero(): number {
        return Math.floor(Math.random()*100000) + 1
    }

    // Ver as informações gerais da conta
    protected info(): void {
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero: ${this.numero}`)
    }

    // Ver o saldo da conta
    public get ver_saldo(): number {
        return this.saldo
    }

    // Setar o saldo
    private set saldo_conta(saldo: number) {
        this.saldo = saldo
    }

    // Depositar um valor na conta
    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo_conta += valor
        }
    }

    protected sacar(valor: number): void {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo_conta -= valor
        }

        else {
            console.log('Saldo insuficiente...')
        }
    }
}


// Agora não conseguimos mais instanciar uma classe Conta

// const conta = new Conta;
//"Não é possível criar uma instância de uma classe abstrata."

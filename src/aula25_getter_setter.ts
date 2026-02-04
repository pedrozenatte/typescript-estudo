// MÉTODOS GETTER() E SETTER()

/**
 * Getter e setter são métodos de acesso controlado a atributos de uma classe.
 * O getter permite ler o valor de um atributo sem acessá-lo diretamente, e o setter permite modificar o valor com regras e validações.
 * Eles reforçam o encapsulamento, evitando acesso direto a dados sensíveis.
 * 
 * Quando USAR getter/setter?
 * - Use quando você precisa:
 * - validar valores
 * - impedir estados inválidos
 * - executar lógica ao ler ou alterar
 * - esconder a forma interna do dado
 * 
 * Qual é a grande diferença?
 * A grande diferença é que os getter e setter são vistos como propriedades e não como métodos, ou seja, na hora de chamar o "método", não precisa mais dos '()', apenas um:
 * 'instancia.metodo' ao invés de 'instancia.metodo()'
 * 
 * Para ser um método do tipo getter, basta usar 'get' antes do nome do método
 * public/private/protected get nome_da_função(): tipo_retornado {}
 * 
 * Para ser um método do tipo setter, basta usar 'set' antes do nome do método
 * public/private/protected set nome_da_função() {}
 * 
 * OBS: O 'setter' não pode ter tipo retornado e o 'getter' precisa retornar algo.
 */

// ----------------------------------------------------------------------------------------
class ContaBancaria {
    protected numero: number;
    protected titular: string;
    private saldo: number;

    constructor(titular: string) {
        this.numero = this.gerar_numero()
        this.titular = titular;
        this.saldo = 0;
    }

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
// ----------------------------------------------------------------------------------------

class ContaPF extends ContaBancaria {
    cpf: number;

    constructor(titular: string, cpf: number) {
        super(titular); 

        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}`)
    }

    public info(): void {
        super.info()
        console.log(`CPF: ${this.cpf}`)
    }

    public sacar(valor: number): void {
        if (valor > 2500) {
            console.log('Valor acima do limite de saque. MAX R$2500,00')
        }

        else {
            super.sacar(valor)
        }
    }
}
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
class ContaPJ extends ContaBancaria {
    cnpj: number;

    constructor(titular: string, cnpj: number) {
        super(titular);

        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${titular}`)
    }

    public info(): void {
        super.info()
        console.log(`CNPJ: ${this.cnpj}`)
    }

    public sacar(valor: number): void {
        if (valor > 25000) {
            console.log('Valor acima do limite de saque. MAX R$25000,00')
        }

        else {
            super.sacar(valor)
        }

    }
}
// ----------------------------------------------------------------------------------------

const conta1 = new ContaPF('Pedro', 46407940885);

conta1.depositar(10000);

console.log(conta1.ver_saldo)

// conta1.saldo_conta = 250

// console.log(conta1.ver_saldo)

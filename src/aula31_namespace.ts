// NAMESPACE 
/**
 * Um namespace é uma forma de agrupar códigos relacionados (classes, funções, variáveis) dentro de um mesmo escopo, evitando conflitos de nomes.
 * Pense como um “pacote lógico”, tudo fica dentro de uma mesma “caixa”.
 * 
 */

// Exemplo grande de uso de classes e namespace

namespace Veiculos {
    export enum Cores {
        branco = '#fff',
        preto = '#000',
        vermelho = '#f00', 
        verde = '#0f0',
        azul = '#00f'
    }

    abstract class Carro { // Para utilizar qualquer coisa que esteja dentro de um namespace fora do namespace, precisa utilizar "export"
        private nome: string;
        private motor: Motores.Motor;
        private cor: Cores;

        constructor(nome: string, motor: Motores.Motor, cor: Cores) {
            this.nome = nome; 
            this.motor = motor
            this.cor = cor;
        }

        public ligar() {
            this.motor.liga = true;
        }

        public desligar() {
            this.motor.liga = false;
        }

        public get minha_cor(): Cores {
            return this.cor;
        }

        public get nome_carro(): string {
            return this.nome;
        }

        public get estou_ligado() {
            return (this.motor.liga?'Sim':'Não');
        }

        public get minha_pot(): number {
            return this.motor.pot;
        }
    }

    export class CarroEsportivo extends Carro {
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(500, 8, new Motores.Turbo(200)), cor)
        }
    }

    export class CarroPopular extends Carro {
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(90, 3), cor)
        }
    }
}

namespace Motores {
    export class Turbo { // Essa classe só é utilizada dentro do namespace
        private potencia: number;

        constructor(potencia: number) {
            this.potencia = potencia;
        }

        public get pot(): number {
            return this.potencia;
        }
    }

    export class Motor {
        private potencia: number;
        private ligado: boolean;
        private cilindros: number;

        constructor(potencia: number, cilindros: number, turbo?: Turbo) {
            this.potencia = potencia + (turbo? turbo.pot:0); // Se tiver turbo, retorna o a potencia do turbo, senão retorna 0;
            this.cilindros = cilindros;
            this.ligado = false; 
        }

        public set liga(ligar: boolean) {
            this.ligado = ligar;
        }

        public get liga(): boolean {
            return this.ligado; 
        }

        public get pot(): number {
            return this.potencia; 
        }
    }
}

const carro1 = new Veiculos.CarroPopular('HB20S', Veiculos.Cores.azul)
const carro2 = new Veiculos.CarroEsportivo('Dodge Challenger', Veiculos.Cores.preto)

carro1.ligar();
console.log(carro1.nome_carro);
console.log(carro1.estou_ligado); 
console.log(carro1.minha_cor);
console.log(carro1.minha_pot);
carro1.desligar();
console.log(carro1.estou_ligado);

console.log('\n');

carro2.ligar();
console.log(carro2.nome_carro);
console.log(carro2.estou_ligado); 
console.log(carro2.minha_cor);
console.log(carro2.minha_pot);
carro2.desligar();
console.log(carro2.estou_ligado);
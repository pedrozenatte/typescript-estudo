// NAMESPACE 
/**
 * Um namespace é uma forma de agrupar códigos relacionados (classes, funções, variáveis) dentro de um mesmo escopo, evitando conflitos de nomes.
 * Pense como um “pacote lógico”, tudo fica dentro de uma mesma “caixa”.
 * 
 */

namespace Veiculos {
    export abstract class Carro { // Para utilizar qualquer coisa que esteja dentro de um namespace fora do namespace, precisa utilizar "export"
        nome: string
        motor: Motores.Motor

        constructor(nome: string) {
            this.nome = nome; 
            this.motor = new Motores.Motor(100, 3)
        }
    }
}

namespace Motores {
    class Turbo { // Essa classe só é utilizada dentro do namespace
        private potencia: number;

        constructor(potencia: number) {
            this.potencia = potencia;
        }

        public get pot(): number {
            return this.pot
        }
    }

    export class Motor {
        public potencia: number;
        private ligado: boolean
        private cilindros: number

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

// const carro1 = new Veiculos.Carro('HB20S')
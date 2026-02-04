// NAMESPACE 
/**
 * Um namespace é uma forma de agrupar códigos relacionados (classes, funções, variáveis) dentro de um mesmo escopo, evitando conflitos de nomes.
 * Pense como um “pacote lógico”, tudo fica dentro de uma mesma “caixa”.
 *
 */
// Exemplo grande de uso de classes e namespace
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores["branco"] = "#fff";
        Cores["preto"] = "#000";
        Cores["vermelho"] = "#f00";
        Cores["verde"] = "#0f0";
        Cores["azul"] = "#00f";
    })(Cores = Veiculos.Cores || (Veiculos.Cores = {}));
    class Carro {
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = cor;
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minha_cor() {
            return this.cor;
        }
        get nome_carro() {
            return this.nome;
        }
        get estou_ligado() {
            return (this.motor.liga ? 'Sim' : 'Não');
        }
        get minha_pot() {
            return this.motor.pot;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(500, 8, new Motores.Turbo(200)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(90, 3), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        constructor(potencia) {
            this.potencia = potencia;
        }
        get pot() {
            return this.potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia + (turbo ? turbo.pot : 0); // Se tiver turbo, retorna o a potencia do turbo, senão retorna 0;
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set liga(ligar) {
            this.ligado = ligar;
        }
        get liga() {
            return this.ligado;
        }
        get pot() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroPopular('HB20S', Veiculos.Cores.azul);
const carro2 = new Veiculos.CarroEsportivo('Dodge Challenger', Veiculos.Cores.preto);
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
export {};

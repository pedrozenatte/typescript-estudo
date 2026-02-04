// DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Decorators em TypeScript são uma forma de anexar comportamento extra a classes e a partes delas (métodos, propriedades, parâmetros), sem alterar diretamente o código principal.
 * Basicamente, um decorator é uma função que “observa”, “modifica” ou “anota” algo no momento em que a classe é definida, não quando o objeto é criado.
 *
 * É uma declaração sempre iniciada com @
 * @Nome
 * O decorator é uma declaração/notação que pode ser anexada em uma classe, propriedade, método, parâmetro ou acesso.
 * O Decorator vai trabalhar em cima dessas partes para que possamos acrescentar "coisas" novas.
 */
// Class decorator --> O que tem para receber de um decorator de classe é o construtor
// Property decorator 
// Method decorator
// Parameter deecorator
// Acessor decorator 
/**===============
 * CLASS DECORATOR
 * ===============
 *
 * Trabalharemos em cima de uma classe, e o decorator, por default, recebe o construtor da classe
 */
// Portanto o decorator é uma função como qualquer outra função, porém tem a diferença de que ela recebe alguns parâmetros por default baseado em qual tipo de decorator estamos trabalhando, e retorna alguma coisa.
// Como nosso decorator é de classe, ele recebe um parâmetro de target (esse target é o constructor da classe)
function nossoDecorator(target) {
    console.log(target); // Nosso construtor
}
// Vamos declarar um decorator, o qual vai estar SEMPRE em cima da classe/método/parâmetro... etc que será "observado". O decorator decora a declaração imediatamente abaixo dele.
// Mas só isso não basta, então precisa criar uma função com o nome do decorator
let exemplo = class exemplo {
};
exemplo = __decorate([
    nossoDecorator
], exemplo);
// Também podemos passar parâmetros para o nosso decorator
// Vamos usar um padrão que se chama "Factory" --> (uma fábrica) é uma função que vai retornar a criação do nosso decorator 
function NossoDecorator(prefix) {
    // Vai retornar o nosso decorator
    return (target) => {
        console.log(`${prefix} - ${target}`);
    };
}
let Exemplo = class Exemplo {
};
Exemplo = __decorate([
    NossoDecorator('qualquer_coisa')
], Exemplo);
/**
 * EXEMPLO MAIS COMPLEXO
 */
// Vamos fazer um decorator para anotar a versão da minha API (classe)
function setar_versao_API(versao_API) {
    return (construtor) => {
        return class extends construtor {
            constructor() {
                super(...arguments);
                this.versao = versao_API;
            }
        };
    };
}
// Criamos uma propriedade para a nossa classe de uma forma mais simplificada
let API = class API {
};
API = __decorate([
    setar_versao_API('1.0.0')
], API);
console.log(new API());
/**==================
 * PROPERTY DECORATOR
 * ==================
 *
 * Vamos trabalhar em cima de uma propriedade, e o decorator, por default, recebe duas propriedades:
 * 1° - target, que é o prototype da nossa classe
 * 2° - key, que é o nome da propriedade que estamos trabalhando
 */
function tamanhoMin(tamanho) {
    return (target, key) => {
        let val;
        const getter = () => { return val; };
        const setter = (valor) => {
            if (valor.length < tamanho) {
                console.log(`Título precisa de pelo menos ${tamanho} caracteres`);
            }
            else {
                val = valor;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Filme {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
    }
}
__decorate([
    tamanhoMin(5)
], Filme.prototype, "titulo", void 0);
const f1 = new Filme('abcde', 'bom filme');
console.log(f1.titulo);
/**==================
 * METHOD DECORATOR
 * ==================
 *
 * É um decorator que passamos acima de um método, e ele roda apenas quando chamamos o método. Nesse caso, por defaul, o decorator recebe três parâmetros.
 * 1° - target, que é o prototype da nossa classe
 * 2° - key, que é o nome do método que estamos trabalhando
 * 3° - descriptor, que é do tipo: PropertyDescriptor, que basicamente descreve o método com suas propriedades.
 */
function delay(ms) {
    return (target, key, descriptor) => {
        // console.log(target);
        // console.log(key);
        // console.log(descriptor);
        const metodo_original = descriptor.value;
        descriptor.value = function (...argumentos) {
            console.log(`Esperando ${ms}`);
            setTimeout(() => {
                metodo_original.apply(this, argumentos);
            }, ms);
            return descriptor;
        };
    };
}
class Comunicar {
    constructor(fala) {
        this.fala = fala;
    }
    // Vamos fazer um decorator que espera um tempo e, então, roda o método. 
    falar() {
        console.log(`${this.fala}`);
    }
}
__decorate([
    delay(1000)
], Comunicar.prototype, "falar", null);
const pessoa1 = new Comunicar('Estamos testando isso...');
pessoa1.falar();
export {};

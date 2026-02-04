// STATIC

/**
 * A palavra static serve para criar membros estáticos, como propriedades ou métodos. Mas o que são essas propriedades ou métodos estáticos? 
 * São membros que estão associados a classe e não a instância. Isto é, temos membros que estão associados a instância, então quando instanciamos um objeto, aquele membro é da instância, e se instanciamos 3 objetos da classe, cada objeto vai ter seus próprios membros. 
 * OU, podemos ter um membro que está associado a classe, então independente do número de objetos que instanciamos, o membro estático vai ser comum para todas as classes, isto é, como se fosse um elemento de memória compartilhada, pois se mudarmos esse membro estático por um objeto, como o membro pertence à classe e não ao objeto em si, essa mudança é transmitida para TODOS os objetos daquela classe. 
 */

import Globais from "./Globais.js";

console.log(Globais.teste);

Globais.teste = 10; 

console.log(Globais.teste);

// Perceba que, além de não precisarmos instanciar Globais (const gl = new Globais()), também acessamos a propriedade 'teste' pela classe, e não pelo objeto. 

// Qualquer arquivo que utilizar Globais.teste verá o valor 10, além de também poder atualizar o valor. 
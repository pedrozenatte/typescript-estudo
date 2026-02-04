// UNIÃO DE TIPOS

let cursos: string[] = ['Javascript', 'Typescript', 'C++'];

cursos.push('Arduino');

console.log(cursos);

// Union Types --> Podemos colocar tipos diferentes na mesma variável
let v_teste: string | number;
v_teste = 'Pedro'
v_teste = 23;

let qualquer_valor: any[]         // Any representa qualquer valor

let valores = [10,  20, 30, 'Dez', true];         // nesse caso, é do tipo str, number ou booleano
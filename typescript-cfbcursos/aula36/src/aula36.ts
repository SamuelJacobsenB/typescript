// let [num1 = 0, num2 = 0, num3 = 0]: number[] = <number[]>[10];
// console.log(num1, num2, num3);

let [num1 = 0, num2 = 0, ...num3]: number[] = <number[]>[10, 20, 30, 40, 50, 60];
console.log(num1, num2, num3);


const cores = ()=>{
    return ['Verde','Amarelo','Azul'];
};
let [c1, c2, c3]: string[] = cores();


let texto: string = 'Curso de TS';
let [...t]: string[] = texto.split(' ');
console.log(t);
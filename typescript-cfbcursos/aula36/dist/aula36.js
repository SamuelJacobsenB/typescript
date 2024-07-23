"use strict";
let [num1 = 0, num2 = 0, ...num3] = [10, 20, 30, 40, 50, 60];
console.log(num1, num2, num3);
const cores = () => {
    return ['Verde', 'Amarelo', 'Azul'];
};
let [c1, c2, c3] = cores();
let texto = 'Curso de TS';
let [...t] = texto.split(' ');
console.log(t);

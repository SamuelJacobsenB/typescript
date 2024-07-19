"use strict";
const test = (txt) => {
    console.log(txt);
};
const soma = (n) => {
    let res = 0;
    n.map((el) => {
        res += el;
    });
    return res;
};
test('TypeScript');
test();
let numbers = [10, 20, 25, 45];
console.log(soma(numbers));

"use strict";
function teste(v) {
    return v;
}
;
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    ;
}
;
const ct1 = new C_teste(10);
const ct2 = new C_teste('Olá GENERIC');
console.log(ct1.valor);
console.log(ct2.valor);

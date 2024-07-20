"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
    ;
}
;
class ContaPF extends Conta {
}
;
class ContaPJ extends Conta {
}
;
const c1 = new ContaPF(123456, 'Samuel');
const c2 = new ContaPJ(654321, 'Maria');

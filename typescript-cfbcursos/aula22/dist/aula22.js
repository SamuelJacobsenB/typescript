"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    ;
    gerarNumeroConta() {
        let gerarNumero = (Math.floor(Math.random() * 100000) + 1).toString();
        while (gerarNumero.length < 6) {
            gerarNumero = gerarNumero + '0';
        }
        ;
        const numero = Number(gerarNumero);
        return numero;
    }
    ;
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log('------------------------');
    }
    ;
}
;
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    ;
}
;
console.log('ola');
const c1 = new ContaPF(101918, 'Samuel');
const c2 = new ContaPJ(909876, 'Empresa cursos');
c1.info();
c2.info();

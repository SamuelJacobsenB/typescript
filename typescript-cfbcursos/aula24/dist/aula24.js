"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
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
    }
    ;
    saldo() {
        return this.saldoConta;
    }
    ;
    deposito(valor) {
        if (valor <= 0) {
            console.log('Valor inválido');
            return;
        }
        ;
        this.saldoConta += valor;
    }
    ;
    saque(valor) {
        if (valor <= 0) {
            console.log('Valor inválido');
            return;
        }
        ;
        if (this.saldoConta >= valor) {
            this.saldoConta -= valor;
        }
        else {
            console.log('Saldo insuficiente');
        }
        ;
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
    info() {
        console.log(`Tipo...: PF`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log('------------------------');
    }
    ;
    deposito(valor) {
        if (valor > 1000) {
            console.log('Valor ultrapassa o limite de 1.000 reais de uma conta PF');
        }
        else {
            super.deposito(valor);
        }
        ;
    }
    ;
    saque(valor) {
        if (valor > 1000) {
            console.log('Valor ultrapassa o limite de 1.000 reais de uma conta PF');
        }
        else {
            super.saque(valor);
        }
        ;
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
    info() {
        console.log(`Tipo...: PJ`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log('------------------------');
    }
    ;
    deposito(valor) {
        if (valor > 10000) {
            console.log('Valor ultrapassa o limite de 10.000 reais de uma conta PJ');
        }
        else {
            super.deposito(valor);
        }
        ;
    }
    ;
    saque(valor) {
        if (valor > 10000) {
            console.log('Valor ultrapassa o limite de 10.000 reais de uma conta PF');
        }
        else {
            super.saque(valor);
        }
        ;
    }
    ;
}
;
const c1 = new ContaPF(101918, 'Samuel');
const c2 = new ContaPJ(909876, 'Empresa cursos');
c1.info();
c2.info();
console.log('-------------------------------------');
c2.deposito(5650);
console.log(c2.saldo());
console.log('-------------------------------------');
c2.saque(3500);
console.log(c2.saldo());

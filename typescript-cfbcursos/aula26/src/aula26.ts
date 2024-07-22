abstract class Conta {
    private readonly numero: number;
    protected titular: string;
    private saldoConta: number;

    constructor(titular: string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    };

    private gerarNumeroConta(): number {
        let gerarNumero: string = (Math.floor(Math.random()*100000) + 1).toString();
        while(gerarNumero.length < 6){
            gerarNumero = gerarNumero + '0';
        };
        const numero: number = Number(gerarNumero);
        return numero;
    };

    protected info(): void {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    };

    public get saldo(): number {
        return this.saldoConta;
    };

    private set saldo(saldoConta: number){
        this.saldoConta = saldoConta;
    };

    protected deposito(valor: number): void {
        if(valor <= 0){
            console.log('Valor inválido');
            return;
        };

        this.saldoConta += valor;
    };

    protected saque(valor: number): void {
        if(valor <= 0){
            console.log('Valor inválido');
            return;
        };

        if(this.saldoConta >= valor){
            this.saldoConta -= valor;
        } else {
            console.log('Saldo insuficiente');
        };
    };
};

class ContaPF extends Conta {
    cpf: number;

    constructor(cpf: number, titular: string){
        super(titular);
        this.cpf = cpf;
    };

    info(): void {
        console.log(`Tipo...: PF`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log('------------------------');
    };

    public deposito(valor: number): void {
        if(valor > 1000){
            console.log('Valor ultrapassa o limite de 1.000 reais de uma conta PF');
        } else {
            super.deposito(valor);
        };
    };

    public saque(valor: number): void {
        if(valor > 1000){
            console.log('Valor ultrapassa o limite de 1.000 reais de uma conta PF');
        } else {
            super.saque(valor);
        };
    };
};

class ContaPJ extends Conta {
    cnpj: number;

    constructor(cnpj: number, titular: string){
        super(titular);
        this.cnpj = cnpj;
    };

    info(): void {
        console.log(`Tipo...: PJ`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log('------------------------');
    };

    public deposito(valor: number): void {
        if(valor > 10000){
            console.log('Valor ultrapassa o limite de 10.000 reais de uma conta PJ');
        } else {
            super.deposito(valor);
        };
    };

    public saque(valor: number): void {
        if(valor > 10000){
            console.log('Valor ultrapassa o limite de 10.000 reais de uma conta PF');
        } else {
            super.saque(valor);
        };
    };
};

const c1 = new ContaPF(101918, 'Samuel');
const c2 = new ContaPJ(909876, 'Empresa cursos');

c1.info();
c2.info();
console.log('-'.repeat(40));
c2.deposito(5650);
console.log(c2.saldo);
console.log('-'.repeat(40));
c2.saque(3500);
console.log(c2.saldo);
console.log('-'.repeat(40));
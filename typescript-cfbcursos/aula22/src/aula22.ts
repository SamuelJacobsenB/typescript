class Conta {
    protected numero: number;
    protected titular: string;

    constructor(titular: string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    };

    gerarNumeroConta(): number {
        let gerarNumero: string = (Math.floor(Math.random()*100000) + 1).toString();
        while(gerarNumero.length < 6){
            gerarNumero = gerarNumero + '0';
        };
        const numero: number = Number(gerarNumero);
        return numero;
    };
    info(): void {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log('------------------------');
    };
};
class ContaPF extends Conta {
    cpf: number;
    constructor(cpf: number, titular: string){
        super(titular);
        this.cpf = cpf;
    };
};

class ContaPJ extends Conta {
    cnpj: number;
    constructor(cnpj: number, titular: string){
        super(titular);
        this.cnpj = cnpj;
    };
};

console.log('ola')

const c1 = new ContaPF(101918, 'Samuel');
const c2 = new ContaPJ(909876, 'Empresa cursos');

c1.info();
c2.info();
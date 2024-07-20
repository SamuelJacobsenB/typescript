class Conta {
    public numero: number;
    public titular: string;

    constructor(titular: string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    };

    gerarNumeroConta(): number {
        return Math.floor(Math.random()*100000) + 1;
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

const c1 = new ContaPF(101918, 'Samuel');
const c2 = new ContaPJ(909876, 'Maria');

console.log(c1.numero);
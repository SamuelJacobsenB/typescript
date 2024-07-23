namespace Veiculos {
    enum Cores {'Preto','Branco','Vermelho','Amarelo','Azul','Prata'};

    export abstract class Carro {
        private nome: string;
        private motor: Motores.Motor;
        private cor: string;
    
        constructor(nome: string,motor: Motores.Motor, cor: Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        };

        public ligar(): void {
            this.motor.liga = true;
        };

        public desligar(): void {
            this.motor.liga = false;
        };

        public get minhaCor(){
            return this.cor;
        };

        public get meuNome(){
            return this.nome;
        };

        public get estouLigado(){
            return (this.motor.liga ? 'Ligado' : 'Desligado');
        };

        public get minhaPotencia(){
            return this.motor.pot;
        };

        public info(): void {
            console.log('Nome: ' + this.meuNome);
            console.log('='.repeat(this.meuNome.length + 6));
            console.log(`Potência do motor: ${this.minhaPotencia}`);
            console.log('Cor: ' + this.minhaCor);
            console.log('Status: ' + this.estouLigado);
            console.log('-'.repeat(40));
        };
    };

    export class CarroEsportivo extends Carro {
        constructor(nome: string, cor: Cores){
            super(nome, new Motores.Motor(300, 6, new Motores.Turbo(100)), cor);
        };
    };

    export class CarroPopular extends Carro {
        constructor(nome: string, cor: Cores){
            super(nome, new Motores.Motor(120, 4), cor);
        };
    };
};

namespace Motores {
    export class Turbo {
        private potencia: number;

        constructor(potencia: number){
            this.potencia = potencia;
        };

        public get pot(){
            return this.potencia;
        };
    };

    export class Motor {
        private ligado: boolean;
        private cilindros: number;
        private potencia: number;
    
        constructor(potencia: number, cilindros: number, turbo?: Turbo){
            this.ligado = false;
            this.cilindros = cilindros;
            this.potencia = potencia + (turbo ? turbo.pot : 0);
        };

        public set liga(ligado: boolean){
            this.ligado = ligado
        };

        public get liga(){
            return this.ligado;
        };

        public get pot(){
            return this.potencia;
        };
    };
};

const c1 = new Veiculos.CarroEsportivo('Camaro', 3);
const c2 = new Veiculos.CarroPopular('HB20', 0);

c1.ligar();

c1.info();
c2.info();
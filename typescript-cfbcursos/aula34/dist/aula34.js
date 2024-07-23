"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    ;
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ;
        ligar() {
            this.motor.liga = true;
        }
        ;
        desligar() {
            this.motor.liga = false;
        }
        ;
        get minhaCor() {
            return this.cor;
        }
        ;
        get meuNome() {
            return this.nome;
        }
        ;
        get estouLigado() {
            return (this.motor.liga ? 'Ligado' : 'Desligado');
        }
        ;
        get minhaPotencia() {
            return this.motor.pot;
        }
        ;
        info() {
            console.log('Nome: ' + this.meuNome);
            console.log('='.repeat(this.meuNome.length + 6));
            console.log(`Potência do motor: ${this.minhaPotencia}`);
            console.log('Cor: ' + this.minhaCor);
            console.log('Status: ' + this.estouLigado);
            console.log('-'.repeat(40));
        }
        ;
    }
    Veiculos.Carro = Carro;
    ;
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(300, 6, new Motores.Turbo(100)), cor);
        }
        ;
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    ;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(120, 4), cor);
        }
        ;
    }
    Veiculos.CarroPopular = CarroPopular;
    ;
})(Veiculos || (Veiculos = {}));
;
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        ;
        get pot() {
            return this.potencia;
        }
        ;
    }
    Motores.Turbo = Turbo;
    ;
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(potencia, cilindros, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.potencia = potencia + (turbo ? turbo.pot : 0);
        }
        ;
        set liga(ligado) {
            this.ligado = ligado;
        }
        ;
        get liga() {
            return this.ligado;
        }
        ;
        get pot() {
            return this.potencia;
        }
        ;
    }
    Motores.Motor = Motor;
    ;
})(Motores || (Motores = {}));
;
const c1 = new Veiculos.CarroEsportivo('Camaro', 3);
const c2 = new Veiculos.CarroPopular('HB20', 0);
c1.ligar();
c1.info();
c2.info();

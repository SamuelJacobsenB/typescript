"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(120, 3);
        }
        ;
    }
    Veiculos.Carro = Carro;
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

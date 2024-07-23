namespace Veiculos {
    export class Carro {
        public nome: string;
        public motor: Motores.Motor;
    
        constructor(nome: string){
            this.nome = nome;
            this.motor = new Motores.Motor(120);
        };
    };
};

namespace Motores {
    abstract class Turbo {
        potencia: number;

        constructor(potencia: number){
            this.potencia = potencia
        };
    };

    export class Motor {
        public potencia: number;
    
        constructor(potencia: number){
            this.potencia = potencia;
        };
    };
};

const c1 = new Veiculos.Carro('Camaro');
console.log(c1);
namespace Veiculos {
    export abstract class Carro {
        public nome: string;
        public motor: Motores.Motor;
    
        constructor(nome: string){
            this.nome = nome;
            this.motor = new Motores.Motor(120, 3);
        };
    };
};

namespace Motores {
    class Turbo {
        private potencia: number;

        constructor(potencia: number){
            this.potencia = potencia
        };

        public get pot(){
            return this.potencia
        };
    };

    export class Motor {
        private ligado: boolean;
        private cilindros: number
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
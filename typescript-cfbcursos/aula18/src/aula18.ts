class Computer {
    name: string;
    ram: number;
    cpu: number;
    turnedOn: boolean;

    constructor(name: string, ram: number, cpu: number){
        this.name = name;
        this.ram = ram;
        this.cpu = cpu;
        this.turnedOn = false;
    };

    info(): void {
        console.log(`Nome..: ${this.name}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`Cpu...: ${this.cpu}`);
        console.log(`Ligado: ${this.turnedOn ? 'Sim' : 'Não'}`);
        console.log('------------------------');
    };

    ligar(): void {
        this.turnedOn = true;
    };

    desligar(): void {
        this.turnedOn = false;
    };
};
const c1 = new Computer('Acer Nitro 5', 8, 10);
const c2 = new Computer('Dell v7', 8, 6);
const c3 = new Computer('MacBook Pro 4', 4, 8);

c1.ligar();

c1.info();
c2.info();
c3.info();
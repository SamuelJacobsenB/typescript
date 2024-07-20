class Computer {
    private id: number;
    public name: string;
    private ram: number;
    private cpu: number;
    protected turnedOn: boolean;

    constructor(name: string, ram: number, cpu: number){
        this.name = name;
        this.ram = ram;
        this.cpu = cpu;
        this.turnedOn = false;
        this.id = Math.round(Math.random()*1000);
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

    upRam(qtde: number): void {
        if(qtde >= 0 && qtde <= 128){
            this.ram = qtde;
        } else {
            console.log(`Quantidade ${qtde} não é permitida.`);
        };
    };
};

const c1 = new Computer('Acer Nitro 5', 8, 10);
const c2 = new Computer('Dell v7', 8, 6);
const c3 = new Computer('MacBook Pro 4', 4, 8);

c1.ligar();

c1.info();
c2.info();
c3.info();
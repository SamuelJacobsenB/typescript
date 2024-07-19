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
        console.log('Computer created');
    };
};

const c1 = new Computer('Acer Nitro 5', 8, 10);
const c2 = new Computer('Dell v7', 8, 6);
const c3 = new Computer('MacBook Pro 4', 4, 8);

console.log(c1.name);
console.log(c2.name);
console.log(c3.name);
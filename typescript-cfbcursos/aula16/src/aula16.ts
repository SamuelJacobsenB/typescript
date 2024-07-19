class Computer {
    name: string = '';
    ram: number = 0;
    cpu: number = 0;
    turnedOn: boolean = false;
};

const c1 = new Computer();
const c2 = new Computer();
const c3 = new Computer();

c1.name = 'Acer Nitro 5';
c2.name = 'Dell v7';
c3.name = 'MacBook Pro 4';

console.log(c1.name);
console.log(c2.name);
console.log(c3.name);
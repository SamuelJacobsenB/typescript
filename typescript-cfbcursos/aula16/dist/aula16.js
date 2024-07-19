"use strict";
class Computer {
    name = '';
    ram = 0;
    cpu = 0;
    turnedOn = false;
}
;
const c1 = new Computer();
const c2 = new Computer();
const c3 = new Computer();
c1.name = 'Acer Nitro 5';
c2.name = 'Dell v7';
c3.name = 'MacBook Pro 4';
console.log(c1.name);
console.log(c2.name);
console.log(c3.name);

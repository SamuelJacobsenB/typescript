"use strict";
function soma(...n) {
    let s = 0;
    n.map((eln) => {
        s += eln;
    });
    return s;
}
;
console.log(soma(10, 6, 15, 28, 32));

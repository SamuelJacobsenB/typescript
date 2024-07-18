"use strict";
let dados = {
    nome: 'Samuel',
    idade: 14,
    status: 'A',
    ola: () => { console.log('Oi'); },
    info: (p) => { console.log(p); }
};
console.log(typeof (dados));
console.log(dados);
dados.info('Olá');

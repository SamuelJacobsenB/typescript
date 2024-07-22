function teste<generic>(v: generic): generic {
    return v;
};

// console.log(teste<number>(10));
// console.log(teste<string>('10'));
// console.log(teste<boolean>(true));



class C_teste<generic> {
    public valor: generic;
    constructor(valor: generic){
        this.valor = valor;
    };
};

const ct1 = new C_teste<number>(10);
const ct2 = new C_teste<string>('Olá GENERIC');
console.log(ct1.valor);
console.log(ct2.valor);
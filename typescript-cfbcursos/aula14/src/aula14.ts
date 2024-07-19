const test = (txt?: string): void =>{
    console.log(txt);
};

const soma = (n: number[]): number =>{
    let res: number = 0;
    n.map((el):void=>{
        res += el;
    }); 
    return res;
};

test('TypeScript');
test();

let numbers: number[] = [10, 20, 25, 45];
console.log(soma(numbers));
function login(user: string, password: string): void {
    console.log(`User: ${user}, Password: ${password}`);
};

login('Samuel', 'password1234');

function soma2(n1: number, n2: number): number {
    let res: number = n1 + n2;
    return res; 
};

const n_res: number = soma2(10,5);
const s_res: string = soma2(20,10).toString();

console.log(n_res);
console.log(s_res);
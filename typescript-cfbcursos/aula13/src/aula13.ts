function soma(n1: number = 0, n2: number = 0): number {
    return n1 + n2
};

console.log(soma(5));

function newUser(user: string, password: string, name?: string): void {
    console.log(`User: ${user}, password: ${password}, name: ${name == undefined ? 'Name is not defined' : name}`);
};

newUser('myUserNames', 'password123', 'Samuel');
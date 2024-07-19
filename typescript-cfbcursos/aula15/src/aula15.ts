function soma(...n: number[]): number{
    let s: number = 0;
    n.map((eln):void=>{
        s += eln;
    });
    return s;
};  

console.log(soma(10,6,15,28,32));
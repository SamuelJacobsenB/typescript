interface curso {
    titulo: string;
    des: string;
    aulas: number;
    maxAlunos?: number;
};

const curso1: curso = {
    titulo: 'Typescript',
    des: 'Curso de TS',
    aulas: 37,
    maxAlunos: 50,
};

const curso2: curso = {
    titulo: 'Javascript',
    des: 'Curso de JS',
    aulas: 266,
};

console.log(curso1);
console.log(curso2);
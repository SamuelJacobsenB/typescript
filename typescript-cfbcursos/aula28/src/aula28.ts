interface curso {
    titulo: string;
    des: string;
    iniciarCurso?(teste: string): void;
};

interface cursoProg extends curso {
    aulas: number;
    maxAlunos?: number;
};

interface cursoArtes extends curso {
    aulas: number;
    maxAlunos?: number;
};

const curso1: cursoProg = {
    titulo: 'Typescript',
    des: 'Curso de TS',
    aulas: 37,
    maxAlunos: 50,
};

const curso2: cursoArtes = {
    titulo: 'Arte abstrata',
    des: 'Curso de Arte abstrata',
    aulas: 30,
};

console.log(curso1);
console.log(curso2);
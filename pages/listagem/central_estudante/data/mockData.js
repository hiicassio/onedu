export const STUDENT = {
    id: '25510012',
    matricula: '2026001542',
    name: 'Lucas Ferreira Santos',
    turma: '7º ANO B',
    nivel: 'Ensino Fundamental II',
    turno: 'Matutino',
    responsavel: 'Ana Paula Ferreira Santos',
    contato: '(21) 99234-5678',
    dataNasc: '14/03/2013',
    status: 'Ativo',
    unidade: 'E.M Rio Branco Sul',
};

export const ATTENDANCE_MONTHLY = [
    { mes: 'Fev', presencas: 18, aulas: 20 },
    { mes: 'Mar', presencas: 22, aulas: 25 },
    { mes: 'Abr', presencas: 19, aulas: 22 },
    { mes: 'Mai', presencas: 24, aulas: 26 },
    { mes: 'Jun', presencas: 17, aulas: 19 },
    { mes: 'Ago', presencas: 21, aulas: 23 },
    { mes: 'Set', presencas: 20, aulas: 22 },
    { mes: 'Out', presencas: 18, aulas: 20 },
];

export const GRADES = [
    { disciplina: 'Língua Portuguesa', t1: 7.5, t2: 8.0, t3: 6.5, t4: 7.0 },
    { disciplina: 'Matemática',        t1: 5.5, t2: 6.0, t3: 5.0, t4: 6.5 },
    { disciplina: 'Ciências',          t1: 8.0, t2: 7.5, t3: 8.5, t4: 9.0 },
    { disciplina: 'História',          t1: 9.0, t2: 8.5, t3: 8.0, t4: 9.0 },
    { disciplina: 'Geografia',         t1: 7.0, t2: 7.5, t3: 7.0, t4: 8.0 },
    { disciplina: 'Arte',              t1: 9.5, t2: 9.0, t3: 9.5, t4: 10  },
    { disciplina: 'Ed. Física',        t1: 10,  t2: 10,  t3: 10,  t4: 10  },
    { disciplina: 'Inglês',            t1: 6.5, t2: 7.0, t3: 6.0, t4: 7.5 },
    { disciplina: 'Rel. / Ensino',     t1: null,t2: null,t3: null,t4: null },
];

export const OCCURRENCES = [
    { id: 1, data: '12/03/2026', tipo: 'Advertência',      descricao: 'Descumprimento de regra do regimento escolar',     gravidade: 'media'  },
    { id: 2, data: '25/04/2026', tipo: 'Falta Justificada',descricao: 'Consulta médica (atestado apresentado)',            gravidade: 'baixa'  },
    { id: 3, data: '08/05/2026', tipo: 'Atraso',           descricao: 'Chegou 20 minutos após o início das aulas',        gravidade: 'baixa'  },
    { id: 4, data: '15/05/2026', tipo: 'Elogio',           descricao: 'Destaque positivo em projeto de ciências',         gravidade: 'elogio' },
    { id: 5, data: '02/06/2026', tipo: 'Advertência',      descricao: 'Uso de celular em sala durante aula',              gravidade: 'media'  },
];

export const TREND_DATA = [6.8, 7.0, 7.2, 6.9, 7.4, 7.6, 7.3, 7.8];

/** 10 semanas × 5 dias = 50 células de heatmap de presença */
export const HEATMAP = Array.from({ length: 10 }, () =>
    Array.from({ length: 5 }, () => {
        const r = Math.random();
        if (r < 0.10) return 0;   // falta
        if (r < 0.18) return 1;   // parcial
        return 2;                  // presente
    })
);

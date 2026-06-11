import aluno from '../../historico_escolar_lancamentos/icones/aluno.png';

export const STUDENT = {
    id: '424001004',
    matricula: '2024000458',
    codInep: '02114450',
    name: 'Diego da Silva Cardoso Oliveira JR.',
    turma: '3º ANO A',
    nivel: 'Ensino Fundamental - Anos Iniciais',
    turno: 'Matutino',
    responsavel: 'Sonia Francisca Cardoso Silva',
    responsavelCpf: '458.965.487-45',
    contato: '(21) 99962-0251',
    whatsapp: '(21) 99962-0251',
    dataNasc: '10/05/2018',
    cpf: '458.965.487-45',
    rg: '2551002100',
    orgao: 'SSPMS',
    sexo: 'Masculino',
    programasSociais: 'Sim',
    programasTags: ['Bolsa Família', 'Pé de Meia'],
    status: 'Ativo',
    statusLabel: 'Em dia',
    statusTone: 'Ok',
    unidade: 'E.M Geraldo Resende Filho',
    avatar: aluno,
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
    { disciplina: 'Matemática', t1: 5.5, t2: 6.0, t3: 5.0, t4: 6.5 },
    { disciplina: 'Ciências', t1: 8.0, t2: 7.5, t3: 8.5, t4: 9.0 },
    { disciplina: 'História', t1: 9.0, t2: 8.5, t3: 8.0, t4: 9.0 },
    { disciplina: 'Geografia', t1: 7.0, t2: 7.5, t3: 7.0, t4: 8.0 },
    { disciplina: 'Arte', t1: 9.5, t2: 9.0, t3: 9.5, t4: 10 },
    { disciplina: 'Ed. Física', t1: 10, t2: 10, t3: 10, t4: 10 },
    { disciplina: 'Inglês', t1: 6.5, t2: 7.0, t3: 6.0, t4: 7.5 },
    { disciplina: 'Rel. / Ensino', t1: null, t2: null, t3: null, t4: null },
];

export const OCCURRENCES = [
    { id: 1, data: '12/03/2026', tipo: 'Advertência', descricao: 'Descumprimento de regra do regimento escolar', gravidade: 'media' },
    { id: 2, data: '25/04/2026', tipo: 'Falta Justificada', descricao: 'Consulta médica (atestado apresentado)', gravidade: 'baixa' },
    { id: 3, data: '08/05/2026', tipo: 'Atraso', descricao: 'Chegou 20 minutos após o início das aulas', gravidade: 'baixa' },
    { id: 4, data: '15/05/2026', tipo: 'Elogio', descricao: 'Destaque positivo em projeto de ciências', gravidade: 'elogio' },
    { id: 5, data: '02/06/2026', tipo: 'Advertência', descricao: 'Uso de celular em sala durante aula', gravidade: 'media' },
];

export const TREND_DATA = [6.8, 7.0, 7.2, 6.9, 7.4, 7.6, 7.3, 7.8];

export const HEATMAP = Array.from({ length: 10 }, () =>
    Array.from({ length: 5 }, () => {
        const r = Math.random();
        if (r < 0.10) return 0;
        if (r < 0.18) return 1;
        return 2;
    })
);

export const LEARNING_SUMMARY = {
    overview:
        'Desempenho consistente no 3º bimestre, com avanço em Língua Portuguesa e Matemática. Dois componentes seguem sob atenção.',
    mediaGeral: '7,4',
    mediaTrend: '+0,6 vs. 2025',
    componentes: '11',
    componentesSub: '2 Sob Atenção',
    situacaoRegime: 'Aprovado',
    situacaoSub: '2 Sob Atenção',
    aiStatus: 'Avanço moderado',
    aiText: 'Progressão consistente com oportunidade de reforço em Matemática e Inglês.',
};

export const LEARNING_COMPONENTS = [
    { label: 'LPT', value: 8.9, color: '#00397B' },
    { label: 'MAT', value: 6.4, color: '#197DFF' },
    { label: 'GEO', value: 7.8, color: '#197DFF' },
    { label: 'HIS', value: 8.2, color: '#00397B' },
    { label: 'CIE', value: 7.5, color: '#197DFF' },
    { label: 'ART', value: 9.1, color: '#00397B' },
    { label: 'EDF', value: 9.8, color: '#00397B' },
    { label: 'ING', value: 6.8, color: '#6BA8F0' },
    { label: 'FIL', value: 7.0, color: '#197DFF' },
    { label: 'REP', value: 8.6, color: '#00397B' },
];

export const LEARNING_EVOLUTION = [6.2, 6.8, 7.1, 7.4];
export const LEARNING_BIMESTERS = ['1º BIM', '2º BIM', '3º BIM', '4º BIM'];

export const PERFORMANCE_SUBJECTS = ['LPT', 'MAT', 'GEO', 'HIS', 'CIE', 'ART', 'EDF', 'ING', 'FIL', 'REP'];
export const PERFORMANCE_ROWS = ['RC', 'C2', 'C1', 'T2', 'T1', 'P2', 'P1'];

export const PERFORMANCE_HEATMAP = [
    [6.0, 5.5, 5.6, 8.8, 7.0, 7.3, 9.2, null, 9.4, 8.6],
    [7.2, 6.1, 6.8, 8.5, 7.4, 8.0, 9.5, 6.9, 9.0, 8.2],
    [7.8, 6.5, 7.2, 9.0, 7.8, 8.4, 9.8, 7.1, 9.2, 8.8],
    [8.1, 6.8, 7.5, 9.2, 8.0, 8.8, 10, 7.4, 9.5, 9.0],
    [8.4, 7.0, 7.8, 9.4, 8.2, 9.0, 10, 7.6, 9.6, 9.2],
    [8.6, 7.2, 8.0, 9.5, 8.4, 9.2, 10, 7.8, 9.7, 9.4],
    [8.9, 7.4, 8.2, 9.6, 8.6, 9.4, 10, 8.0, 9.8, 9.6],
];

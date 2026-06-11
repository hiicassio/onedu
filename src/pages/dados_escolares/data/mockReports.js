export const MOCK_REPORTS = [
    {
        id: 1,
        nome: 'Lista de Alunos por Turma',
        tipo: 'Pronto',
        data: '10/06/2026',
        status: 'Disponível',
    },
    {
        id: 2,
        nome: 'Frequência Escolar Mensal',
        tipo: 'Pronto',
        data: '09/06/2026',
        status: 'Disponível',
    },
    {
        id: 3,
        nome: 'Rendimento por Disciplina',
        tipo: 'OnReport',
        data: '08/06/2026',
        status: 'Rascunho',
    },
    {
        id: 4,
        nome: 'Transferências e Desligamentos',
        tipo: 'Pronto',
        data: '05/06/2026',
        status: 'Disponível',
    },
    {
        id: 5,
        nome: 'Indicadores IDEB — Consolidado',
        tipo: 'OnReport',
        data: '01/06/2026',
        status: 'Disponível',
    },
];

export const WIZARD_TEMPLATES = [
    { id: 'lista-turma', label: 'Lista de Alunos por Turma' },
    { id: 'frequencia', label: 'Frequência Escolar' },
    { id: 'rendimento', label: 'Rendimento por Disciplina' },
    { id: 'ocorrencias', label: 'Ocorrências Disciplinares' },
];

export const WIZARD_ANOS = [
    { value: '2026', label: '2026' },
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
];

export const WIZARD_TURMAS = [
    { value: '3a', label: '3º Ano A' },
    { value: '3b', label: '3º Ano B' },
    { value: '5a', label: '5º Ano A' },
];

export const WIZARD_CAMPOS = [
    { id: 'nome', label: 'Nome do Aluno' },
    { id: 'matricula', label: 'Matrícula' },
    { id: 'turma', label: 'Turma' },
    { id: 'frequencia', label: 'Frequência (%)' },
    { id: 'media', label: 'Média Geral' },
    { id: 'situacao', label: 'Situação' },
];

export const PAINEL_GRAFICOS = {
    desempenho: [
        { label: '1º B', value: 72 },
        { label: '2º A', value: 85 },
        { label: '3º A', value: 91 },
        { label: '5º B', value: 78 },
        { label: '9º A', value: 88 },
    ],
    frequencia: [82, 86, 88, 91, 89, 93, 91],
    distribuicao: [
        { label: 'Aprovados', value: 74, color: '#15B86C' },
        { label: 'Recuperação', value: 18, color: '#F59E0B' },
        { label: 'Reprovados', value: 8, color: '#EF4444' },
    ],
};

export const PAINEL_ALERTAS = [
    { nivel: 'alto', titulo: 'Frequência abaixo de 75%', turma: '3º Ano B', valor: '68%' },
    { nivel: 'medio', titulo: 'Notas pendentes de lançamento', turma: '5º Ano A', valor: '12 alunos' },
    { nivel: 'baixo', titulo: 'Documentação incompleta', turma: '2º Ano C', valor: '4 alunos' },
];

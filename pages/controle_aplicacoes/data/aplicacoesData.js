export const APLICACOES_STATS = [
    { label: 'Total de turmas', value: '101' },
    { label: 'Total de professores', value: '85' },
    { label: 'Total de professores S. C.', value: '10' },
    { label: 'Total de salas de aula', value: '25' },
];

export const MAIN_CARDS = [
    {
        id: 'quadro-horarios',
        title: 'Quadro de',
        subtitle: 'Horários',
        badge: 4,
        rota: '/controle-aplicacoes/quadro-horarios',
    },
    {
        id: 'calendario-escolar',
        title: 'Calendário',
        subtitle: 'Escolar',
        badge: 2,
        rota: '/controle-aplicacoes/calendario-escolar',
    },
    {
        id: 'controle-financeiro',
        title: 'Controle',
        subtitle: 'Financeiro',
        badge: 4,
        rota: '/controle-aplicacoes/controle-financeiro',
    },
    {
        id: 'controle-entregas',
        title: 'Controle de',
        subtitle: 'Entregas',
        badge: 4,
        rota: '/controle-aplicacoes/controle-entregas',
    },
];

export const findAplicacaoPage = (pageId) =>
    MAIN_CARDS.find((item) => item.id === pageId) ?? null;

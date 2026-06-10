export const INSTITUCIONAL_STATS = [
    { label: 'Total de Turmas', value: '101' },
    { label: 'Total de Professores', value: '85' },
    { label: 'Total de Professores S.C', value: '10' },
    { label: 'Total de Salas de Aula', value: '25' },
];

export const MAIN_CARDS = [
    {
        id: 'estrutura-pedagogica',
        title: 'Estrutura',
        subtitle: 'Pedagógica',
        badge: 4,
    },
    {
        id: 'estrutura-escola',
        title: 'Estrutura da',
        subtitle: 'Escola',
        badge: 4,
    },
    {
        id: 'gestao-cadastral',
        title: 'Gestão',
        subtitle: 'Cadastral',
        badge: 4,
    },
    {
        id: 'gestao-apoio',
        title: 'Gestão de',
        subtitle: 'Apoio',
        badge: 2,
    },
];

export const EXTRA_FUNCTIONS = {
    'estrutura-pedagogica': [
        {
            id: 'planos-pedagogicos',
            title: 'Planos',
            subtitle: 'Pedagógicos',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/estrutura-pedagogica/planos-pedagogicos',
        },
        {
            id: 'percurso-avaliativo',
            title: 'Percurso',
            subtitle: 'Avaliativo',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/estrutura-pedagogica/percurso-avaliativo',
        },
        {
            id: 'estrutura-avaliacoes',
            title: 'Estrutura de',
            subtitle: 'Avaliações',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/estrutura-pedagogica/estrutura-avaliacoes',
        },
        {
            id: 'percurso-planejamento',
            title: 'Percurso do',
            subtitle: 'Planejamento',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/estrutura-pedagogica/percurso-planejamento',
        },
    ],
    'estrutura-escola': [
        {
            id: 'perfil-minha-escola',
            title: 'Perfil da',
            subtitle: 'Minha Escola',
            description: 'Gestão de Informações',
            noAction: true,
        },
        {
            id: 'estruturas-fisicas',
            title: 'Estruturas',
            subtitle: 'Físicas',
            description: 'Gestão de Informações',
            rota: '/gestao-institucional/estrutura-escola/estruturas-fisicas',
        },
        {
            id: 'estrutura-funcional',
            title: 'Estrutura',
            subtitle: 'Funcional',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/estrutura-escola/estrutura-funcional',
        },
        {
            id: 'gestao-turmas',
            title: 'Gestão de',
            subtitle: 'Turmas',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/estrutura-escola/gestao-turmas',
        },
    ],
    'gestao-cadastral': [
        {
            id: 'gestao-pessoas',
            title: 'Gestão de',
            subtitle: 'Pessoas',
            description: 'Cadastros Gerais',
            rota: '/gestao-institucional/gestao-cadastral/gestao-pessoas',
        },
        {
            id: 'gestao-profissionais',
            title: 'Gestão de',
            subtitle: 'Profissionais',
            description: 'Cadastros Gerais',
            rota: '/gestao-institucional/gestao-cadastral/gestao-profissionais',
        },
        {
            id: 'gestao-familias',
            title: 'Gestão de',
            subtitle: 'Famílias',
            description: 'Gestão de Informações',
            rota: '/gestao-institucional/gestao-cadastral/gestao-familias',
        },
        {
            id: 'gestao-empresas',
            title: 'Gestão de',
            subtitle: 'Empresas',
            description: 'Cadastros Gerais',
            rota: '/gestao-institucional/gestao-cadastral/gestao-empresas',
        },
    ],
    'gestao-apoio': [
        {
            id: 'transporte-escolar',
            title: 'Transporte',
            subtitle: 'Escolar',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/gestao-apoio/transporte-escolar',
        },
        {
            id: 'alimentacao-escolar',
            title: 'Alimentação',
            subtitle: 'Escolar',
            description: 'Consulta de Informações',
            rota: '/gestao-institucional/gestao-apoio/alimentacao-escolar',
        },
    ],
};

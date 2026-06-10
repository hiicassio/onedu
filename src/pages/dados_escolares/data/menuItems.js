export const DADOS_ESCOLARES_MENU = [
    {
        id: 'relatorios-prontos',
        label: 'Relatórios Prontos',
        submenu: [],
    },
    {
        id: 'onreport',
        label: 'OnReport',
        submenu: [],
    },
    {
        id: 'onreport-graficos',
        label: 'OnReport Gráficos',
        submenu: [
            { id: 'graficos-desempenho', label: 'Desempenho por Turma' },
            { id: 'graficos-frequencia', label: 'Frequência Escolar' },
            { id: 'graficos-evasao', label: 'Evasão e Abandono' },
        ],
    },
    {
        id: 'sala-situacao',
        label: 'Sala de Situação',
        submenu: [
            { id: 'sala-indicadores', label: 'Indicadores Críticos' },
            { id: 'sala-alertas', label: 'Alertas em Tempo Real' },
            { id: 'sala-consolidado', label: 'Visão Consolidada' },
        ],
    },
];

export const LISTA_ITEMS = new Set(['relatorios-prontos', 'onreport']);

export const getDadosEscolaresViewMode = (itemId) => {
    if (!itemId) return 'dashboard';

    if (LISTA_ITEMS.has(itemId)) return 'lista';

    if (
        itemId === 'onreport-graficos' ||
        itemId === 'sala-situacao' ||
        itemId.startsWith('graficos-') ||
        itemId.startsWith('sala-')
    ) {
        return 'painel';
    }

    return 'dashboard';
};

export const findDadosEscolaresLabel = (itemId) => {
    if (!itemId) return 'Dados Escolares';

    for (const item of DADOS_ESCOLARES_MENU) {
        if (item.id === itemId) return item.label;

        const child = item.submenu.find((sub) => sub.id === itemId);
        if (child) return child.label;
    }

    return 'Dados Escolares';
};

export const getDadosEscolaresPainelCopy = (itemId) => {
    const isGraficos =
        itemId === 'onreport-graficos' || itemId.startsWith('graficos-');

    if (isGraficos) {
        return {
            title: 'OnReport Gráficos:',
            description: 'Visualize indicadores e tendências escolares em formato gráfico.',
            panelType: 'graficos',
        };
    }

    return {
        title: 'Sala de Situação:',
        description: 'Monitore indicadores críticos e alertas da unidade escolar em tempo real.',
        panelType: 'sala',
    };
};

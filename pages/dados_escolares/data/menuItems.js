import { DASHBOARD_CARDS } from './dadosEscolaresData';

export const DADOS_ESCOLARES_MENU = [
    {
        id: 'relatorios-prontos',
        label: 'Relatórios Prontos',
        rota: '/dados-escolares/relatorios-prontos',
        submenu: [],
    },
    {
        id: 'onreport',
        label: 'OnReport',
        rota: '/dados-escolares/onreport',
        submenu: [],
    },
    {
        id: 'onreport-graficos',
        label: 'OnReport Gráficos',
        rota: '/dados-escolares/onreport-graficos',
        submenu: [
            {
                id: 'graficos-desempenho',
                label: 'Desempenho por Turma',
                rota: '/dados-escolares/onreport-graficos/graficos-desempenho',
            },
            {
                id: 'graficos-frequencia',
                label: 'Frequência Escolar',
                rota: '/dados-escolares/onreport-graficos/graficos-frequencia',
            },
            {
                id: 'graficos-evasao',
                label: 'Evasão e Abandono',
                rota: '/dados-escolares/onreport-graficos/graficos-evasao',
            },
        ],
    },
    {
        id: 'sala-situacao',
        label: 'Sala de Situação',
        rota: '/dados-escolares/sala-situacao',
        submenu: [
            {
                id: 'sala-indicadores',
                label: 'Indicadores Críticos',
                rota: '/dados-escolares/sala-situacao/sala-indicadores',
            },
            {
                id: 'sala-alertas',
                label: 'Alertas em Tempo Real',
                rota: '/dados-escolares/sala-situacao/sala-alertas',
            },
            {
                id: 'sala-consolidado',
                label: 'Visão Consolidada',
                rota: '/dados-escolares/sala-situacao/sala-consolidado',
            },
        ],
    },
];

export const findDadosEscolaresLabel = (section, page) => {
    if (!section) return 'Dados Escolares';

    for (const item of DADOS_ESCOLARES_MENU) {
        if (item.id === section && !page) return item.label;

        const child = item.submenu.find((sub) => sub.id === page);
        if (child) return child.label;

        if (item.id === section) return item.label;
    }

    const card = DASHBOARD_CARDS.find((item) => item.id === section);
    return card?.label ?? 'Dados Escolares';
};

export const getDadosEscolaresPainelCopy = (section, page) => {
    const isGraficos =
        section === 'onreport-graficos' || String(page ?? '').startsWith('graficos-');

    if (isGraficos) {
        return {
            title: `${findDadosEscolaresLabel(section, page)}:`,
            description:
                'Visualize indicadores e tendências escolares em formato gráfico.',
            panelType: 'graficos',
        };
    }

    return {
        title: `${findDadosEscolaresLabel(section, page)}:`,
        description:
            'Monitore indicadores críticos e alertas da unidade escolar em tempo real.',
        panelType: 'sala',
    };
};

export const isDadosEscolaresRouteActive = (itemId, section, page) => {
    if (section !== itemId) return false;
    if (!page) return true;

    const menuItem = DADOS_ESCOLARES_MENU.find((item) => item.id === itemId);
    return menuItem?.submenu.some((sub) => sub.id === page) ?? false;
};

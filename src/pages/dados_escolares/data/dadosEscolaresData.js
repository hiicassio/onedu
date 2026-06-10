export const DADOS_ESCOLARES_DESCRIPTION =
    'Realize o mapeamento e a extração de dados de forma precisa e simplificada, permitindo acessar informações por meio de relatórios, gráficos e indicadores, em formatos pré-definidos ou totalmente personalizáveis.';

export const DASHBOARD_CARDS = [
    {
        id: 'relatorios-prontos',
        label: 'Relatórios Prontos',
        rota: '/dados-escolares/relatorios-prontos',
        badge: '+',
    },
    {
        id: 'onreport',
        label: 'Gerador de Relatórios',
        rota: '/dados-escolares/onreport',
        badge: '+',
    },
    {
        id: 'onreport-graficos',
        label: 'Gerador de Gráficos',
        rota: '/dados-escolares/onreport-graficos',
        badge: '4',
    },
    {
        id: 'sala-situacao',
        label: 'Sala de Situação',
        rota: '/dados-escolares/sala-situacao',
    },
];

export const LISTA_SECTIONS = new Set(['relatorios-prontos', 'onreport']);

export const PAINEL_SECTIONS = new Set(['onreport-graficos', 'sala-situacao']);

export const getSectionRoute = (sectionId) =>
    DASHBOARD_CARDS.find((card) => card.id === sectionId)?.rota ?? '/dados-escolares';

export const getWizardRoute = (sectionId, reportId) =>
    reportId
        ? `/dados-escolares/${sectionId}/gerador/${reportId}`
        : `/dados-escolares/${sectionId}/gerador`;

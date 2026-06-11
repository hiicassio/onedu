export const PROTOCOLO_DIGITAL_BASE_ROUTE = '/dev/protocolo-digital';

export const PROTOCOLO_DIGITAL_DESCRIPTION =
    'Realize o mapeamento e a extração de dados de forma precisa e simplificada, permitindo acessar informações por meio de relatórios, gráficos e indicadores, em formatos pré-definidos ou totalmente personalizáveis.';

export const DASHBOARD_CARDS = [
    {
        id: 'novo-protocolo',
        title: 'Novo',
        subtitle: 'Protocolo',
        rota: `${PROTOCOLO_DIGITAL_BASE_ROUTE}/novo-protocolo`,
        badge: '+',
    },
    {
        id: 'relacao-protocolos',
        title: 'Relação de',
        subtitle: 'Protocolos',
        rota: `${PROTOCOLO_DIGITAL_BASE_ROUTE}/relacao-protocolos`,
    },
    {
        id: 'indicadores-dados',
        title: 'Indicadores de',
        subtitle: 'Dados',
        rota: `${PROTOCOLO_DIGITAL_BASE_ROUTE}/indicadores-dados`,
        badge: '4',
    },
];

export const PROTOCOLO_STATS = [
    { id: 'concluidos', label: 'Protocolos Concluídos', value: '410', tone: 'success' },
    { id: 'pendentes', label: 'Protocolos Pendentes', value: '98', tone: 'danger' },
    { id: 'analise', label: 'Protocolos Em Análise', value: '42', tone: 'warning' },
    { id: 'devolvidos', label: 'Protocolos Devolvidos', value: '12', tone: 'info' },
];

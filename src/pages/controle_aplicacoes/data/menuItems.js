import { MAIN_CARDS } from './aplicacoesData';

export const CONTROLE_APLICACOES_MENU = MAIN_CARDS.map((item) => ({
    id: item.id,
    label: [item.title, item.subtitle].filter(Boolean).join(' '),
    rota: item.rota,
}));

export const findAplicacaoPage = (pageId) =>
    MAIN_CARDS.find((item) => item.id === pageId) ?? null;

export const findAplicacaoLabel = (pageId) => {
    const match = findAplicacaoPage(pageId);
    if (match) return [match.title, match.subtitle].filter(Boolean).join(' ');
    return 'Controle de Aplicações';
};

export const isAplicacaoRouteActive = (itemId, activePage) => activePage === itemId;

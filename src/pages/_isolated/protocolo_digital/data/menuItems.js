import { DASHBOARD_CARDS } from './protocoloDigitalData';

export const PROTOCOLO_DIGITAL_MENU = DASHBOARD_CARDS.map((item) => ({
    id: item.id,
    label: [item.title, item.subtitle].filter(Boolean).join(' '),
    rota: item.rota,
}));

export const findProtocoloPage = (pageId) =>
    DASHBOARD_CARDS.find((item) => item.id === pageId) ?? null;

export const findProtocoloLabel = (pageId) => {
    const match = findProtocoloPage(pageId);
    if (match) return [match.title, match.subtitle].filter(Boolean).join(' ');
    return 'Protocolo Digital';
};

export const isProtocoloRouteActive = (itemId, activePage) => activePage === itemId;

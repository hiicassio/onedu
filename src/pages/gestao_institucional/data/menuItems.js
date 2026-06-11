import { EXTRA_FUNCTIONS } from './institutionalData';

const buildMenuFromExtras = () =>
    Object.entries(EXTRA_FUNCTIONS).map(([sectionId, items]) => {
        const labels = {
            'estrutura-pedagogica': 'Estrutura pedagógica',
            'estrutura-escola': 'Estrutura da escola',
            'gestao-cadastral': 'Gestão cadastral',
            'gestao-apoio': 'Gestão de apoio',
        };

        return {
            id: sectionId,
            label: labels[sectionId],
            submenu: items.map((item) => ({
                id: item.id,
                label: [item.title, item.subtitle].filter(Boolean).join(' '),
                rota: item.rota ?? null,
                noAction: Boolean(item.noAction),
            })),
        };
    });

export const GESTAO_INSTITUCIONAL_MENU = buildMenuFromExtras();

export const findInstitucionalPage = (section, page) => {
    const items = EXTRA_FUNCTIONS[section] ?? [];
    return items.find((item) => item.id === page) ?? null;
};

export const findInstitucionalLabel = (section, page) => {
    const match = findInstitucionalPage(section, page);
    if (match) return [match.title, match.subtitle].filter(Boolean).join(' ');

    const menuItem = GESTAO_INSTITUCIONAL_MENU.find((item) => item.id === section);
    return menuItem?.label ?? 'Gestão Institucional';
};

export const isInstitucionalRouteActive = (itemId, section, page) => {
    if (section === itemId) return true;
    if (!page) return false;

    const parent = GESTAO_INSTITUCIONAL_MENU.find((item) => item.id === itemId);
    return parent?.submenu.some((sub) => sub.id === page) ?? false;
};

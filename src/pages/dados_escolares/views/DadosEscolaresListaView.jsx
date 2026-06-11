import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { findDadosEscolaresLabel } from '../data/menuItems';
import { getWizardRoute } from '../data/dadosEscolaresData';
import ListaRelatorios from './ListaRelatorios';
import layoutStyles from '../../../components/ModulePageLayout/ModulePageLayout.module.scss';

const DadosEscolaresListaView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const section = location.pathname.split('/').filter(Boolean)[1] ?? '';

    const sectionLabel = useMemo(
        () => findDadosEscolaresLabel(section),
        [section]
    );

    const handleNovoRelatorio = () => {
        navigate(getWizardRoute(section));
    };

    const handleAbrirRelatorio = (report) => {
        navigate(getWizardRoute(section, report.id));
    };

    return (
        <div className={layoutStyles.contentCard}>
            <div className={layoutStyles.contentHeader}>
                <h2>{sectionLabel}</h2>
                <button
                    type="button"
                    className={layoutStyles.backLink}
                    onClick={() => navigate('/dados-escolares')}
                >
                    Voltar ao início
                </button>
            </div>

            <ListaRelatorios
                sectionLabel={sectionLabel}
                onNovoRelatorio={handleNovoRelatorio}
                onAbrirRelatorio={handleAbrirRelatorio}
            />
        </div>
    );
};

export default DadosEscolaresListaView;

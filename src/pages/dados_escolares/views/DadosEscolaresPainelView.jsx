import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { findDadosEscolaresLabel, getDadosEscolaresPainelCopy } from '../data/menuItems';
import PainelIndicadores from './PainelIndicadores';
import layoutStyles from '../../../components/ModulePageLayout/ModulePageLayout.module.scss';

const DadosEscolaresPainelView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathParts = location.pathname.split('/').filter(Boolean);
    const section = pathParts[1] ?? '';
    const page = pathParts[2] ?? '';

    const sectionLabel = useMemo(
        () => findDadosEscolaresLabel(section, page),
        [section, page]
    );

    const painelCopy = useMemo(
        () => getDadosEscolaresPainelCopy(section, page),
        [section, page]
    );

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

            <PainelIndicadores
                title={painelCopy.title}
                description={painelCopy.description}
                panelType={painelCopy.panelType}
            />
        </div>
    );
};

export default DadosEscolaresPainelView;

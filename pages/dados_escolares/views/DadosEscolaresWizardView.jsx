import { useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MOCK_REPORTS } from '../data/mockReports';
import { findDadosEscolaresLabel } from '../data/menuItems';
import { getSectionRoute } from '../data/dadosEscolaresData';
import RelatorioWizard from './wizard/RelatorioWizard';
import layoutStyles from '../../../components/ModulePageLayout/ModulePageLayout.module.scss';

const DadosEscolaresWizardView = () => {
    const location = useLocation();
    const { reportId } = useParams();
    const navigate = useNavigate();
    const pathParts = location.pathname.split('/').filter(Boolean);
    const section = pathParts[1] ?? '';

    const sectionLabel = useMemo(
        () => findDadosEscolaresLabel(section),
        [section]
    );

    const reportName = useMemo(() => {
        if (!reportId) return `Novo — ${sectionLabel}`;
        const report = MOCK_REPORTS.find((item) => String(item.id) === String(reportId));
        return report?.nome ?? `Novo — ${sectionLabel}`;
    }, [reportId, sectionLabel]);

    const handleCancel = () => {
        navigate(getSectionRoute(section));
    };

    const handleComplete = () => {
        navigate(getSectionRoute(section));
    };

    return (
        <div className={layoutStyles.contentCard}>
            <div className={layoutStyles.contentHeader}>
                <h2>{reportName}</h2>
                <button
                    type="button"
                    className={layoutStyles.backLink}
                    onClick={handleCancel}
                >
                    Voltar para a lista
                </button>
            </div>

            <RelatorioWizard
                reportName={reportName}
                onCancel={handleCancel}
                onComplete={handleComplete}
            />
        </div>
    );
};

export default DadosEscolaresWizardView;

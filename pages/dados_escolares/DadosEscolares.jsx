import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RelatoriosHeader from './components/RelatoriosHeader';
import {
    findDadosEscolaresLabel,
    getDadosEscolaresPainelCopy,
    getDadosEscolaresViewMode,
} from './data/menuItems';
import DashboardRelatorios from './views/DashboardRelatorios';
import ListaRelatorios from './views/ListaRelatorios';
import PainelIndicadores from './views/PainelIndicadores';
import RelatorioWizard from './views/wizard/RelatorioWizard';
import styles from './DadosEscolares.module.scss';

const DadosEscolares = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedReport, setSelectedReport] = useState(null);
    const [wizardActive, setWizardActive] = useState(false);

    const activeItemId = searchParams.get('sec');
    const viewMode = wizardActive ? 'wizard' : getDadosEscolaresViewMode(activeItemId);

    const sectionLabel = useMemo(
        () => findDadosEscolaresLabel(activeItemId),
        [activeItemId]
    );

    const painelCopy = useMemo(
        () => getDadosEscolaresPainelCopy(activeItemId ?? ''),
        [activeItemId]
    );

    const handleSectionSelect = (itemId) => {
        if (itemId) {
            setSearchParams({ sec: itemId });
        } else {
            setSearchParams({});
        }
        setSelectedReport(null);
        setWizardActive(false);
    };

    const handleNovoRelatorio = () => {
        setSelectedReport({ nome: `Novo — ${sectionLabel}` });
        setWizardActive(true);
    };

    const handleAbrirRelatorio = (report) => {
        setSelectedReport(report);
        setWizardActive(true);
    };

    const handleWizardCancel = () => {
        setWizardActive(false);
        setSelectedReport(null);
    };

    const handleWizardComplete = () => {
        setWizardActive(false);
        setSelectedReport(null);
    };

    const handleVoltarInicio = () => {
        setSearchParams({});
        setSelectedReport(null);
        setWizardActive(false);
    };

    const renderContent = () => {
        if (viewMode === 'wizard') {
            return (
                <RelatorioWizard
                    reportName={selectedReport?.nome}
                    onCancel={handleWizardCancel}
                    onComplete={handleWizardComplete}
                />
            );
        }

        if (viewMode === 'lista') {
            return (
                <ListaRelatorios
                    sectionLabel={sectionLabel}
                    onNovoRelatorio={handleNovoRelatorio}
                    onAbrirRelatorio={handleAbrirRelatorio}
                />
            );
        }

        if (viewMode === 'painel') {
            return (
                <PainelIndicadores
                    title={painelCopy.title}
                    description={painelCopy.description}
                    panelType={painelCopy.panelType}
                />
            );
        }

        return <DashboardRelatorios onSelectCard={handleSectionSelect} />;
    };

    return (
        <div className={styles.container}>
            <RelatoriosHeader />

            {viewMode === 'wizard' ? (
                renderContent()
            ) : viewMode === 'dashboard' ? (
                <DashboardRelatorios onSelectCard={handleSectionSelect} />
            ) : (
                <div className={styles.contentCard}>
                    <div className={styles.contentHeader}>
                        <h2>{sectionLabel}</h2>
                        <button type="button" className={styles.backLink} onClick={handleVoltarInicio}>
                            Voltar ao início
                        </button>
                    </div>

                    {renderContent()}
                </div>
            )}
        </div>
    );
};

export default DadosEscolares;

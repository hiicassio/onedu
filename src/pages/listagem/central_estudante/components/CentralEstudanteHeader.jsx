import { useNavigate } from 'react-router-dom';
import ArrowSmallLeftIcon from '../../historico_escolar/icones/ArrowSmallLeftIcon';
import BellSchoolIcon from '../../historico_escolar/icones/BellSchoolIcon';
import CalendarIcon from '../../historico_escolar/icones/CalendarIcon';
import InfoIcon from '../../historico_escolar/icones/InfoIcon';
import styles from './CentralEstudanteHeader.module.scss';

const ViewChartIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden>
        <rect x="1" y="8" width="3" height="7" rx="1" fill="currentColor" />
        <rect x="6" y="5" width="3" height="10" rx="1" fill="currentColor" />
        <rect x="11" y="2" width="3" height="13" rx="1" fill="currentColor" />
    </svg>
);

const ViewAlertIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 1.5L14.5 13H1.5L8 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 6V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="8" cy="11.2" r="0.7" fill="currentColor" />
    </svg>
);

const ViewGradesIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden>
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 6H11M5 8.5H11M5 11H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
);

const ViewCalendarIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden>
        <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 1.5V4.5M11 1.5V4.5M2 7H14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
);

const ViewSummaryIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 8L8 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M8 8L10.8 9.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
);

export const CENTRAL_VIEWS = [
    { id: 1, label: 'Aprendizagem', Icon: ViewChartIcon },
    { id: 2, label: 'Ocorrências', Icon: ViewAlertIcon },
    { id: 3, label: 'Notas', Icon: ViewGradesIcon },
    { id: 4, label: 'Frequência', Icon: ViewCalendarIcon },
    { id: 5, label: 'Resumo', Icon: ViewSummaryIcon },
];

const CentralEstudanteHeader = ({ activeView, onViewChange }) => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.titleArea}>
                    <h1 className={styles.title}>Central do Estudante</h1>
                    <InfoIcon className={styles.infoIcon} />
                </div>

                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.backButton}
                        onClick={() => navigate('/gestao-matricula')}
                        title="Voltar para Gestão de Matrículas"
                    >
                        <ArrowSmallLeftIcon />
                    </button>

                    <button type="button" className={styles.contextButton} title="Gestão de Matrículas">
                        <BellSchoolIcon />
                    </button>

                    <button type="button" className={styles.breadcrumbButton}>
                        <CalendarIcon />
                        <span className={styles.divider} />
                        <span className={styles.breadcrumbText}>Ações na Matrícula</span>
                    </button>
                </div>
            </div>

            <div className={styles.viewSwitcher} role="tablist" aria-label="Telas da Central do Estudante">
                {CENTRAL_VIEWS.map(({ id, label, Icon }) => (
                    <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={activeView === id}
                        aria-label={label}
                        title={label}
                        className={`${styles.viewButton} ${activeView === id ? styles.viewButtonActive : ''}`}
                        onClick={() => onViewChange(id)}
                    >
                        <Icon />
                    </button>
                ))}
            </div>
        </header>
    );
};

export default CentralEstudanteHeader;

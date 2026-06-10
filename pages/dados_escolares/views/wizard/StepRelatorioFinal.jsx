import FormSection from '../../../../components/form/FormSection';
import FeatherPrinterIcon from '../../../analise_candidato/icones/FeatherPrinterIcon';
import ConvertDocumentIcon from '../../../listagem/gestao_matricula/icones/ConvertDocumentIcon';
import { WIZARD_TURMAS } from '../../data/mockReports';
import styles from './WizardSteps.module.scss';

const StepRelatorioFinal = ({ wizardData, reportName }) => {
    const turmaLabel = WIZARD_TURMAS.find((t) => t.value === wizardData.turma)?.label ?? wizardData.turma;

    return (
        <div className={styles.step}>
            <FormSection title="Relatório Gerado:">
                <div className={styles.reportCard}>
                    <div className={styles.reportHeader}>
                        <h3>{reportName ?? 'Relatório Escolar'}</h3>
                        <span>Gerado em {new Date().toLocaleDateString('pt-BR')}</span>
                    </div>

                    <div className={styles.reportMeta}>
                        <p><strong>Ano letivo:</strong> {wizardData.ano}</p>
                        <p><strong>Turma:</strong> {turmaLabel}</p>
                        <p><strong>Campos selecionados:</strong> {wizardData.campos.length}</p>
                    </div>

                    <div className={styles.reportSummary}>
                        <div className={styles.summaryItem}>
                            <span>Total de alunos</span>
                            <strong>32</strong>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Média geral</span>
                            <strong>7,6</strong>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Frequência média</span>
                            <strong>91%</strong>
                        </div>
                    </div>

                    <div className={styles.exportActions}>
                        <button type="button" className={styles.exportBtn}>
                            <FeatherPrinterIcon />
                            <span>Imprimir</span>
                        </button>
                        <button type="button" className={`${styles.exportBtn} ${styles.exportBtnPrimary}`}>
                            <ConvertDocumentIcon />
                            <span>Exportar PDF</span>
                        </button>
                    </div>

                    <p className={styles.reportNote}>
                        Relatório pronto para exportação. As ações de impressão e download serão
                        conectadas à API na próxima etapa.
                    </p>
                </div>
            </FormSection>
        </div>
    );
};

export default StepRelatorioFinal;

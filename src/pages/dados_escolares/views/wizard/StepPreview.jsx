import FormSection from '../../../../components/form/FormSection';
import { WIZARD_CAMPOS, WIZARD_TURMAS } from '../../data/mockReports';
import styles from './WizardSteps.module.scss';

const MOCK_ROWS = [
    { nome: 'Ana Clara Souza', matricula: '2024001234', turma: '3º Ano A', frequencia: '96%', media: '8,4', situacao: 'Aprovado' },
    { nome: 'Bruno Henrique Lima', matricula: '2024001235', turma: '3º Ano A', frequencia: '88%', media: '7,2', situacao: 'Aprovado' },
    { nome: 'Carla Mendes Rocha', matricula: '2024001236', turma: '3º Ano A', frequencia: '72%', media: '6,1', situacao: 'Recuperação' },
];

const StepPreview = ({ wizardData }) => {
    const turmaLabel = WIZARD_TURMAS.find((t) => t.value === wizardData.turma)?.label ?? wizardData.turma;
    const campos = WIZARD_CAMPOS.filter((c) => wizardData.campos.includes(c.id));

    return (
        <div className={styles.step}>
            <FormSection title="Pré-visualização:">
                <p className={styles.hint}>
                    Ano letivo <strong>{wizardData.ano}</strong> · Turma <strong>{turmaLabel}</strong>
                </p>

                <div className={styles.previewTable}>
                    <div className={styles.previewHeader}>
                        {campos.map((campo) => (
                            <div key={campo.id} className={styles.previewTh}>
                                {campo.label}
                            </div>
                        ))}
                    </div>

                    {MOCK_ROWS.map((row, index) => (
                        <div key={index} className={styles.previewRow}>
                            {campos.map((campo) => (
                                <div key={campo.id} className={styles.previewTd}>
                                    {row[campo.id]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </FormSection>
        </div>
    );
};

export default StepPreview;

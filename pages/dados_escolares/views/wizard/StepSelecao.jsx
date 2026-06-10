import FormSection from '../../../../components/form/FormSection';
import { WIZARD_TEMPLATES } from '../../data/mockReports';
import styles from './WizardSteps.module.scss';

const StepSelecao = ({ reportName, value, onChange }) => (
    <div className={styles.step}>
        <FormSection title="Seleção do Modelo:">
            {reportName && (
                <p className={styles.hint}>
                    Relatório base: <strong>{reportName}</strong>
                </p>
            )}

            <div className={styles.optionList}>
                {WIZARD_TEMPLATES.map((template) => (
                    <label key={template.id} className={styles.optionItem}>
                        <input
                            type="radio"
                            name="template"
                            value={template.id}
                            checked={value === template.id}
                            onChange={() => onChange(template.id)}
                        />
                        <span>{template.label}</span>
                    </label>
                ))}
            </div>
        </FormSection>
    </div>
);

export default StepSelecao;

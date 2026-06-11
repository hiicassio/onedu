import FormSection from '../../../../components/form/FormSection';
import FormSelect from '../../../../components/form/FormSelect';
import { WIZARD_ANOS, WIZARD_CAMPOS, WIZARD_TURMAS } from '../../data/mockReports';
import styles from './WizardSteps.module.scss';

const StepParametros = ({ wizardData, onChange }) => {
    const toggleCampo = (campoId) => {
        const campos = wizardData.campos.includes(campoId)
            ? wizardData.campos.filter((id) => id !== campoId)
            : [...wizardData.campos, campoId];

        onChange({ campos });
    };

    return (
        <div className={styles.step}>
            <FormSection title="Filtros e Parâmetros:">
                <div className={styles.formGrid}>
                    <FormSelect
                        label="Ano Letivo"
                        name="ano"
                        options={WIZARD_ANOS}
                        bg
                        value={wizardData.ano}
                        onChange={(e) => onChange({ ano: e.target.value })}
                    />

                    <FormSelect
                        label="Turma"
                        name="turma"
                        options={WIZARD_TURMAS}
                        bg
                        value={wizardData.turma}
                        onChange={(e) => onChange({ turma: e.target.value })}
                    />
                </div>

                <div className={styles.checkboxGroup}>
                    <span className={styles.checkboxLabel}>Campos do relatório</span>
                    {WIZARD_CAMPOS.map((campo) => (
                        <label key={campo.id} className={styles.checkboxItem}>
                            <input
                                type="checkbox"
                                checked={wizardData.campos.includes(campo.id)}
                                onChange={() => toggleCampo(campo.id)}
                            />
                            <span>{campo.label}</span>
                        </label>
                    ))}
                </div>
            </FormSection>
        </div>
    );
};

export default StepParametros;

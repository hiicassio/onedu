import FormSection from '../../form/FormSection';
import FormField from '../../form/FormField';
import FormSelect from '../../form/FormSelect';
import styles from './PersonalDataForm.module.scss';

const DEFICIENCIA_OPTIONS = [
    { value: 'sim', label: 'Sim' },
    { value: 'nao', label: 'Não' },
];

const TIPO_SANGUINEO_OPTIONS = [
    { value: 'a_positivo', label: 'A+' },
    { value: 'a_negativo', label: 'A-' },
    { value: 'b_positivo', label: 'B+' },
    { value: 'b_negativo', label: 'B-' },
    { value: 'ab_positivo', label: 'AB+' },
    { value: 'ab_negativo', label: 'AB-' },
    { value: 'o_positivo', label: 'O+' },
    { value: 'o_negativo', label: 'O-' },
];

const SaudeForm = ({ formData, handleFormChange }) => {
    const data = formData.saude;

    const onChange = (field) => (e) => {
        handleFormChange('saude', { [field]: e.target.value });
    };

    return (
        <div className={styles.personalDataForm}>
            <FormSection title="Informações de Saúde:">
                <div className={styles.formGrid}>
                    <FormSelect
                        label="Possui Deficiência?"
                        name="possui_deficiencia"
                        placeholder="Selecione"
                        options={DEFICIENCIA_OPTIONS}
                        bg
                        value={data.possui_deficiencia ?? ''}
                        onChange={onChange('possui_deficiencia')}
                    />

                    <FormField
                        label="Qual Deficiência?"
                        name="qual_deficiencia"
                        placeholder="Descreva a deficiência, se houver"
                        bg
                        value={data.qual_deficiencia ?? ''}
                        onChange={onChange('qual_deficiencia')}
                    />

                    <div className={styles.fullWidth}>
                        <FormField
                            label="Alergias a medicamentos ou alimentos?"
                            name="alergias"
                            placeholder="Informe alergias conhecidas"
                            bg
                            value={data.alergias ?? ''}
                            onChange={onChange('alergias')}
                        />
                    </div>

                    <div className={styles.fullWidth}>
                        <FormField
                            label="Toma medicação contínua?"
                            name="medicacao_continua"
                            placeholder="Informe medicamentos de uso contínuo"
                            bg
                            value={data.medicacao_continua ?? ''}
                            onChange={onChange('medicacao_continua')}
                        />
                    </div>

                    <FormSelect
                        label="Tipo Sanguíneo"
                        name="tipo_sanguineo"
                        placeholder="Selecione o tipo sanguíneo"
                        options={TIPO_SANGUINEO_OPTIONS}
                        bg
                        value={data.tipo_sanguineo ?? ''}
                        onChange={onChange('tipo_sanguineo')}
                    />
                </div>
            </FormSection>
        </div>
    );
};

export default SaudeForm;

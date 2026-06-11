import FormSection from '../../form/FormSection';
import FormField from '../../form/FormField';
import FormSelect from '../../form/FormSelect';
import styles from './PersonalDataForm.module.scss';

const RESPONSAVEL_OPTIONS = [
    { value: 'mae', label: 'Mãe' },
    { value: 'pai', label: 'Pai' },
    { value: 'outro', label: 'Outro' },
];

const FiliacaoForm = ({ formData, handleFormChange }) => {
    const data = formData.filiacao;

    const onChange = (field) => (e) => {
        handleFormChange('filiacao', { [field]: e.target.value });
    };

    return (
        <div className={styles.personalDataForm}>
            <FormSection title="Dados da Mãe:">
                <div className={styles.formGrid}>
                    <div className={styles.fullWidth}>
                        <FormField
                            label="Nome Completo da Mãe"
                            name="nome_mae"
                            placeholder="Nome completo da mãe"
                            bg
                            value={data.nome_mae ?? ''}
                            onChange={onChange('nome_mae')}
                        />
                    </div>

                    <FormField
                        label="CPF da Mãe"
                        name="cpf_mae"
                        placeholder="000.000.000-00"
                        bg
                        value={data.cpf_mae ?? ''}
                        onChange={onChange('cpf_mae')}
                    />

                    <FormField
                        label="Telefone da Mãe"
                        name="telefone_mae"
                        placeholder="(00) 00000-0000"
                        bg
                        value={data.telefone_mae ?? ''}
                        onChange={onChange('telefone_mae')}
                    />

                    <div className={styles.fullWidth}>
                        <FormField
                            label="Profissão da Mãe"
                            name="profissao_mae"
                            placeholder="Profissão da mãe"
                            bg
                            value={data.profissao_mae ?? ''}
                            onChange={onChange('profissao_mae')}
                        />
                    </div>
                </div>
            </FormSection>

            <FormSection title="Dados do Pai:">
                <div className={styles.formGrid}>
                    <div className={styles.fullWidth}>
                        <FormField
                            label="Nome Completo do Pai"
                            name="nome_pai"
                            placeholder="Nome completo do pai"
                            bg
                            value={data.nome_pai ?? ''}
                            onChange={onChange('nome_pai')}
                        />
                    </div>

                    <FormField
                        label="CPF do Pai"
                        name="cpf_pai"
                        placeholder="000.000.000-00"
                        bg
                        value={data.cpf_pai ?? ''}
                        onChange={onChange('cpf_pai')}
                    />

                    <FormField
                        label="Telefone do Pai"
                        name="telefone_pai"
                        placeholder="(00) 00000-0000"
                        bg
                        value={data.telefone_pai ?? ''}
                        onChange={onChange('telefone_pai')}
                    />

                    <div className={styles.fullWidth}>
                        <FormField
                            label="Profissão do Pai"
                            name="profissao_pai"
                            placeholder="Profissão do pai"
                            bg
                            value={data.profissao_pai ?? ''}
                            onChange={onChange('profissao_pai')}
                        />
                    </div>
                </div>
            </FormSection>

            <FormSection title="Responsável Legal:">
                <div className={styles.formGrid}>
                    <div className={styles.fullWidth}>
                        <FormSelect
                            label="Quem é o responsável legal e financeiro?"
                            name="responsavel_legal"
                            placeholder="Selecione o responsável"
                            options={RESPONSAVEL_OPTIONS}
                            bg
                            value={data.responsavel_legal ?? ''}
                            onChange={onChange('responsavel_legal')}
                        />
                    </div>
                </div>
            </FormSection>
        </div>
    );
};

export default FiliacaoForm;

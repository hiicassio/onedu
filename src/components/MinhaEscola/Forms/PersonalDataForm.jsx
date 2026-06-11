import FormSection from '../../form/FormSection';
import FormField from '../../form/FormField';
import FormSelect from '../../form/FormSelect';
import styles from './PersonalDataForm.module.scss';

const GENERO_OPTIONS = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outro', label: 'Outro' },
    { value: 'nao_informado', label: 'Prefiro não informar' },
];

const COR_RACA_OPTIONS = [
    { value: 'branca', label: 'Branca' },
    { value: 'preta', label: 'Preta' },
    { value: 'parda', label: 'Parda' },
    { value: 'amarela', label: 'Amarela' },
    { value: 'indigena', label: 'Indígena' },
    { value: 'nao_declarada', label: 'Não declarada' },
];

const PersonalDataForm = ({ formData, handleFormChange }) => {
    const data = formData.dadosPessoais;

    const onChange = (field) => (e) => {
        handleFormChange('dadosPessoais', { [field]: e.target.value });
    };

    return (
        <div className={styles.personalDataForm}>
            <FormSection title="Dados Pessoais:">
                <div className={styles.formGrid}>
                    <div className={styles.fullWidth}>
                        <FormField
                            label="Nome Completo"
                            name="nome_completo"
                            placeholder="Nome completo do aluno"
                            bg
                            value={data.nome_completo ?? ''}
                            onChange={onChange('nome_completo')}
                        />
                    </div>

                    <FormField
                        label="Data de Nascimento"
                        name="data_nascimento"
                        type="date"
                        bg
                        value={data.data_nascimento ?? ''}
                        onChange={onChange('data_nascimento')}
                    />

                    <FormField
                        label="CPF"
                        name="cpf"
                        placeholder="000.000.000-00"
                        bg
                        value={data.cpf ?? ''}
                        onChange={onChange('cpf')}
                    />

                    <FormField
                        label="RG"
                        name="rg"
                        placeholder="Número do RG"
                        bg
                        value={data.rg ?? ''}
                        onChange={onChange('rg')}
                    />

                    <FormSelect
                        label="Gênero"
                        name="genero"
                        placeholder="Selecione o gênero"
                        options={GENERO_OPTIONS}
                        bg
                        value={data.genero ?? ''}
                        onChange={onChange('genero')}
                    />

                    <FormSelect
                        label="Cor/Raça"
                        name="cor_raca"
                        placeholder="Selecione a cor/raça"
                        options={COR_RACA_OPTIONS}
                        bg
                        value={data.cor_raca ?? ''}
                        onChange={onChange('cor_raca')}
                    />

                    <FormField
                        label="Nacionalidade"
                        name="nacionalidade"
                        placeholder="Ex: Brasileira"
                        bg
                        value={data.nacionalidade ?? ''}
                        onChange={onChange('nacionalidade')}
                    />

                    <FormField
                        label="Naturalidade"
                        name="naturalidade"
                        placeholder="Cidade de nascimento"
                        bg
                        value={data.naturalidade ?? ''}
                        onChange={onChange('naturalidade')}
                    />
                </div>
            </FormSection>
        </div>
    );
};

export default PersonalDataForm;

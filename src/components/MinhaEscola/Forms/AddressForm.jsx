import FormSection from '../../form/FormSection';
import FormField from '../../form/FormField';
import FormSelect from '../../form/FormSelect';
import styles from './PersonalDataForm.module.scss';
import mapaPlaceholder from '../../../assets/img/mapaplaceholder.png';

const UF_OPTIONS = [
    { value: 'AC', label: 'AC' },
    { value: 'AL', label: 'AL' },
    { value: 'AP', label: 'AP' },
    { value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },
    { value: 'CE', label: 'CE' },
    { value: 'DF', label: 'DF' },
    { value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },
    { value: 'MA', label: 'MA' },
    { value: 'MT', label: 'MT' },
    { value: 'MS', label: 'MS' },
    { value: 'MG', label: 'MG' },
    { value: 'PA', label: 'PA' },
    { value: 'PB', label: 'PB' },
    { value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },
    { value: 'PI', label: 'PI' },
    { value: 'RJ', label: 'RJ' },
    { value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },
    { value: 'RO', label: 'RO' },
    { value: 'RR', label: 'RR' },
    { value: 'SC', label: 'SC' },
    { value: 'SP', label: 'SP' },
    { value: 'SE', label: 'SE' },
    { value: 'TO', label: 'TO' },
];

const AddressForm = ({ formData, handleFormChange }) => {
    const data = formData.endereco;

    const onChange = (field) => (e) => {
        handleFormChange('endereco', { [field]: e.target.value });
    };

    return (
        <div className={styles.personalDataForm}>
            <FormSection title="Endereço:">
                <div className={styles.formGrid}>
                    <FormField
                        label="CEP"
                        name="cep"
                        placeholder="00000-000"
                        bg
                        value={data.cep ?? ''}
                        onChange={onChange('cep')}
                    />

                    <FormSelect
                        label="UF (Estado)"
                        name="uf"
                        placeholder="Selecione o estado"
                        options={UF_OPTIONS}
                        bg
                        value={data.uf ?? ''}
                        onChange={onChange('uf')}
                    />

                    <div className={styles.fullWidth}>
                        <FormField
                            label="Logradouro (Rua/Avenida)"
                            name="logradouro"
                            placeholder="Nome da rua ou avenida"
                            bg
                            value={data.logradouro ?? ''}
                            onChange={onChange('logradouro')}
                        />
                    </div>

                    <FormField
                        label="Número"
                        name="numero"
                        placeholder="Nº"
                        bg
                        value={data.numero ?? ''}
                        onChange={onChange('numero')}
                    />

                    <FormField
                        label="Complemento"
                        name="complemento"
                        placeholder="Apto, bloco, etc."
                        bg
                        value={data.complemento ?? ''}
                        onChange={onChange('complemento')}
                    />

                    <FormField
                        label="Bairro"
                        name="bairro"
                        placeholder="Nome do bairro"
                        bg
                        value={data.bairro ?? ''}
                        onChange={onChange('bairro')}
                    />

                    <FormField
                        label="Cidade"
                        name="cidade"
                        placeholder="Nome da cidade"
                        bg
                        value={data.cidade ?? ''}
                        onChange={onChange('cidade')}
                    />
                </div>
            </FormSection>

            <FormSection title="Localização no Mapa:">
                <img className={styles.mapImage} src={mapaPlaceholder} alt="Mapa" />
            </FormSection>
        </div>
    );
};

export default AddressForm;

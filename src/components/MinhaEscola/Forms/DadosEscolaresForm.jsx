import { useState } from 'react';
import FormSection from '../../form/FormSection';
import FormField from '../../form/FormField';
import FormSelect from '../../form/FormSelect';
import styles from './PersonalDataForm.module.scss';
import inepIcon from '../../../assets/icones/inep.svg';

const ANO_SERIE_OPTIONS = [
    { value: '1_ano', label: '1º Ano' },
    { value: '2_ano', label: '2º Ano' },
    { value: '3_ano', label: '3º Ano' },
    { value: '4_ano', label: '4º Ano' },
    { value: '5_ano', label: '5º Ano' },
    { value: '6_ano', label: '6º Ano' },
    { value: '7_ano', label: '7º Ano' },
    { value: '8_ano', label: '8º Ano' },
    { value: '9_ano', label: '9º Ano' },
    { value: '1_serie', label: '1ª Série' },
    { value: '2_serie', label: '2ª Série' },
    { value: '3_serie', label: '3ª Série' },
];

const TURNO_OPTIONS = [
    { value: 'matutino', label: 'Matutino' },
    { value: 'vespertino', label: 'Vespertino' },
    { value: 'integral', label: 'Integral' },
];

const TRANSPORTE_OPTIONS = [
    { value: 'sim', label: 'Sim' },
    { value: 'nao', label: 'Não' },
];

const MOCK_INEP_DATA = {
    escola_origem: 'E.M. Profª Maria da Silva Santos',
    ano_serie: '6_ano',
    turno: 'matutino',
    necessita_transporte: 'sim',
};

const DadosEscolaresForm = ({ formData, handleFormChange }) => {
    const data = formData.dadosEscolares;
    const [isSearching, setIsSearching] = useState(false);

    const onChange = (field) => (e) => {
        handleFormChange('dadosEscolares', { [field]: e.target.value });
    };

    const handleBuscarInep = () => {
        const codigo = data.codigo_inep_nis?.trim();

        if (!codigo || !/^\d+$/.test(codigo)) {
            alert('Informe um código INEP válido (apenas números) antes de buscar.');
            return;
        }

        setIsSearching(true);

        setTimeout(() => {
            handleFormChange('dadosEscolares', {
                codigo_inep_nis: codigo,
                ...MOCK_INEP_DATA,
            });
            setIsSearching(false);
        }, 800);
    };

    return (
        <div className={styles.personalDataForm}>
            <FormSection title="Dados Escolares (INEP):">
                <div className={styles.formGrid}>
                    <FormField
                        label="Código INEP"
                        name="codigo_inep_nis"
                        placeholder="Informe o código INEP"
                        icon={<img src={inepIcon} alt="INEP" style={{ width: '15px', height: '15px' }} />}
                        bg
                        value={data.codigo_inep_nis ?? ''}
                        onChange={onChange('codigo_inep_nis')}
                        action={(
                            <button
                                type="button"
                                className={styles.inepSearchBtn}
                                onClick={handleBuscarInep}
                                disabled={isSearching}
                            >
                                {isSearching ? '...' : 'Buscar'}
                            </button>
                        )}
                    />

                    <FormField
                        label="Escola de Origem"
                        name="escola_origem"
                        placeholder="Nome da escola de origem"
                        bg
                        value={data.escola_origem ?? ''}
                        onChange={onChange('escola_origem')}
                    />

                    <FormSelect
                        label="Ano/Série Pretendida"
                        name="ano_serie"
                        placeholder="Selecione o ano/série"
                        options={ANO_SERIE_OPTIONS}
                        bg
                        value={data.ano_serie ?? ''}
                        onChange={onChange('ano_serie')}
                    />

                    <FormSelect
                        label="Turno"
                        name="turno"
                        placeholder="Selecione o turno"
                        options={TURNO_OPTIONS}
                        bg
                        value={data.turno ?? ''}
                        onChange={onChange('turno')}
                    />

                    <FormSelect
                        label="Necessita de Transporte Escolar?"
                        name="necessita_transporte"
                        placeholder="Selecione"
                        options={TRANSPORTE_OPTIONS}
                        bg
                        value={data.necessita_transporte ?? ''}
                        onChange={onChange('necessita_transporte')}
                    />
                </div>
            </FormSection>
        </div>
    );
};

export default DadosEscolaresForm;

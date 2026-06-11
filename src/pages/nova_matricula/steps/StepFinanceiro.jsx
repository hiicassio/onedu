import FormSection from '../../../components/form/FormSection';
import FormField from '../../../components/form/FormField';
import FormSelect from '../../../components/form/FormSelect';
import FormGrid from '../../../components/form/FormGrid';
import InfoAlertBox from '../../../components/form/InfoAlertBox';
import CalendarClockIcon from '../../analise_candidato/icones/CalendarClockIcon';

const RESPONSAVEL_OPTIONS = [
    { value: 'pai', label: 'Pai' },
    { value: 'mae', label: 'Mãe' },
    { value: 'tutor', label: 'Tutor legal' },
    { value: 'outro', label: 'Outro responsável' },
];

const PLANO_OPTIONS = [
    { value: 'mensal', label: 'Plano mensal' },
    { value: 'semestral', label: 'Plano semestral' },
    { value: 'anual', label: 'Plano anual' },
];

const FORMA_PAGAMENTO_OPTIONS = [
    { value: 'boleto', label: 'Boleto bancário' },
    { value: 'pix', label: 'PIX' },
    { value: 'cartao', label: 'Cartão de crédito' },
    { value: 'debito', label: 'Débito automático' },
];

const StepFinanceiro = () => (
    <>
        <FormSection title="Responsável Financeiro:">
            <FormSelect
                label="Responsável financeiro"
                name="responsavel_financeiro"
                placeholder="Selecione o responsável"
                options={RESPONSAVEL_OPTIONS}
                bg
            />

            <FormGrid>
                <FormField
                    label="Nome do responsável"
                    name="nome_responsavel"
                    placeholder="Nome completo"
                    bg
                />
                <FormField
                    label="CPF do responsável"
                    name="cpf_responsavel"
                    placeholder="000.000.000-00"
                    bg
                />
            </FormGrid>

            <FormField
                label="Contato do responsável"
                name="contato_responsavel"
                placeholder="(00) 00000-0000"
                bg
            />
        </FormSection>

        <FormSection title="Plano e Pagamento:">
            <FormGrid>
                <FormSelect
                    label="Plano de pagamento"
                    name="plano_pagamento"
                    placeholder="Selecione o plano"
                    options={PLANO_OPTIONS}
                    bg
                />
                <FormSelect
                    label="Forma de pagamento"
                    name="forma_pagamento"
                    placeholder="Selecione a forma"
                    options={FORMA_PAGAMENTO_OPTIONS}
                    bg
                />
            </FormGrid>

            <FormGrid>
                <FormField
                    label="Data de vencimento"
                    name="data_vencimento"
                    type="date"
                    bg
                    action={<CalendarClockIcon />}
                />
                <FormField
                    label="Desconto aplicado (%)"
                    name="desconto"
                    placeholder="0"
                    bg
                />
            </FormGrid>

            <InfoAlertBox title="Informação">
                Ao confirmar a matrícula, o responsável financeiro receberá as informações
                de cobrança e poderá acompanhar os débitos pelo portal da escola.
                Verifique os dados antes de avançar para a etapa de documentos.
            </InfoAlertBox>
        </FormSection>
    </>
);

export default StepFinanceiro;

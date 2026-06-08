import FormSection from '../../../components/form/FormSection';
import FormSelect from '../../../components/form/FormSelect';
import FormTextarea from '../../../components/form/FormTextarea';
import FormField from '../../../components/form/FormField';
import FormGrid from '../../../components/form/FormGrid';
import StudentInfoCard from '../../../components/form/StudentInfoCard';
import DocumentIcon from '../../analise_candidato/icones/DocumentIcon';
import CalendarClockIcon from '../../analise_candidato/icones/CalendarClockIcon';
import user from '../../analise_candidato/img/user.png';

const MOTIVO_OPTIONS = [
    { value: 'transferencia', label: 'Transferência para outra escola' },
    { value: 'mudanca', label: 'Mudança de endereço' },
    { value: 'financeiro', label: 'Motivos financeiros' },
    { value: 'pessoal', label: 'Motivos pessoais' },
    { value: 'outro', label: 'Outro' },
];

const StepMotivo = () => (
    <>
        <FormSection title="Aluno:">
            <StudentInfoCard
                avatar={user}
                name="Maria Isabela de Oliveira Santos"
                fields={[
                    { label: 'Matrícula', name: 'matricula_resumo', placeholder: '000000' },
                    { label: 'Turma', name: 'turma_resumo', placeholder: '3º Ano A' },
                ]}
            />
        </FormSection>

        <FormSection title="Motivo do Desligamento:">
            <FormSelect
                label="Motivo do desligamento"
                name="motivo_desligamento"
                placeholder="Selecione o motivo"
                options={MOTIVO_OPTIONS}
                icon={<DocumentIcon />}
                bg
            />

            <FormGrid>
                <FormField
                    label="Data do desligamento"
                    name="data_desligamento"
                    type="date"
                    bg
                    action={<CalendarClockIcon />}
                />
                <FormField
                    label="Data do registro"
                    name="data_registro"
                    type="date"
                    bg
                />
            </FormGrid>

            <FormTextarea
                label="Observações adicionais"
                name="observacoes"
                placeholder="Descreva detalhes relevantes sobre o desligamento..."
            />
        </FormSection>
    </>
);

export default StepMotivo;

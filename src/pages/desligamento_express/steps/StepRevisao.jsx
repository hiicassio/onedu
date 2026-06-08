import FormSection from '../../../components/form/FormSection';
import SummaryRow from '../../../components/form/SummaryRow';
import StudentInfoCard from '../../../components/form/StudentInfoCard';
import styles from '../../../components/form/FormComponents.module.scss';
import user from '../../analise_candidato/img/user.png';

const StepRevisao = () => (
    <>
        <FormSection title="Aluno:">
            <StudentInfoCard
                avatar={user}
                name="Maria Isabela de Oliveira Santos"
                fields={[
                    { label: 'Matrícula', name: 'matricula_final', placeholder: '000000' },
                    { label: 'Unidade', name: 'unidade_final', placeholder: 'Unidade Escolar' },
                ]}
            />
        </FormSection>

        <FormSection title="Resumo do Desligamento:">
            <div className={styles.summaryList}>
                <SummaryRow label="Motivo" placeholder="Selecione o motivo na etapa anterior" />
                <SummaryRow label="Data do desligamento" placeholder="DD/MM/AAAA" />
                <SummaryRow label="Data do registro" placeholder="DD/MM/AAAA" />
                <SummaryRow label="Observações" placeholder="Nenhuma observação informada" />
                <SummaryRow label="Termos aceitos" placeholder="Pendente" />
            </div>
        </FormSection>
    </>
);

export default StepRevisao;

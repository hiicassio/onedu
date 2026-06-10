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
                name="Nome do aluno"
                fields={[
                    { label: 'CPF', name: 'cpf_resumo', placeholder: '000.000.000-00' },
                    { label: 'Data de nascimento', name: 'nascimento_resumo', placeholder: 'DD/MM/AAAA' },
                ]}
            />
        </FormSection>

        <FormSection title="Matrícula:">
            <div className={styles.summaryList}>
                <SummaryRow label="Unidade escolar" placeholder="Unidade selecionada" />
                <SummaryRow label="Série / Ano" placeholder="Série selecionada" />
                <SummaryRow label="Turma" placeholder="Turma selecionada" />
                <SummaryRow label="Turno" placeholder="Turno selecionado" />
            </div>
        </FormSection>

        <FormSection title="Financeiro:">
            <div className={styles.summaryList}>
                <SummaryRow label="Responsável financeiro" placeholder="Responsável selecionado" />
                <SummaryRow label="Plano de pagamento" placeholder="Plano selecionado" />
                <SummaryRow label="Forma de pagamento" placeholder="Forma selecionada" />
            </div>
        </FormSection>

        <FormSection title="Documentos:">
            <div className={styles.summaryList}>
                <SummaryRow label="Documentos enviados" placeholder="0 de 6 documentos" />
            </div>
        </FormSection>
    </>
);

export default StepRevisao;

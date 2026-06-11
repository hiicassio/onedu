import FormSection from '../../../components/form/FormSection';
import FormCheckbox from '../../../components/form/FormCheckbox';
import InfoAlertBox from '../../../components/form/InfoAlertBox';
import StudentInfoCard from '../../../components/form/StudentInfoCard';
import user from '../../analise_candidato/img/user.png';

const StepTermos = () => (
    <>
        <FormSection title="Aluno:">
            <StudentInfoCard
                avatar={user}
                name="Maria Isabela de Oliveira Santos"
            />
        </FormSection>

        <FormSection title="Termos de Aceite:">
            <InfoAlertBox title="Atenção">
                Ao confirmar o desligamento, o aluno terá sua matrícula encerrada nesta unidade escolar.
                Esta ação gera documentação oficial e pode impactar o histórico escolar, frequência
                e vínculos financeiros pendentes. Certifique-se de que todas as informações estão
                corretas antes de prosseguir, em conformidade com a LGPD e regulamentos da rede.
            </InfoAlertBox>

            <FormCheckbox
                name="aceite_termos"
                id="aceite_termos_desligamento"
                label="Li e concordo com os termos de desligamento"
            />
        </FormSection>
    </>
);

export default StepTermos;

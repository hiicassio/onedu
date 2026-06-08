import FormSection from '../../../components/form/FormSection';
import FormField from '../../../components/form/FormField';
import FormGrid from '../../../components/form/FormGrid';
import StudentInfoCard from '../../../components/form/StudentInfoCard';
import FeatherSearchIcon from '../../analise_candidato/icones/FeatherSearchIcon';
import user from '../../analise_candidato/img/user.png';

const StepIdentificacao = () => (
    <>
        <FormSection title="Buscar Aluno:">
            <FormField
                label="Aluno"
                name="busca_aluno"
                placeholder="Digite o nome, matrícula ou CPF do aluno"
                avatar={user}
                action={<FeatherSearchIcon />}
            />
        </FormSection>

        <FormSection title="Aluno Selecionado:">
            <StudentInfoCard
                avatar={user}
                name="Maria Isabela de Oliveira Santos"
                fields={[
                    { label: 'Matrícula', name: 'matricula', placeholder: '000000' },
                    { label: 'Série', name: 'serie', placeholder: '3º Ano' },
                    { label: 'Turma', name: 'turma', placeholder: 'A' },
                    { label: 'Unidade', name: 'unidade', placeholder: 'Unidade Escolar' },
                ]}
            />
        </FormSection>
    </>
);

export default StepIdentificacao;

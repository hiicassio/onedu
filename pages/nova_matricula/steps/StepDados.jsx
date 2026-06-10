import FormSection from '../../../components/form/FormSection';
import FormField from '../../../components/form/FormField';
import FormGrid from '../../../components/form/FormGrid';
import FeatherSearchIcon from '../../analise_candidato/icones/FeatherSearchIcon';
import user from '../../analise_candidato/img/user.png';

const StepDados = () => (
    <>
        <FormSection title="Identificação do Aluno:">
            <FormField
                label="Aluno"
                name="busca_aluno"
                placeholder="Digite o nome ou CPF do aluno"
                avatar={user}
                action={<FeatherSearchIcon />}
            />
        </FormSection>

        <FormSection title="Dados Pessoais:">
            <FormField
                label="Nome do aluno"
                name="nome_aluno"
                placeholder="Nome completo do aluno"
                bg
            />

            <FormGrid>
                <FormField
                    label="CPF"
                    name="cpf"
                    placeholder="000.000.000-00"
                    bg
                />
                <FormField
                    label="Data de nascimento"
                    name="data_nascimento"
                    type="date"
                    bg
                />
            </FormGrid>

            <FormGrid>
                <FormField
                    label="RG"
                    name="rg"
                    placeholder="Número do RG"
                    bg
                />
                <FormField
                    label="Contato"
                    name="contato"
                    placeholder="(00) 00000-0000"
                    bg
                />
            </FormGrid>
        </FormSection>

        <FormSection title="Informações de Matrícula:">
            <FormGrid>
                <FormField
                    label="Unidade escolar"
                    name="unidade_escolar"
                    placeholder="Selecione a unidade"
                    bg
                />
                <FormField
                    label="Série / Ano"
                    name="serie"
                    placeholder="Ex: 3º Ano"
                    bg
                />
            </FormGrid>

            <FormGrid>
                <FormField
                    label="Turma"
                    name="turma"
                    placeholder="Ex: A"
                    bg
                />
                <FormField
                    label="Turno"
                    name="turno"
                    placeholder="Ex: Matutino"
                    bg
                />
            </FormGrid>
        </FormSection>
    </>
);

export default StepDados;

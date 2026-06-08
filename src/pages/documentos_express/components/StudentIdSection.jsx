import FormSection from '../../../components/form/FormSection';
import FormField from '../../../components/form/FormField';
import FormGrid from '../../../components/form/FormGrid';
import WALogoIcon from '../../analise_candidato/icones/WALogoIcon';
import FeatherSearchIcon from '../../analise_candidato/icones/FeatherSearchIcon';
import CalendarClockIcon from '../../analise_candidato/icones/CalendarClockIcon';
import user from '../../analise_candidato/img/user.png';

/** Ícone inline de refresh/protocolo */
const RefreshIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12a8 8 0 0 1 13.66-5.66L20 9H15V4l2.39 2.34A10 10 0 1 0 21.9 13h-2.02A8 8 0 0 1 4 12z" fill="currentColor"/>
    </svg>
);

/**
 * Seção "Identificação de Aluno" reutilizada em ViewFormulario e ViewGerado.
 * `readOnly` desabilita campos após a geração do documento.
 */
const StudentIdSection = ({ readOnly = false }) => (
    <FormSection title="Identificação de Aluno:">
        <FormGrid>
            <FormField
                label="Aluno"
                name="nome"
                placeholder="Nome do aluno"
                avatar={user}
                action={readOnly ? null : <FeatherSearchIcon />}
            />
            <FormField
                label="Protocolo"
                name="protocolo"
                placeholder="Gerado automaticamente"
                icon={<CalendarClockIcon />}
                action={readOnly ? null : <RefreshIcon />}
            />
        </FormGrid>

        <FormGrid>
            <FormField label="IDSGP"     name="idsgp"     placeholder="000000"           bg />
            <FormField label="Matrícula" name="matricula" placeholder="0000000"           bg />
            <FormField label="Contato"   name="contato"   placeholder="(00) 00000-0000"  bg action={<WALogoIcon />} />
        </FormGrid>

        <FormGrid>
            <FormField label="Nível/Turma"  name="nivel_turma"  placeholder="Ex: 2º ANO B"          bg />
            <FormField label="Responsável"  name="responsavel"  placeholder="Nome do responsável"    bg action={<WALogoIcon />} />
        </FormGrid>
    </FormSection>
);

export default StudentIdSection;

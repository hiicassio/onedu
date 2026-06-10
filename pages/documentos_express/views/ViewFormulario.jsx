import FormSection from '../../../components/form/FormSection';
import FormDocRow from '../../../components/form/FormDocRow';
import GovBrButton from '../../../components/form/GovBrButton';
import FormToggle from '../../../components/form/FormToggle';
import StudentIdSection from '../components/StudentIdSection';
import styles from '../../../components/form/FormComponents.module.scss';
import DocumentIcon from '../../analise_candidato/icones/DocumentIcon';
import EyeIcon from '../../analise_candidato/icones/EyeIcon';
import WALogoIcon from '../../analise_candidato/icones/WALogoIcon';

const CLASSIFICACAO_OPTIONS = [
    { value: 'vida_escolar',   label: 'Vida Escolar' },
    { value: 'administrativo', label: 'Administrativo' },
    { value: 'financeiro',     label: 'Financeiro' },
];

const TIPO_DOC_OPTIONS = [
    { value: 'declaracao_matricula',  label: 'Declaração de Matrícula' },
    { value: 'historico',             label: 'Histórico Escolar' },
    { value: 'guia_transferencia',    label: 'Guia de Transferência' },
    { value: 'ficha_individual',      label: 'Ficha Individual do Aluno' },
    { value: 'dispensa_religioso',    label: 'Requerimento de Dispensa – Ensino Religioso' },
    { value: 'atestado_frequencia',   label: 'Atestado de Frequência' },
];

const ASSINATURA_OPTIONS = [
    { value: 'digital', label: 'Assinatura Digital' },
    { value: 'fisica',  label: 'Assinatura Física' },
    { value: 'sem',     label: 'Sem Assinatura' },
];

/** Ícone de monitor inline */
const MonitorIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

/** Ícone de cópia inline */
const CopyIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const ViewFormulario = () => (
    <>
        <StudentIdSection />

        <div className={styles.formDivider} />

        <FormSection title="Informações do documento">
            {/* Classificação */}
            <FormDocRow
                icon={<DocumentIcon />}
                label="Classificação"
                name="classificacao"
                options={CLASSIFICACAO_OPTIONS}
                defaultValue="vida_escolar"
            >
                <div className={styles.formDocAction} title="Enviar por WhatsApp"><WALogoIcon /></div>
                <div className={styles.formDocAction} title="Visualizar documento"><MonitorIcon /></div>
            </FormDocRow>

            {/* Tipo de Documento */}
            <FormDocRow
                icon={<DocumentIcon />}
                label="Tipo de Documento"
                name="tipo_documento"
                options={TIPO_DOC_OPTIONS}
                defaultValue="declaracao_matricula"
            >
                <div className={styles.formDocAction} title="Copiar"><CopyIcon /></div>
            </FormDocRow>

            {/* Modelo de Assinatura */}
            <FormDocRow
                icon={<DocumentIcon />}
                label="Modelo de Assinatura"
                name="modelo_assinatura"
                options={ASSINATURA_OPTIONS}
                defaultValue="digital"
            >
                <GovBrButton />
            </FormDocRow>
        </FormSection>

        <FormSection title="Observação:">
            <div className={styles.formTextareaBlue}>
                <textarea name="observacao" placeholder="Digite a observação aqui..." />
            </div>
        </FormSection>

        {/* Toggles de envio */}
        <div className={styles.formToggleRow}>
            <FormToggle label="Enviar por Whatsapp"    name="enviar_whatsapp" defaultChecked />
            <FormToggle label="Enviar Cópia por Email" name="enviar_email"    defaultChecked />
        </div>
    </>
);

export default ViewFormulario;

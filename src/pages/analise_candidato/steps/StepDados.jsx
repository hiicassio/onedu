import FormSection from '../../../components/form/FormSection';
import FormField from '../../../components/form/FormField';
import FormGrid from '../../../components/form/FormGrid';
import styles from '../../../components/form/FormComponents.module.scss';
import FeatherSearchIcon from '../icones/FeatherSearchIcon';
import WALogoIcon from '../icones/WALogoIcon';
import CalendarClockIcon from '../icones/CalendarClockIcon';
import user from '../img/user.png';

const StepDados = () => (
    <>
        <FormSection title="Identificação de Aluno:">
            <FormField
                label="Aluno"
                name="nome"
                placeholder="Nome do aluno"
                avatar={user}
                action={<FeatherSearchIcon />}
            />

            <FormGrid>
                <FormField label="IDSGP"    name="idsgp"    placeholder="000000"           bg />
                <FormField label="PCD"      name="pcd"      placeholder="Não informado"    bg />
                <FormField label="Contato"  name="contato"  placeholder="(00) 00000-0000"  bg action={<WALogoIcon />} />
            </FormGrid>

            <FormGrid>
                <FormField label="D.N"         name="data_nascimento" type="date"                       bg />
                <FormField label="Responsável" name="responsavel"     placeholder="Nome do responsável" bg action={<WALogoIcon />} />
            </FormGrid>
        </FormSection>

        <div className={styles.formDivider} />

        <FormSection title="Informações de Matrícula">
            <FormField
                label="Unidade Escolar"
                name="unidade_escolar"
                placeholder="Selecione a unidade"
                icon={<CalendarClockIcon />}
            />

            <FormGrid>
                <FormField label="Nível"        name="nivel"       placeholder="Ex: Fundamental" bg />
                <label className={`${styles.formField} ${styles.formFieldBg}`}>
                    <div className={styles.formFieldGroup}>
                        <span>Turma</span>
                        <input type="text" name="turma" placeholder="Ex: A" />
                    </div>
                    <div style={{ minWidth: 36, backgroundColor: '#fff', borderRadius: 5, padding: '2px 6px', display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 10, color: '#929291' }}>Nº</span>
                        <input
                            style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 12, width: 28 }}
                            type="text" name="numero_turma" placeholder="0"
                        />
                    </div>
                </label>
                <FormField label="Regime Atual" name="regime_atual" placeholder="Ex: Regular"      bg />
            </FormGrid>
        </FormSection>
    </>
);

export default StepDados;

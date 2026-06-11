import FormSection from '../../../components/form/FormSection';
import FormField from '../../../components/form/FormField';
import FormSelect from '../../../components/form/FormSelect';
import FormGrid from '../../../components/form/FormGrid';
import InfoAlertBox from '../../../components/form/InfoAlertBox';
import styles from '../../../components/form/FormComponents.module.scss';
import DocumentIcon from '../icones/DocumentIcon';
import CalendarClockIcon from '../icones/CalendarClockIcon';
import ShareIcon from '../icones/ShareIcon';

const MODALIDADE_OPTIONS = [
    { value: 'externa',        label: 'Escolas Externas (Fora da Rede)' },
    { value: 'municipal',      label: 'Escolas Municipais' },
    { value: 'estadual',       label: 'Escolas Estaduais' },
    { value: 'federal',        label: 'Escolas Federais' },
    { value: 'privada',        label: 'Escolas Privadas' },
    { value: 'comunitaria',    label: 'Escolas Comunitárias' },
    { value: 'filantropica',   label: 'Escolas Filantrópicas' },
    { value: 'tecnica',        label: 'Escolas Técnicas' },
    { value: 'militar',        label: 'Escolas Militares' },
    { value: 'internacional',  label: 'Escolas Internacionais' },
    { value: 'indigena',       label: 'Escolas Indígenas' },
    { value: 'quilombola',     label: 'Escolas Quilombolas' },
    { value: 'especial',       label: 'Educação Especial' },
    { value: 'eja',            label: 'Educação de Jovens e Adultos (EJA)' },
];

const StepTransferencia = () => (
    <>
        <FormSection title="Informações de Transferência:">
            <FormSelect
                label="Modalidade de Transferência"
                name="modalidade"
                options={MODALIDADE_OPTIONS}
                icon={<DocumentIcon />}
            />

            <FormGrid>
                <FormField
                    label="Data da Transferência"
                    name="data_transferencia"
                    type="date"
                    bg
                    action={<CalendarClockIcon />}
                />
                <FormField
                    label="Data do Registro"
                    name="data_registro"
                    type="date"
                    bg
                />
            </FormGrid>
        </FormSection>

        <div className={styles.formDivider} />

        <FormSection title="Destino do Aluno:">
            <FormGrid>
                <label className={`${styles.formField} ${styles.formFieldBg}`}>
                    <div className={styles.formFieldGroup}>
                        <span>Estado</span>
                        <select name="estado">
                            <option value="RJ">Rio de Janeiro</option>
                        </select>
                    </div>
                </label>

                <label className={`${styles.formField} ${styles.formFieldBg}`}>
                    <div className={styles.formFieldGroup}>
                        <span>Município</span>
                        <select name="municipio">
                            <option value="niteroi">Niterói</option>
                        </select>
                    </div>
                    <div
                        className={styles.formFieldAction}
                        style={{ backgroundColor: '#197DFF' }}
                    >
                        <ShareIcon style={{ fontSize: 15, color: '#fff' }} />
                    </div>
                </label>
            </FormGrid>

            <FormField
                label="Unidade Escolar de Destino"
                name="unidade_destino"
                icon={<CalendarClockIcon />}
                placeholder="Selecione a unidade de destino"
            />

            <InfoAlertBox title="Atenção">
                Este software permite a integração de informações escolares entre redes de diferentes regiões
                do território nacional. Os municípios de origem e destino devem utilizar a mesma ferramenta
                base para garantir compatibilidade, em conformidade com a LGPD. O sistema disponibiliza um
                portal de histórico escolar acessível por QR Code impresso no documento.
            </InfoAlertBox>
        </FormSection>
    </>
);

export default StepTransferencia;

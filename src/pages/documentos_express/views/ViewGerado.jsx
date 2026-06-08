import FormSection from '../../../components/form/FormSection';
import InfoAlertBox from '../../../components/form/InfoAlertBox';
import StudentIdSection from '../components/StudentIdSection';
import styles from '../../../components/form/FormComponents.module.scss';

/** Ícone de histórico (relógio com seta circular) */
const HistoryIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <path
            d="M12 8v4l3 3M3.05 11A9 9 0 1 0 4 6.3"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
        <path d="M3 3v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ViewGerado = ({ totalEmissoes = 2 }) => (
    <>
        <StudentIdSection readOnly />

        <div className={styles.formDivider} />

        <FormSection title="Geração de Documento">
            <InfoAlertBox title="Atenção!">
                Certifique-se de verificar o histórico de emissões para evitar duplicidade de registros.
                Sempre que necessário, você poderá realizar reimpressões utilizando os dados já salvos no sistema.
            </InfoAlertBox>

            <button type="button" className={styles.historyBtn}>
                <div className={styles.historyBtnIcon}>
                    <HistoryIcon />
                </div>
                <span className={styles.historyBtnLabel}>Histórico de Emissões</span>
                <span className={styles.historyBtnBadge}>{totalEmissoes}</span>
            </button>
        </FormSection>
    </>
);

export default ViewGerado;

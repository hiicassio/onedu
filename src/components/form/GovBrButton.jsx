import styles from './FormComponents.module.scss';

const GovBrButton = () => (
    <button type="button" className={styles.govBrBtn}>
        <span className={styles.govWord}>gov</span>
        <span className={styles.govBr}>.br</span>
        <span className={styles.govCaret}>▼</span>
    </button>
);

export default GovBrButton;

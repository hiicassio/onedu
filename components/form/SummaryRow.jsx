import styles from './FormComponents.module.scss';

const SummaryRow = ({ label, value, placeholder }) => (
    <div className={styles.summaryRow}>
        <span>{label}</span>
        <p>{value || placeholder || '—'}</p>
    </div>
);

export default SummaryRow;

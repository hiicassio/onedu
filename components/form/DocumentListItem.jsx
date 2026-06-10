import styles from './FormComponents.module.scss';

const DocumentListItem = ({ label, action }) => (
    <div className={styles.documentItem}>
        <span>{label}</span>
        <div className={styles.documentAction}>{action}</div>
    </div>
);

export default DocumentListItem;

import styles from './FormComponents.module.scss';

const FormSection = ({ title, children, icon }) => (
    <div className={styles.formSection}>
        <span className={styles.formSectionTitle}>
            {title}
            {icon}
        </span>
        <div className={styles.formSectionContent}>
            {children}
        </div>
    </div>
);

export default FormSection;

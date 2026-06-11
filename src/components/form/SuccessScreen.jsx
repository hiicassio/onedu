import styles from './FormComponents.module.scss';

const SuccessScreen = ({ icon, title, description }) => (
    <div className={styles.successScreen}>
        {icon && <div className={styles.successIcon}>{icon}</div>}
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
    </div>
);

export default SuccessScreen;

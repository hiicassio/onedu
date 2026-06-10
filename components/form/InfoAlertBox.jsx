import styles from './FormComponents.module.scss';

const InfoAlertBox = ({ title, children }) => (
    <div className={styles.infoAlertBox}>
        {title && <span>{title}</span>}
        {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
);

export default InfoAlertBox;

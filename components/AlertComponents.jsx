import styles from './AlertComponents.module.scss';
import { useEffect } from 'react';
const AlertComponents = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);
    return (
        <div className={`${styles.alertContainer} ${styles[type]}`}>
            <span>{message}</span>
            <div className={styles.carregamentoArea}>
                <div className={styles.carregamento} />
            </div>
        </div>
    );
}

export default AlertComponents;
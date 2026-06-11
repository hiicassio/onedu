import { useNavigate } from 'react-router-dom';
import ArrowSmallLeftIcon from '../../../listagem/controle_matricula/icones/ArrowSmallLeftIcon';
import GraduationCapIcon from '../../../listagem/controle_matricula/icones/GraduationCapIcon';
import InfoIcon from '../../../listagem/controle_matricula/icones/InfoIcon';
import styles from './CadastralListHeader.module.scss';

const CadastralListHeader = ({ title, breadcrumb, stats = [] }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.containerHeader}>
            <div className={styles.left}>
                <div className={styles.titleArea}>
                    <span className={styles.title}>{title}</span>
                    <InfoIcon className={styles.infoIcon} />
                </div>

                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.iconButton}
                        onClick={() => navigate('/gestao-institucional')}
                    >
                        <ArrowSmallLeftIcon />
                    </button>

                    <button type="button" className={styles.iconButtonSecondary}>
                        <GraduationCapIcon />
                    </button>

                    <button type="button" className={styles.actionButton}>
                        <GraduationCapIcon />
                        <div className={styles.dividir} />
                        <span className={styles.actionText}>{breadcrumb}</span>
                    </button>
                </div>
            </div>

            {stats.length > 0 && (
                <div className={styles.right}>
                    <div className={styles.stats}>
                        {stats.map((stat, index) => (
                            <button
                                key={stat.label}
                                type="button"
                                className={`${styles.statButton} ${
                                    index === 0 ? styles.statButtonPrimary : ''
                                }`}
                            >
                                <span className={styles.statLabel}>{stat.label}</span>
                                <span className={styles.statValue}>{stat.value}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CadastralListHeader;

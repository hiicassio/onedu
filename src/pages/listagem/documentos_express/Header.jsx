import styles from './Header.module.scss';
import InfoIcon from './icones/InfoIcon';
import ArrowSmallLeftIcon from './icones/ArrowSmallLeftIcon';
import HardDiskScanIcon from './icones/HardDiskScanIcon';
import VectorIcon from './icones/VectorIcon';
import LessonIcon from './icones/LessonIcon';
import DocumentIcon from './icones/DocumentIcon';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigation = useNavigate();

    return (
        <div className={styles.containerHeader}>

            <div className={styles.left}>

                <div className={styles.titleArea}>
                    <span className={styles.title}>
                        Documentos Express
                    </span>
                    <InfoIcon className={styles.infoIcon} />
                </div>

                <div className={styles.actions}>

                    <button className={styles.iconButton} onClick={() => navigation(-1)}>
                        <ArrowSmallLeftIcon />
                    </button>

                    <button className={styles.iconButton}>
                        <LessonIcon />
                    </button>

                    <button className={styles.actionButton}>
                        <DocumentIcon />
                        <div className={styles.dividir} />
                        <span className={styles.actionText}>
                            Ações na Matrícula
                        </span>
                    </button>

                </div>
            </div>

            <div className={styles.right}>

                <button className={styles.iconButton}>
                    <HardDiskScanIcon />
                </button>

                <button className={styles.iconButton}>
                    <VectorIcon />
                </button>

            </div>
        </div>
    )
}

export default Header;
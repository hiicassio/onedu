import styles from './Header.module.scss';
import InfoIcon from './icones/InfoIcon';
import CalendarIcon from './icones/CalendarIcon';
import ArrowSmallLeftIcon from './icones/ArrowSmallLeftIcon';
import BellSchoolIcon from './icones/BellSchoolIcon';
import UserTrustIcon from './icones/UserTrustIcon';
import UserForbiddenAltIcon from './icones/UserForbiddenAltIcon';
import ChartUserIcon from './icones/ChartUserIcon';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import HardDiskScanIcon from './icones/HardDiskScanIcon';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigation = useNavigate();
    return (
        <div className={styles.containerHeader}>

            <div className={styles.left}>

                <div className={styles.titleArea}>
                    <span className={styles.title}>
                        Histórico Escolar
                    </span>
                    <InfoIcon className={styles.infoIcon} />
                </div>

                <div className={styles.actions}>

                    <button className={styles.iconButton} onClick={() => navigation(-1)}>
                        <ArrowSmallLeftIcon />
                    </button>

                    <button className={styles.iconButton}>
                        <BellSchoolIcon />
                    </button>

                    <button className={styles.actionButton}>
                        <CalendarIcon />
                        <div className={styles.dividir} />
                        <span className={styles.actionText}>
                            Rotina Escolar
                        </span>
                    </button>

                </div>
            </div>

            <div className={styles.right}>

                <div className={styles.stats}>

                    <div className={styles.total}>
                        <button className={styles.totalButton}>
                            <span className={styles.totalLabel}>Alunos</span>
                            <span className={styles.totalValue}>32</span>
                        </button>
                    </div>

                    <div className={styles.indicators}>

                        <button className={styles.indicatorButton}>
                            <UserTrustIcon />
                            <span>32</span>
                        </button>

                        <button className={styles.indicatorButton}>
                            <UserForbiddenAltIcon />
                            <span>32</span>
                        </button>

                        <button className={styles.indicatorButton}>
                            <ChartUserIcon />
                            <span>32</span>
                        </button>

                        <button className={styles.indicatorButton}>
                            <PriorityArrowsIcon />
                            <span>32</span>
                        </button>

                    </div>
                </div>

                <div className={styles.extra}>
                    <button className={styles.iconButton}>
                        <HardDiskScanIcon />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header;
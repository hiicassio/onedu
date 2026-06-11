import styles from './Header.module.scss';
import ArrowSmallLeftIcon from './icones/ArrowSmallLeftIcon';
import CrossCircleIcon from './icones/CrossCircleIcon';
import CalendarIcon from './icones/CalendarIcon';
import ConvertDocumentIcon from './icones/ConvertDocumentIcon';
import InfoIcon from './icones/InfoIcon';
import CheckCircleIcon from './icones/CheckCircleIcon';
import TriangleWarningIcon from './icones/TriangleWarningIcon';
import RectangleVerticalHistoryIcon from './icones/RectangleVerticalHistoryIcon';
import RectangleListIcon from './icones/RectangleListIcon';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigation = useNavigate();
    return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <span className={styles.header_title}>
                    Estudos Realizados
                </span>

                <div className={styles.header_actions}>
                    <button className={styles.header_button} onClick={() => navigation(-1)}>
                        <ArrowSmallLeftIcon />
                    </button>

                    <button className={styles.header_button}>
                        <CalendarIcon />
                    </button>

                    <button className={styles.header_buttonWithText}>
                        <ConvertDocumentIcon />
                        <div className={styles.header_divider} />
                        <span className={styles.header_buttonText}>
                            Histórico Escolar
                        </span>
                    </button>
                </div>
            </div>

            <div className={styles.header_right}>
                <button className={styles.header_info}>
                    <InfoIcon />
                </button>

                <div className={styles.header_stats}>
                    <div className={styles.header_total}>
                        <button className={styles.header_totalButton}>
                            <span className={styles.header_totalLabel}>
                                Históricos Totais
                            </span>
                            <span className={styles.header_totalValue}>
                                07
                            </span>
                        </button>
                    </div>

                    <div className={styles.header_statusList}>
                        <button className={styles.header_statusItem}>
                            <CheckCircleIcon />
                            <span>02</span>
                        </button>

                        <button className={styles.header_statusItem}>
                            <CrossCircleIcon />
                            <span>01</span>
                        </button>

                        <button className={styles.header_statusItem}>
                            <TriangleWarningIcon />
                            <span>04</span>
                        </button>
                    </div>
                </div>

                <div className={styles.header_viewControls}>
                    <button className={styles.header_iconButton}>
                        <RectangleVerticalHistoryIcon />
                    </button>

                    <button className={styles.header_iconButton}>
                        <RectangleListIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
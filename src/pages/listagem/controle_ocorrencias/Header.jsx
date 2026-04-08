import styles from './Header.module.scss';
import InfoIcon from './icones/InfoIcon';
import ArrowSmallLeftIcon from './icones/ArrowSmallLeftIcon';
import { useNavigate } from 'react-router-dom';
import BellSchoolIcon from './icones/BellSchoolIcon';
import GraduationCapIcon from './icones/GraduationCapIcon';

const Header = () => {
    const navigation = useNavigate();

    return (
        <div className={styles.containerHeader}>

            <div className={styles.left}>

                <div className={styles.titleArea}>
                    <span className={styles.title}>
                        Controle de Ocorrências
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
                        <GraduationCapIcon />
                        <div className={styles.dividir} />
                        <span className={styles.actionText}>
                            Gestão Matrículas
                        </span>
                    </button>

                </div>
            </div>

            <div className={styles.right}>

                <div className={styles.areaBotton}>
                    <button className={styles.button}>
                        <span>Total de Registros</span>
                        <span>125</span>
                    </button>
                </div>
                <div className={styles.areaButtonRight}>
                    <button className={styles.button}>
                        <span>Total Concluído</span>
                        <span>73</span>
                    </button>
                    <button className={styles.button}>
                        <span>Total Em Análise</span>
                        <span>12</span>
                    </button>
                    <button className={styles.button}>
                        <span>Total Pendente</span>
                        <span>32</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header;
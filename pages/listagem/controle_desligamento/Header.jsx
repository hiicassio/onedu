import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '../controle_transferencias/icones/InfoIcon';
import ArrowSmallLeftIcon from '../controle_transferencias/icones/ArrowSmallLeftIcon';
import BellSchoolIcon from '../controle_transferencias/icones/BellSchoolIcon';
import GraduationCapIcon from '../controle_transferencias/icones/GraduationCapIcon';

const Header = () => {
    const navigation = useNavigate();

    return (
        <div className={styles.containerHeader}>

            <div className={styles.left}>
                <div className={styles.titleArea}>
                    <span className={styles.title}>Desligamento Express</span>
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
                        <span className={styles.actionText}>Gestão Matrículas</span>
                    </button>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.areaBotton}>
                    <button className={styles.button}>
                        <span>Total de Registros</span>
                        <span>21</span>
                    </button>
                </div>
                <div className={styles.areaButtonRight}>
                    <button className={styles.button}>
                        <span>Total Concluído</span>
                        <span>18</span>
                    </button>
                    <button className={styles.button}>
                        <span>Em Análise</span>
                        <span>2</span>
                    </button>
                    <button className={styles.button}>
                        <span>Pendentes</span>
                        <span>1</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;

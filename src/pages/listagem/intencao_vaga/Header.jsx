import styles from './Header.module.scss';
import InfoIcon from './icones/InfoIcon';
import GraduationCapIcon from './icones/GraduationCapIcon';
import ArrowSmallLeftIcon from './icones/ArrowSmallLeftIcon';
import BellSchoolIcon from './icones/BellSchoolIcon';
import UserTrustIcon from './icones/UserTrustIcon';
import MemberListIcon from './icones/MemberListIcon';
import ChartUserIcon from './icones/ChartUserIcon';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import HourglassEndIcon from './icones/HourglassEndIcon';
import DeleteUserIcon from './icones/DeleteUserIcon';
import CamadaIcon from './icones/CamadaIcon';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigation = useNavigate();

    return (
        <div className={styles.containerHeader}>

            <div className={styles.left}>

                <div className={styles.titleArea}>
                    <span className={styles.title}>
                        Intenção de Vagas
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

                <div className={styles.stats}>

                    <div className={styles.total}>
                        <button className={styles.totalButton}>
                            <span className={styles.totalLabel}>Alunos Totais</span>
                            <span className={styles.totalValue}>32</span>
                        </button>
                    </div>

                    <div className={styles.indicators}>

                        <button className={styles.indicatorButton}>
                            <UserTrustIcon />
                            <span>32</span>
                        </button>

                        <button className={styles.indicatorButton}>
                            <MemberListIcon />
                            <span>32</span>
                        </button>

                        <button className={styles.indicatorButton}>
                            <DeleteUserIcon />
                            <span>32</span>
                        </button>
                    </div>
                </div>

                <div className={styles.stats}>

                    <div className={styles.capacity}>

                        <button className={styles.capacityButton}>
                            <span className={styles.label}>
                                Vagas Disponíveis
                            </span>
                            <span className={styles.value}>
                                03
                            </span>
                        </button>

                        <button className={styles.capacityButton}>
                            <div className={styles.capacityInfo}>
                                <span className={styles.label}>
                                    Ocupação da Sala
                                </span>
                                <span className={styles.value}>
                                    97%
                                </span>
                            </div>
                        </button>

                    </div>

                </div>

                <div className={styles.extra}>
                    <button className={styles.iconButton} onClick={() => navigation(-1)}>
                        <CamadaIcon />
                    </button>

                    <button className={styles.iconButton}>
                        <HourglassEndIcon />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header;
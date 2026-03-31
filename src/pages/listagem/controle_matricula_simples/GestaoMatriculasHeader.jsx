import styles from './GestaoMatriculasHeader.module.scss';
import InfoIcon from './icones/InfoIcon';
import ArrowSmallLeftIcon from './icones/ArrowSmallLeftIcon';
import BellSchoolIcon from './icones/BellSchoolIcon';
import GraduationIcon from './icones/GraduationIcon';
import UserTrustIcon from './icones/UserTrustIcon';
import UserForbiddenAltIcon from './icones/UserForbiddenAltIcon';
import ChartUserIcon from './icones/ChartUserIcon';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import CamadaIcon from './icones/CamadaIcon';
import HourglassEndIcon from './icones/HourglassEndIcon';
import { useState } from 'react';

const GestaoMatriculasHeader = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div className={styles.gestaoMatriculasHeader}>

            {/* Topo */}
            <div className={styles.gestaoMatriculasHeader_top}>

                {/* Título */}
                <div className={styles.gestaoMatriculasHeader_title}>
                    <span className={styles.gestaoMatriculasHeader_titleText}>
                        Controle de Matrículas
                    </span>
                    <InfoIcon />
                </div>

                {/* Ações */}
                <div className={styles.gestaoMatriculasHeader_actions}>
                    <button className={styles.gestaoMatriculasHeader_iconButton}>
                        <ArrowSmallLeftIcon />
                    </button>

                    <button className={styles.gestaoMatriculasHeader_iconButton}>
                        <BellSchoolIcon />
                    </button>

                    <button className={styles.gestaoMatriculasHeader_mainButton}>
                        <GraduationIcon />
                        <div className={styles.gestaoMatriculasHeader_divider}></div>
                        <span>Gestão Matrículas</span>
                    </button>
                </div>
            </div>

            {/* Conteúdo / métricas */}
            <div className={styles.gestaoMatriculasHeader_content}>

                {/* Grupo 1 */}
                <div className={styles.gestaoMatriculasHeader_statsGroup}>

                    <button className={styles.gestaoMatriculasHeader_statCard}>
                        <span>Alunos <br /> Totais</span>
                        <span>32</span>
                    </button>

                    <div className={styles.gestaoMatriculasHeader_divider}></div>

                    <button className={styles.gestaoMatriculasHeader_statIcon}>
                        <UserTrustIcon />
                        <span>32</span>
                    </button>

                    <button className={styles.gestaoMatriculasHeader_statIcon}>
                        <UserForbiddenAltIcon />
                        <span>32</span>
                    </button>

                    <button className={styles.gestaoMatriculasHeader_statIcon}>
                        <ChartUserIcon />
                        <span>32</span>
                    </button>

                    <button className={styles.gestaoMatriculasHeader_statIcon}>
                        <PriorityArrowsIcon />
                        <span>32</span>
                    </button>
                </div>

                {/* Grupo 2 */}
                <div className={styles.gestaoMatriculasHeader_statsGroupSecondary}>

                    <button className={styles.gestaoMatriculasHeader_statCard}>
                        <span>Vagas Disponiveis</span>
                        <span>03</span>
                    </button>

                    <button className={styles.gestaoMatriculasHeader_statCard}>
                        <div className={styles.gestaoMatriculasHeader_statCardProgress}>
                            <span>Ocupação <br /> da Sala</span>
                            <span>97%</span>
                        </div>
                    </button>
                </div>

                {/* Grupo 3 */}
                <div className={styles.gestaoMatriculasHeader_tools}>
                    <button className={`${styles.gestaoMatriculasHeader_iconButton} ${selected === 1 ? styles.gestaoMatriculasHeader_iconButtonSelected : ''}`} onClick={() => setSelected(1)}>
                        <CamadaIcon />
                    </button>

                    <button className={`${styles.gestaoMatriculasHeader_iconButton} ${selected === 2 ? styles.gestaoMatriculasHeader_iconButtonSelected : ''}`} onClick={() => setSelected(2)}>
                        <HourglassEndIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GestaoMatriculasHeader;
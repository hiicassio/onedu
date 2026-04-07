import { useNavigate } from 'react-router-dom';
import styles from './DashboardHome.module.scss';
import AngleSmallRightIcon from './icones/AngleSmallRightIcon';

const DashboardHome = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.containerDashboardHome}>
            <span>Dashboard em desenvolvimento</span>

            <button onClick={() => navigate('/gestao-matricula/gestao-matricula')}>
                Ir para a tela inicial
                <AngleSmallRightIcon />
            </button>
        </div>
    );
};

export default DashboardHome;
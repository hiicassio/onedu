import { useNavigate } from 'react-router-dom';
import CalendarIcon from '../../../components/icones/CalendarIcon';
import CalendarClockIcon from '../../analise_candidato/icones/CalendarClockIcon';
import FinanceiroIcon from '../../home/icones/FinanceiroIcon';
import EstoqueIcon from '../../home/icones/EstoqueIcon';
import { APLICACOES_STATS, MAIN_CARDS } from '../data/aplicacoesData';
import styles from '../../gestao_institucional/views/DashboardInstitucional.module.scss';

const CARD_ICONS = {
    'quadro-horarios': CalendarClockIcon,
    'calendario-escolar': CalendarIcon,
    'controle-financeiro': FinanceiroIcon,
    'controle-entregas': EstoqueIcon,
};

const MenuItem = ({ item, onClick }) => {
    const Icon = CARD_ICONS[item.id];

    return (
        <button type="button" onClick={onClick} className={styles.menuItem}>
            <Icon />
            <span className={styles.menuText}>
                {item.title} <strong>{item.subtitle}</strong>
            </span>
            <div className={styles.menuBadge}>{item.badge}</div>
        </button>
    );
};

const DashboardControleAplicacoes = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.dashboard}>
            <div className={styles.areaMenu}>
                <div className={styles.menu}>
                    {MAIN_CARDS.map((item) => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            onClick={() => navigate(item.rota)}
                        />
                    ))}
                </div>

                <div className={styles.statsCard}>
                    <div className={styles.statsHeader}>
                        <span>Minha Escola</span>
                    </div>

                    <div className={styles.statsContent}>
                        {APLICACOES_STATS.map((stat) => (
                            <div key={stat.label} className={styles.statItem}>
                                <span>{stat.label}</span>
                                <span>{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardControleAplicacoes;

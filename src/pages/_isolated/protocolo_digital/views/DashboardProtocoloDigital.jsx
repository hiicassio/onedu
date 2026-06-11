import { useNavigate } from 'react-router-dom';
import DocumentIcon from '../../../listagem/gestao_matricula/icones/DocumentIcon';
import ConvertDocumentIcon from '../../../listagem/gestao_matricula/icones/ConvertDocumentIcon';
import DiagramSankeyIcon from '../../../listagem/gestao_matricula/icones/DiagramSankeyIcon';
import { DASHBOARD_CARDS, PROTOCOLO_STATS } from '../data/protocoloDigitalData';
import styles from './DashboardProtocoloDigital.module.scss';

const CARD_ICONS = {
    'novo-protocolo': DocumentIcon,
    'relacao-protocolos': ConvertDocumentIcon,
    'indicadores-dados': DiagramSankeyIcon,
};

const STAT_TONE_CLASS = {
    success: styles.statValueSuccess,
    danger: styles.statValueDanger,
    warning: styles.statValueWarning,
    info: styles.statValueInfo,
};

const DashboardProtocoloDigital = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.dashboard}>
            <div className={styles.areaMenu}>
                <div className={styles.menu}>
                    {DASHBOARD_CARDS.map((item) => {
                        const Icon = CARD_ICONS[item.id] ?? DocumentIcon;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                className={styles.menuItem}
                                onClick={() => navigate(item.rota)}
                            >
                                <Icon />
                                <span className={styles.menuText}>
                                    {item.title} <strong>{item.subtitle}</strong>
                                </span>
                                {item.badge && (
                                    <div className={styles.menuBadge}>{item.badge}</div>
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className={styles.statsCard}>
                    <div className={styles.statsHeader}>
                        <span>Indicadores de Protocolos</span>
                    </div>

                    <div className={styles.statsContent}>
                        {PROTOCOLO_STATS.map((stat) => (
                            <div key={stat.id} className={styles.statItem}>
                                <span className={styles.statLabel}>{stat.label}</span>
                                <span
                                    className={`${styles.statValue} ${STAT_TONE_CLASS[stat.tone] ?? ''}`}
                                >
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProtocoloDigital;

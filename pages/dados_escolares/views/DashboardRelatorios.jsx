import DocumentIcon from '../../listagem/gestao_matricula/icones/DocumentIcon';
import RadarIcon from '../../listagem/gestao_matricula/icones/RadarIcon';
import ConvertDocumentIcon from '../../listagem/gestao_matricula/icones/ConvertDocumentIcon';
import DiagramSankeyIcon from '../../listagem/gestao_matricula/icones/DiagramSankeyIcon';
import { DASHBOARD_CARDS } from '../data/mockReports';
import styles from './DashboardRelatorios.module.scss';

const CARD_ICONS = {
    'relatorios-prontos': DocumentIcon,
    onreport: ConvertDocumentIcon,
    'onreport-graficos': DiagramSankeyIcon,
    'sala-situacao': RadarIcon,
};

const DashboardRelatorios = ({ onSelectCard }) => (
    <div className={styles.dashboard}>
        <div className={styles.cardGrid}>
            {DASHBOARD_CARDS.map((card) => {
                const Icon = CARD_ICONS[card.id] ?? DocumentIcon;

                return (
                    <button
                        key={card.id}
                        type="button"
                        className={styles.card}
                        onClick={() => onSelectCard(card.id)}
                    >
                        <Icon />
                        <span className={styles.cardLabel}>{card.label}</span>
                    </button>
                );
            })}
        </div>
    </div>
);

export default DashboardRelatorios;

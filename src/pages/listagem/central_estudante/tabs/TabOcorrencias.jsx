import formStyles from '../../../../components/form/FormComponents.module.scss';
import styles from './Tabs.module.scss';
import { OCCURRENCES, TREND_DATA } from '../data/mockData';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import ContentCard from '../components/ContentCard';

const GRAVITY_STYLE = {
    elogio: { bg: '#D1FAE5', color: '#065F46', label: 'Elogio' },
    baixa: { bg: '#FEF3C7', color: '#92400E', label: 'Baixa' },
    media: { bg: '#FEE2E2', color: '#991B1B', label: 'Média' },
    alta: { bg: '#FEE2E2', color: '#7F1D1D', label: 'Alta' },
};

const typeBarData = [
    { label: 'Elogios', value: 1, color: '#12B76A' },
    { label: 'Atrasos', value: 1, color: '#F79009' },
    { label: 'Advert.', value: 2, color: '#F04438' },
    { label: 'Justif.', value: 1, color: '#197DFF' },
];

const TabOcorrencias = () => (
    <div className={styles.colStack}>
        <div className={formStyles.infoAlertBox}>
            <span>Atenção</span>
            <p>
                Este aluno possui <strong>2 advertências</strong> registradas no período. Confira os detalhes abaixo e,
                se necessário, acione o responsável.
            </p>
        </div>

        <div className={styles.tabGrid}>
            <ContentCard title="Histórico de Ocorrências" flex="1.5">
                <div className={styles.occList}>
                    {OCCURRENCES.map((occ) => {
                        const gravity = GRAVITY_STYLE[occ.gravidade] || GRAVITY_STYLE.media;
                        return (
                            <div key={occ.id} className={styles.occRow}>
                                <div className={styles.occDate}>{occ.data}</div>
                                <div className={styles.occBody}>
                                    <div className={styles.occType}>{occ.tipo}</div>
                                    <div className={styles.occDesc}>{occ.descricao}</div>
                                </div>
                                <span
                                    className={styles.occBadge}
                                    style={{ background: gravity.bg, color: gravity.color }}
                                >
                                    {gravity.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </ContentCard>

            <div className={styles.colRight}>
                <ContentCard title="Tipo de Ocorrências">
                    <div className={styles.chartWrap}>
                        <BarChart data={typeBarData} height={110} />
                    </div>
                </ContentCard>

                <ContentCard title="Tendência de Desempenho">
                    <div className={styles.chartWrap}>
                        <LineChart data={TREND_DATA} height={80} color="#F79009" />
                    </div>
                </ContentCard>
            </div>
        </div>
    </div>
);

export default TabOcorrencias;

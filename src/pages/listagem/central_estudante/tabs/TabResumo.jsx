import styles from './Tabs.module.scss';
import { GRADES, ATTENDANCE_MONTHLY, TREND_DATA } from '../data/mockData';
import DonutChart from '../components/charts/DonutChart';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';

const allMedias = GRADES
    .map(g => {
        const vals = [g.t1, g.t2, g.t3, g.t4].filter(v => v !== null);
        return vals.length ? vals.reduce((s, v) => s + v, 0) / vals.length : null;
    })
    .filter(v => v !== null);

const aprovados  = allMedias.filter(m => m >= 7).length;
const emProg     = allMedias.filter(m => m >= 5 && m < 7).length;
const atencao    = allMedias.filter(m => m < 5).length;
const totalDisc  = allMedias.length;

const donutData = [
    { label: 'Aprovado',     value: Math.round((aprovados / totalDisc) * 100), color: '#12B76A' },
    { label: 'Em Progressão',value: Math.round((emProg    / totalDisc) * 100), color: '#F79009' },
    { label: 'Atenção',      value: Math.round((atencao   / totalDisc) * 100), color: '#F04438' },
];

const freqBarData = ATTENDANCE_MONTHLY.map(m => ({
    label: m.mes,
    value: Math.round((m.presencas / m.aulas) * 100),
    color: '#197DFF',
}));

const avgGeral = (allMedias.reduce((s, v) => s + v, 0) / allMedias.length).toFixed(1);
const avgFreq  = Math.round(
    ATTENDANCE_MONTHLY.reduce((s, m) => s + (m.presencas / m.aulas) * 100, 0) / ATTENDANCE_MONTHLY.length
);

const MetricCard = ({ value, label, color }) => (
    <div className={styles.metricCard}>
        <span className={styles.metricValue} style={{ color }}>{value}</span>
        <span className={styles.metricLabel}>{label}</span>
    </div>
);

const TabResumo = () => (
    <div className={styles.colStack}>
        {/* Top metrics */}
        <div className={styles.metricsRow}>
            <MetricCard value={avgGeral}   label="Média Geral"    color="#197DFF" />
            <MetricCard value={`${avgFreq}%`} label="Frequência"  color="#12B76A" />
            <MetricCard value={aprovados}  label="Aprovações"     color="#12B76A" />
            <MetricCard value={emProg}     label="Em Progressão"  color="#F79009" />
            <MetricCard value={atencao}    label="Em Atenção"     color="#F04438" />
        </div>

        <div className={styles.tabGrid}>
            {/* Donut chart */}
            <div className={styles.card}>
                <span className={styles.cardTitle}>Situação Acadêmica</span>
                <div className={styles.chartCentered}>
                    <DonutChart data={donutData} size={120} thickness={22} />
                </div>
            </div>

            {/* Linha de tendência */}
            <div className={styles.card} style={{ flex: 2 }}>
                <span className={styles.cardTitle}>Evolução da Média Acadêmica</span>
                <div className={styles.chartWrap}>
                    <LineChart data={TREND_DATA} height={90} color="#00397B" />
                </div>
                <div className={styles.trendLabels}>
                    {['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out'].map(m => (
                        <span key={m}>{m}</span>
                    ))}
                </div>
            </div>

            {/* Frequência resumida */}
            <div className={styles.card}>
                <span className={styles.cardTitle}>Frequência por Mês</span>
                <div className={styles.chartWrap}>
                    <BarChart data={freqBarData} height={120} />
                </div>
            </div>
        </div>
    </div>
);

export default TabResumo;

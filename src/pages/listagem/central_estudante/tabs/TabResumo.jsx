import styles from './Tabs.module.scss';
import { GRADES, ATTENDANCE_MONTHLY, TREND_DATA } from '../data/mockData';
import DonutChart from '../components/charts/DonutChart';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import ContentCard from '../components/ContentCard';
import MetricStatCard from '../components/MetricStatCard';

const allMedias = GRADES.map((grade) => {
    const values = [grade.t1, grade.t2, grade.t3, grade.t4].filter((value) => value !== null);
    return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
}).filter((value) => value !== null);

const aprovados = allMedias.filter((media) => media >= 7).length;
const emProg = allMedias.filter((media) => media >= 5 && media < 7).length;
const atencao = allMedias.filter((media) => media < 5).length;
const totalDisc = allMedias.length;

const donutData = [
    { label: 'Aprovado', value: Math.round((aprovados / totalDisc) * 100), color: '#12B76A' },
    { label: 'Em Progressão', value: Math.round((emProg / totalDisc) * 100), color: '#F79009' },
    { label: 'Atenção', value: Math.round((atencao / totalDisc) * 100), color: '#F04438' },
];

const freqBarData = ATTENDANCE_MONTHLY.map((month) => ({
    label: month.mes,
    value: Math.round((month.presencas / month.aulas) * 100),
    color: '#197DFF',
}));

const avgGeral = (allMedias.reduce((sum, value) => sum + value, 0) / allMedias.length).toFixed(1);
const avgFreq = Math.round(
    ATTENDANCE_MONTHLY.reduce((sum, month) => sum + (month.presencas / month.aulas) * 100, 0) /
        ATTENDANCE_MONTHLY.length
);

const TabResumo = () => (
    <div className={styles.colStack}>
        <div className={styles.metricsRow}>
            <MetricStatCard value={avgGeral} label="Média Geral" color="#197dff" />
            <MetricStatCard value={`${avgFreq}%`} label="Frequência" color="#12b76a" />
            <MetricStatCard value={aprovados} label="Aprovações" color="#12b76a" />
            <MetricStatCard value={emProg} label="Em Progressão" color="#f79009" />
            <MetricStatCard value={atencao} label="Em Atenção" color="#f04438" />
        </div>

        <div className={styles.tabGrid}>
            <ContentCard title="Situação Acadêmica">
                <div className={styles.chartCentered}>
                    <DonutChart data={donutData} size={120} thickness={22} />
                </div>
            </ContentCard>

            <ContentCard title="Evolução da Média Acadêmica" flex={2}>
                <div className={styles.chartWrap}>
                    <LineChart data={TREND_DATA} height={90} color="#00397B" />
                </div>
                <div className={styles.trendLabels}>
                    {['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out'].map((month) => (
                        <span key={month}>{month}</span>
                    ))}
                </div>
            </ContentCard>

            <ContentCard title="Frequência por Mês">
                <div className={styles.chartWrap}>
                    <BarChart data={freqBarData} height={120} />
                </div>
            </ContentCard>
        </div>
    </div>
);

export default TabResumo;

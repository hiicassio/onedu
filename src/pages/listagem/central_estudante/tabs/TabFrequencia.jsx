import styles from './Tabs.module.scss';
import { ATTENDANCE_MONTHLY, HEATMAP } from '../data/mockData';
import BarChart from '../components/charts/BarChart';
import HeatmapCalendar from '../components/charts/HeatmapCalendar';
import ContentCard from '../components/ContentCard';
import MetricStatCard from '../components/MetricStatCard';

const totalAulas = ATTENDANCE_MONTHLY.reduce((sum, month) => sum + month.aulas, 0);
const totalPresencas = ATTENDANCE_MONTHLY.reduce((sum, month) => sum + month.presencas, 0);
const totalFaltas = totalAulas - totalPresencas;
const pctFreq = ((totalPresencas / totalAulas) * 100).toFixed(1);
const limite = 75;

const barData = ATTENDANCE_MONTHLY.map((month) => ({
    label: month.mes,
    value: Math.round((month.presencas / month.aulas) * 100),
    color: (month.presencas / month.aulas) * 100 >= limite ? '#00397B' : '#F04438',
}));

const TabFrequencia = () => (
    <div className={styles.colStack}>
        <div className={styles.statRow}>
            <MetricStatCard value={`${pctFreq}%`} label="Frequência Geral" color="#197dff" />
            <MetricStatCard value={totalPresencas} label="Presenças" color="#12b76a" />
            <MetricStatCard value={totalFaltas} label="Faltas" color="#f04438" />
            <MetricStatCard value={totalAulas} label="Total de Aulas" color="#00397b" />
            {parseFloat(pctFreq) >= limite ? (
                <span className={`${styles.freqBadge} ${styles.freqOk}`}>
                    Acima do mínimo ({limite}%)
                </span>
            ) : (
                <span className={`${styles.freqBadge} ${styles.freqAlert}`}>
                    Abaixo do mínimo ({limite}%)
                </span>
            )}
        </div>

        <div className={styles.tabGrid}>
            <ContentCard title="Frequência por Mês (%)" flex={2}>
                <div className={styles.chartWrap}>
                    <BarChart data={barData} height={130} />
                </div>

                <div className={styles.separator} />

                <table className={styles.freqTable}>
                    <thead>
                        <tr>
                            <th>Mês</th>
                            <th>Aulas</th>
                            <th>Presenças</th>
                            <th>Faltas</th>
                            <th>Frequência</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ATTENDANCE_MONTHLY.map((month, index) => {
                            const pct = ((month.presencas / month.aulas) * 100).toFixed(1);
                            const ok = parseFloat(pct) >= limite;

                            return (
                                <tr key={index}>
                                    <td>{month.mes}</td>
                                    <td>{month.aulas}</td>
                                    <td style={{ color: '#12B76A', fontWeight: 600 }}>{month.presencas}</td>
                                    <td style={{ color: '#F04438', fontWeight: 600 }}>
                                        {month.aulas - month.presencas}
                                    </td>
                                    <td>
                                        <span
                                            className={styles.freqPill}
                                            style={{
                                                background: ok ? '#D1FAE5' : '#FEE2E2',
                                                color: ok ? '#065F46' : '#991B1B',
                                            }}
                                        >
                                            {pct}%
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </ContentCard>

            <ContentCard title="Calendário de Presença">
                <HeatmapCalendar data={HEATMAP} />
            </ContentCard>
        </div>
    </div>
);

export default TabFrequencia;

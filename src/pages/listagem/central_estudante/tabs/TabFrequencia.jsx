import styles from './Tabs.module.scss';
import { ATTENDANCE_MONTHLY, HEATMAP } from '../data/mockData';
import BarChart from '../components/charts/BarChart';
import HeatmapCalendar from '../components/charts/HeatmapCalendar';

const totalAulas     = ATTENDANCE_MONTHLY.reduce((s, m) => s + m.aulas, 0);
const totalPresencas = ATTENDANCE_MONTHLY.reduce((s, m) => s + m.presencas, 0);
const totalFaltas    = totalAulas - totalPresencas;
const pctFreq        = ((totalPresencas / totalAulas) * 100).toFixed(1);
const limite         = 75; // % mínimo por lei

const barData = ATTENDANCE_MONTHLY.map(m => ({
    label: m.mes,
    value: Math.round((m.presencas / m.aulas) * 100),
    color: (m.presencas / m.aulas) * 100 >= limite ? '#00397B' : '#F04438',
}));

const TabFrequencia = () => (
    <div className={styles.colStack}>
        {/* Stat cards */}
        <div className={styles.statRow}>
            <div className={styles.statBig}>
                <span className={styles.statBigNum} style={{ color: '#197DFF' }}>{pctFreq}%</span>
                <span className={styles.statBigLabel}>Frequência Geral</span>
            </div>
            <div className={styles.statBig}>
                <span className={styles.statBigNum} style={{ color: '#12B76A' }}>{totalPresencas}</span>
                <span className={styles.statBigLabel}>Presenças</span>
            </div>
            <div className={styles.statBig}>
                <span className={styles.statBigNum} style={{ color: '#F04438' }}>{totalFaltas}</span>
                <span className={styles.statBigLabel}>Faltas</span>
            </div>
            <div className={styles.statBig}>
                <span className={styles.statBigNum} style={{ color: '#00397B' }}>{totalAulas}</span>
                <span className={styles.statBigLabel}>Total de Aulas</span>
            </div>
            {parseFloat(pctFreq) >= limite
                ? <span className={`${styles.freqBadge} ${styles.freqOk}`}>✓ Acima do mínimo ({limite}%)</span>
                : <span className={`${styles.freqBadge} ${styles.freqAlert}`}>⚠ Abaixo do mínimo ({limite}%)</span>
            }
        </div>

        <div className={styles.tabGrid}>
            {/* Gráfico mensal */}
            <div className={styles.card} style={{ flex: 2 }}>
                <span className={styles.cardTitle}>Frequência por Mês (%)</span>
                <div className={styles.limiteLine} style={{ '--pct': `${(limite / 100) * 130}px` }} />
                <div className={styles.chartWrap}>
                    <BarChart data={barData} height={130} />
                </div>

                <div className={styles.separator} />

                {/* Tabela detalhada */}
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
                        {ATTENDANCE_MONTHLY.map((m, i) => {
                            const pct = ((m.presencas / m.aulas) * 100).toFixed(1);
                            const ok  = parseFloat(pct) >= limite;
                            return (
                                <tr key={i}>
                                    <td>{m.mes}</td>
                                    <td>{m.aulas}</td>
                                    <td style={{ color: '#12B76A', fontWeight: 600 }}>{m.presencas}</td>
                                    <td style={{ color: '#F04438', fontWeight: 600 }}>{m.aulas - m.presencas}</td>
                                    <td>
                                        <span
                                            className={styles.freqPill}
                                            style={{ background: ok ? '#D1FAE5' : '#FEE2E2', color: ok ? '#065F46' : '#991B1B' }}
                                        >
                                            {pct}%
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Calendário */}
            <div className={styles.card}>
                <span className={styles.cardTitle}>Calendário de Presença</span>
                <HeatmapCalendar data={HEATMAP} />
            </div>
        </div>
    </div>
);

export default TabFrequencia;

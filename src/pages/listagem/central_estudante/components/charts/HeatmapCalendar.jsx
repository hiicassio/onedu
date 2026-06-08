import styles from './HeatmapCalendar.module.scss';

const DAYS = ['S', 'T', 'Q', 'Q', 'S'];
const INTENSITY = [
    '#E0EBFA',  // 0 = falta
    '#6BA8F0',  // 1 = parcial
    '#00397B',  // 2 = presente
];

/**
 * HeatmapCalendar — grade de presença (semanas × dias).
 * data: number[][] — cada linha = semana, cada coluna = dia (0–4)
 */
const HeatmapCalendar = ({ data = [] }) => (
    <div className={styles.heatmap}>
        <div className={styles.dayLabels}>
            {DAYS.map((d, i) => <span key={i}>{d}</span>)}
        </div>
        <div className={styles.grid}>
            {data.map((week, wi) => (
                <div key={wi} className={styles.week}>
                    {week.map((v, di) => (
                        <div
                            key={di}
                            className={styles.cell}
                            style={{ background: INTENSITY[v] }}
                            title={['Falta', 'Parcial', 'Presente'][v]}
                        />
                    ))}
                </div>
            ))}
        </div>
        <div className={styles.legend}>
            <span>Menos</span>
            {INTENSITY.map((c, i) => (
                <div key={i} className={styles.legendCell} style={{ background: c }} />
            ))}
            <span>Mais</span>
        </div>
    </div>
);

export default HeatmapCalendar;

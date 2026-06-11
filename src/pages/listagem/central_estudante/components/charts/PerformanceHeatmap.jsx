import styles from './PerformanceHeatmap.module.scss';

const getCellStyle = (value) => {
    if (value === null || value === undefined) {
        return { background: '#f3f4f6', color: '#bbb' };
    }
    if (value >= 8) return { background: '#00397b', color: '#fff' };
    if (value >= 7) return { background: '#197dff', color: '#fff' };
    if (value >= 6) return { background: '#6ba8f0', color: '#fff' };
    if (value >= 5) return { background: '#b8d4f5', color: '#00397b' };
    return { background: '#e0ebfa', color: '#00397b' };
};

const PerformanceHeatmap = ({ rows, subjects, data }) => (
    <div className={styles.heatmap}>
        <div className={styles.grid}>
            <div className={styles.headerRow}>
                <div className={styles.corner} />
                {subjects.map((subject) => (
                    <div key={subject} className={styles.colHeader}>
                        {subject}
                    </div>
                ))}
            </div>

            {rows.map((rowLabel, rowIndex) => (
                <div key={rowLabel} className={styles.row}>
                    <div className={styles.rowHeader}>{rowLabel}</div>
                    {subjects.map((subject, colIndex) => {
                        const value = data[rowIndex]?.[colIndex];
                        const cellStyle = getCellStyle(value);
                        return (
                            <div
                                key={`${rowLabel}-${subject}`}
                                className={styles.cell}
                                style={cellStyle}
                                title={value != null ? `${rowLabel} · ${subject}: ${value}` : '—'}
                            >
                                {value != null ? value.toFixed(1) : '—'}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>

        <div className={styles.footer}>
            <button type="button" className={styles.interventionBtn}>
                Plano de Intervenção
            </button>

            <div className={styles.legend}>
                <span>&gt; 8,0</span>
                <span className={styles.legendCell} style={{ background: '#00397b' }} />
                <span className={styles.legendCell} style={{ background: '#197dff' }} />
                <span className={styles.legendCell} style={{ background: '#6ba8f0' }} />
                <span className={styles.legendCell} style={{ background: '#b8d4f5' }} />
                <span className={styles.legendCell} style={{ background: '#e0ebfa' }} />
                <span>&lt; 5</span>
            </div>
        </div>
    </div>
);

export default PerformanceHeatmap;

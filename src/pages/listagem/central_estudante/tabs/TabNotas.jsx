import formStyles from '../../../../components/form/FormComponents.module.scss';
import styles from './Tabs.module.scss';
import { GRADES } from '../data/mockData';
import BarChart from '../components/charts/BarChart';
import ContentCard from '../components/ContentCard';

const media = (row) => {
    const values = [row.t1, row.t2, row.t3, row.t4].filter((value) => value !== null);
    if (!values.length) return null;
    return (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);
};

const gradeColor = (value) => {
    if (value === null) return { bg: '#F3F4F6', color: '#999' };
    if (value >= 7) return { bg: '#D1FAE5', color: '#065F46' };
    if (value >= 5) return { bg: '#FEF3C7', color: '#92400E' };
    return { bg: '#FEE2E2', color: '#991B1B' };
};

const GradeCell = ({ value }) => {
    if (value === null) {
        return (
            <td className={styles.gradeCell} style={{ background: '#F3F4F6', color: '#BBB' }}>
                —
            </td>
        );
    }

    const { bg, color } = gradeColor(value);
    return (
        <td className={styles.gradeCell} style={{ background: bg, color }}>
            {value.toFixed(1)}
        </td>
    );
};

const mediaBarData = GRADES.filter((grade) => media(grade) !== null).map((grade) => ({
    label: grade.disciplina.split(' ')[0].substring(0, 4),
    value: parseFloat(media(grade)),
    color:
        parseFloat(media(grade)) >= 7
            ? '#12B76A'
            : parseFloat(media(grade)) >= 5
              ? '#F79009'
              : '#F04438',
}));

const TabNotas = () => (
    <div className={styles.colStack}>
        <div className={formStyles.infoAlertBox}>
            <span>Boletim Escolar</span>
            <p>
                Notas por trimestre — aprovação mínima: <strong>5,0</strong> por trimestre e{' '}
                <strong>7,0</strong> de média anual.
            </p>
        </div>

        <div className={styles.tabGrid}>
            <ContentCard title="Boletim Escolar — 2026" flex="1.5">
                <div className={styles.tableScroll}>
                    <table className={styles.gradeTable}>
                        <thead>
                            <tr>
                                <th>Disciplina</th>
                                <th>1º Tri</th>
                                <th>2º Tri</th>
                                <th>3º Tri</th>
                                <th>4º Tri</th>
                                <th>Média</th>
                                <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {GRADES.map((row, index) => {
                                const avg = media(row);
                                const { bg, color } = gradeColor(avg !== null ? parseFloat(avg) : null);

                                return (
                                    <tr key={index}>
                                        <td className={styles.gradeSubject}>{row.disciplina}</td>
                                        <GradeCell value={row.t1} />
                                        <GradeCell value={row.t2} />
                                        <GradeCell value={row.t3} />
                                        <GradeCell value={row.t4} />
                                        <td
                                            className={styles.gradeCell}
                                            style={{ background: bg, color, fontWeight: 700 }}
                                        >
                                            {avg ?? '—'}
                                        </td>
                                        <td className={styles.gradeCell}>
                                            {avg === null ? (
                                                <span className={styles.chipNeutral}>Dispensado</span>
                                            ) : parseFloat(avg) >= 7 ? (
                                                <span className={styles.chipGreen}>Aprovado</span>
                                            ) : parseFloat(avg) >= 5 ? (
                                                <span className={styles.chipYellow}>Em Prog.</span>
                                            ) : (
                                                <span className={styles.chipRed}>Atenção</span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </ContentCard>

            <ContentCard title="Médias por Disciplina">
                <div className={styles.chartWrap}>
                    <BarChart data={mediaBarData} height={160} />
                </div>
                <div className={styles.legendRow}>
                    <span className={styles.legendDot} style={{ background: '#12B76A' }} />
                    <span>≥ 7,0 Aprovado</span>
                    <span className={styles.legendDot} style={{ background: '#F79009' }} />
                    <span>5,0–6,9 Em Prog.</span>
                    <span className={styles.legendDot} style={{ background: '#F04438' }} />
                    <span>&lt; 5,0 Atenção</span>
                </div>
            </ContentCard>
        </div>
    </div>
);

export default TabNotas;

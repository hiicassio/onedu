import styles from './Tabs.module.scss';
import { STUDENT, ATTENDANCE_MONTHLY, TREND_DATA, HEATMAP } from '../data/mockData';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import HeatmapCalendar from '../components/charts/HeatmapCalendar';

const totalAulas      = ATTENDANCE_MONTHLY.reduce((s, m) => s + m.aulas, 0);
const totalPresencas  = ATTENDANCE_MONTHLY.reduce((s, m) => s + m.presencas, 0);
const totalFaltas     = totalAulas - totalPresencas;
const pctFreq         = Math.round((totalPresencas / totalAulas) * 100);

const barData = ATTENDANCE_MONTHLY.map(m => ({
    label: m.mes,
    value: Math.round((m.presencas / m.aulas) * 100),
}));

const InfoRow = ({ label, value }) => (
    <div className={styles.infoRow}>
        <span className={styles.infoLabel}>{label}</span>
        <span className={styles.infoValue}>{value}</span>
    </div>
);

const TabPerfil = () => (
    <div className={styles.tabGrid}>
        {/* Coluna esquerda — dados do aluno */}
        <div className={styles.card}>
            <span className={styles.cardTitle}>Dados do Aluno</span>
            <InfoRow label="Nome completo"  value={STUDENT.name} />
            <InfoRow label="Matrícula"      value={STUDENT.matricula} />
            <InfoRow label="Código IDSGP"   value={STUDENT.id} />
            <InfoRow label="Data de nasc."  value={STUDENT.dataNasc} />
            <InfoRow label="Nível/Turma"    value={STUDENT.turma} />
            <InfoRow label="Turno"          value={STUDENT.turno} />
            <InfoRow label="Responsável"    value={STUDENT.responsavel} />
            <InfoRow label="Contato"        value={STUDENT.contato} />

            <div className={styles.separator} />

            <div className={styles.statCards}>
                <div className={styles.statCard}>
                    <span className={styles.statNum} style={{ color: '#12B76A' }}>{totalPresencas}</span>
                    <span className={styles.statLbl}>Presenças</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statNum} style={{ color: '#F04438' }}>{totalFaltas}</span>
                    <span className={styles.statLbl}>Faltas</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statNum} style={{ color: '#197DFF' }}>{pctFreq}%</span>
                    <span className={styles.statLbl}>Frequência</span>
                </div>
            </div>
        </div>

        {/* Coluna direita — gráficos */}
        <div className={styles.colRight}>
            <div className={styles.card}>
                <span className={styles.cardTitle}>Frequência Mensal (%)</span>
                <div className={styles.chartWrap}>
                    <BarChart data={barData} height={130} />
                </div>
            </div>

            <div className={styles.card}>
                <span className={styles.cardTitle}>Evolução da Média Acadêmica</span>
                <div className={styles.chartWrap}>
                    <LineChart data={TREND_DATA} height={80} color="#00397B" />
                </div>
            </div>

            <div className={styles.card}>
                <span className={styles.cardTitle}>Calendário de Presença</span>
                <HeatmapCalendar data={HEATMAP} />
            </div>
        </div>
    </div>
);

export default TabPerfil;

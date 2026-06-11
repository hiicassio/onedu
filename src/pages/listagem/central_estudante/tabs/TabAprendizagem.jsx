import {
    LEARNING_BIMESTERS,
    LEARNING_COMPONENTS,
    LEARNING_EVOLUTION,
    LEARNING_SUMMARY,
    PERFORMANCE_HEATMAP,
    PERFORMANCE_ROWS,
    PERFORMANCE_SUBJECTS,
} from '../data/mockData';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import PerformanceHeatmap from '../components/charts/PerformanceHeatmap';
import ContentCard from '../components/ContentCard';
import styles from './TabAprendizagem.module.scss';

const TabAprendizagem = () => (
    <div className={styles.aprendizagem}>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Dados de Aprendizagem</h2>
            <div className={styles.filters}>
                <select className={styles.filterSelect} defaultValue="2026" aria-label="Ano letivo">
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                </select>
                <select className={styles.filterSelect} defaultValue="3" aria-label="Bimestre">
                    <option value="3">3º Bimestre</option>
                    <option value="2">2º Bimestre</option>
                    <option value="1">1º Bimestre</option>
                    <option value="4">4º Bimestre</option>
                </select>
            </div>
        </div>

        <div className={styles.summaryRow}>
            <div className={styles.insightCard}>
                <span className={styles.insightLabel}>Visão Geral Aprendizagem</span>
                <p className={styles.insightText}>{LEARNING_SUMMARY.overview}</p>
            </div>

            <div className={styles.insightCard}>
                <span className={styles.insightLabel}>Média Geral</span>
                <strong className={styles.insightValue}>{LEARNING_SUMMARY.mediaGeral}</strong>
                <span className={styles.insightTrend}>{LEARNING_SUMMARY.mediaTrend}</span>
            </div>

            <div className={styles.insightCard}>
                <span className={styles.insightLabel}>Componentes</span>
                <strong className={styles.insightValue}>{LEARNING_SUMMARY.componentes}</strong>
                <span className={styles.insightSub}>{LEARNING_SUMMARY.componentesSub}</span>
            </div>

            <div className={styles.insightCard}>
                <span className={styles.insightLabel}>Sit. Regime</span>
                <strong className={`${styles.insightValue} ${styles.approved}`}>
                    {LEARNING_SUMMARY.situacaoRegime}
                </strong>
                <span className={styles.insightSub}>{LEARNING_SUMMARY.situacaoSub}</span>
            </div>

            <div className={`${styles.insightCard} ${styles.aiCard}`}>
                <span className={styles.insightLabel}>Diagnóstico IA</span>
                <strong className={styles.aiStatus}>{LEARNING_SUMMARY.aiStatus}</strong>
                <p className={styles.aiText}>{LEARNING_SUMMARY.aiText}</p>
                <button type="button" className={styles.aiLink}>
                    Ver análise detalhada
                </button>
            </div>
        </div>

        <div className={styles.chartsRow}>
            <ContentCard title="Desempenho por Componente" className={styles.chartWide}>
                <div className={styles.chartWrap}>
                    <BarChart
                        data={LEARNING_COMPONENTS}
                        height={150}
                        barColor="#197DFF"
                    />
                </div>
            </ContentCard>

            <ContentCard title="Evolução de Aprendizagem">
                <div className={styles.chartWrap}>
                    <LineChart data={LEARNING_EVOLUTION} height={90} color="#00397B" width={220} />
                </div>
                <div className={styles.bimesterLabels}>
                    {LEARNING_BIMESTERS.map((bimester) => (
                        <span key={bimester}>{bimester}</span>
                    ))}
                </div>
            </ContentCard>

            <ContentCard title="Atividades Digitais">
                <p className={styles.placeholderText}>
                    Engajamento em plataformas digitais e trilhas adaptativas do período.
                </p>
            </ContentCard>
        </div>

        <ContentCard title="Mapa de Calor Desempenho">
            <PerformanceHeatmap
                rows={PERFORMANCE_ROWS}
                subjects={PERFORMANCE_SUBJECTS}
                data={PERFORMANCE_HEATMAP}
            />
        </ContentCard>
    </div>
);

export default TabAprendizagem;

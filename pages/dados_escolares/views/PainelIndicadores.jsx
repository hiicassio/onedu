import FormSection from '../../../components/form/FormSection';
import BarChart from '../../listagem/central_estudante/components/charts/BarChart';
import LineChart from '../../listagem/central_estudante/components/charts/LineChart';
import DonutChart from '../../listagem/central_estudante/components/charts/DonutChart';
import { PAINEL_ALERTAS, PAINEL_GRAFICOS } from '../data/mockReports';
import styles from './PainelIndicadores.module.scss';

const MOCK_INDICATORS = [
    { label: 'Taxa de Aprovação', value: '94%', trend: '+2%' },
    { label: 'Frequência Média', value: '91%', trend: '+1%' },
    { label: 'Evasão Escolar', value: '1,2%', trend: '-0,3%' },
    { label: 'IDEB Projetado', value: '6,1', trend: '+0,2' },
];

const PainelIndicadores = ({ title, description, panelType = 'graficos' }) => {
    const isGraficos = panelType === 'graficos';

    return (
        <div className={styles.painel}>
            <FormSection title={title}>
                {description && <p className={styles.description}>{description}</p>}

                <div className={styles.grid}>
                    {MOCK_INDICATORS.map((item) => (
                        <div key={item.label} className={styles.card}>
                            <span className={styles.label}>{item.label}</span>
                            <strong className={styles.value}>{item.value}</strong>
                            <span className={styles.trend}>{item.trend} vs. período anterior</span>
                        </div>
                    ))}
                </div>

                {isGraficos ? (
                    <div className={styles.chartsGrid}>
                        <div className={styles.chartCard}>
                            <span className={styles.chartTitle}>Desempenho por Turma</span>
                            <BarChart data={PAINEL_GRAFICOS.desempenho} height={140} />
                        </div>

                        <div className={styles.chartCard}>
                            <span className={styles.chartTitle}>Evolução da Frequência</span>
                            <LineChart data={PAINEL_GRAFICOS.frequencia} height={100} width={320} />
                        </div>

                        <div className={styles.chartCard}>
                            <span className={styles.chartTitle}>Distribuição de Resultados</span>
                            <DonutChart data={PAINEL_GRAFICOS.distribuicao} size={110} />
                        </div>
                    </div>
                ) : (
                    <div className={styles.salaGrid}>
                        <div className={styles.chartCard}>
                            <span className={styles.chartTitle}>Situação Geral</span>
                            <DonutChart data={PAINEL_GRAFICOS.distribuicao} size={120} />
                        </div>

                        <div className={styles.alertasCard}>
                            <span className={styles.chartTitle}>Alertas em Tempo Real</span>
                            <ul className={styles.alertasList}>
                                {PAINEL_ALERTAS.map((alerta) => (
                                    <li key={alerta.titulo} className={styles.alertaItem}>
                                        <span className={`${styles.alertaDot} ${styles[`alerta${alerta.nivel}`]}`} />
                                        <div className={styles.alertaContent}>
                                            <strong>{alerta.titulo}</strong>
                                            <span>
                                                {alerta.turma} · {alerta.valor}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </FormSection>
        </div>
    );
};

export default PainelIndicadores;

import styles from './MetricStatCard.module.scss';

const MetricStatCard = ({ value, label, color = '#197dff', trend }) => (
    <div className={styles.metricCard}>
        <span className={styles.label}>{label}</span>
        <strong className={styles.value} style={{ color }}>{value}</strong>
        {trend && <span className={styles.trend}>{trend}</span>}
    </div>
);

export default MetricStatCard;

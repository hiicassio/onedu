import styles from './ContentCard.module.scss';

const ContentCard = ({ title, children, className = '', flex }) => (
    <div
        className={`${styles.contentCard} ${className}`.trim()}
        style={flex !== undefined ? { flex } : undefined}
    >
        {title && <span className={styles.cardTitle}>{title}</span>}
        {children}
    </div>
);

export default ContentCard;

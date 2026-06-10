import AngleSmallLeftIcon from '../../analise_candidato/icones/AngleSmallLeftIcon';
import styles from './RelatorioFooter.module.scss';

const RelatorioFooter = ({
    onBack,
    onNext,
    onFinish,
    showBack = true,
    nextLabel = 'Avançar',
    finishLabel = 'Gerar Relatório',
    isLast = false,
}) => (
    <div className={styles.footer}>
        <div className={styles.footerLeft}>
            {showBack && (
                <button type="button" className={styles.primary} onClick={onBack}>
                    <span>Voltar</span>
                </button>
            )}
        </div>

        <div className={styles.footerRight}>
            {isLast ? (
                <button type="button" className={styles.secondary} onClick={onFinish}>
                    <span>{finishLabel}</span>
                </button>
            ) : (
                <button type="button" className={styles.secondary} onClick={onNext}>
                    <span>{nextLabel}</span>
                    <AngleSmallLeftIcon />
                </button>
            )}
        </div>
    </div>
);

export default RelatorioFooter;

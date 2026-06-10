import FeatherPlayCircleIcon from '../../listagem/gestao_matricula/icones/FeatherPlayCircleIcon';
import DiscoverIcon from '../../../components/icones/DiscoverIcon';
import styles from './RelatoriosHeader.module.scss';

const RelatoriosHeader = () => (
    <header className={styles.header}>
        <div className={styles.content}>
            <div className={styles.text}>
                <span className={styles.title}>Dados Escolares</span>
                <p className={styles.description}>
                    Realize o mapeamento e a extração de dados de forma precisa e simplificada,
                    permitindo acessar informações por meio de relatórios, gráficos e indicadores,
                    em formatos pré-definidos ou totalmente personalizáveis.
                </p>
            </div>

            <div className={styles.actions}>
                <button type="button" className={styles.button}>
                    <span>Apresentação das Funcionalidades</span>
                    <div className={styles.divider} />
                    <FeatherPlayCircleIcon />
                </button>

                <DiscoverIcon className={styles.icon} />
            </div>
        </div>
    </header>
);

export default RelatoriosHeader;

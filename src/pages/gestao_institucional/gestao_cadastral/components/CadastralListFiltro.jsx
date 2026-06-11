import CaminhoIcon from '../../../listagem/controle_matricula/icones/CaminhoIcon';
import FeatherSearchIcon from '../../../listagem/controle_matricula/icones/FeatherSearchIcon';
import UserAddIcon from '../../../listagem/controle_matricula/icones/UserAddIcon';
import styles from '../../../listagem/controle_matricula/Filtro.module.scss';

const CadastralListFiltro = ({
    searchPlaceholder = 'Pesquisar',
    secondaryPlaceholder,
    addLabel = 'Novo cadastro',
    showAddButton = true,
}) => (
    <div className={styles.filtro}>
        <button type="button" className={styles.dash}>
            <CaminhoIcon />
        </button>

        <label className={styles.filtroInput}>
            <button type="button" className={styles.searchButton}>
                <FeatherSearchIcon />
            </button>
            <input
                className={styles.input}
                type="text"
                name="filtro"
                placeholder={searchPlaceholder}
            />
        </label>

        {secondaryPlaceholder && (
            <label className={styles.tags}>
                <button type="button" className={styles.tagsIcon}>
                    <FeatherSearchIcon />
                </button>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={secondaryPlaceholder}
                    style={{ border: 'none', outline: 'none', flex: 1, fontSize: 12 }}
                />
            </label>
        )}

        {showAddButton && (
            <button type="button" className={styles.btnAcao}>
                <UserAddIcon />
                <div className={styles.dividir} />
                <span className={styles.btnText}>{addLabel}</span>
            </button>
        )}
    </div>
);

export default CadastralListFiltro;

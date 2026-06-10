import styles from './Filtro.module.scss'
import CaminhoIcon from './icones/CaminhoIcon';
import FeatherSearchIcon from './icones/FeatherSearchIcon';
import CloseIcon from './icones/CloseIcon';
import ConvertDocumentIcon from './icones/ConvertDocumentIcon';

const Filtro = () => {
    return (
        <div className={styles.filtro}>

            <button className={styles.dash}>
                <CaminhoIcon />
            </button>

            <label className={styles.filtroInput}>
                <button className={styles.searchButton}>
                    <FeatherSearchIcon />
                </button>

                <input
                    className={styles.input}
                    type="text"
                    name="filtro"
                    placeholder="Pesquisar por Aluno, Nível, Curso"
                />
            </label>

            <label className={styles.tags}>
                <button className={styles.tagsIcon}>
                    <FeatherSearchIcon />
                </button>

                <div className={styles.tagsList}>
                    {Array.from({ length: 1 }).map((_, index) => (
                        <div className={styles.tagItem} key={index}>
                            <span className={styles.tagText}>
                                TR001 (2ºANO B)
                            </span>

                            <button className={styles.tagRemove}>
                                <CloseIcon />
                            </button>
                        </div>
                    ))}
                </div>
            </label>

            <button className={styles.btnAcao}>
                <ConvertDocumentIcon />

                <div className={styles.dividir} />

                <span className={styles.btnText}>
                    Novo Histórico
                </span>
            </button>

        </div>
    )
}

export default Filtro;
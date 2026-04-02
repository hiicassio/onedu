import styles from './Filtro.module.scss'
import CaminhoIcon from './icones/CaminhoIcon';
import FeatherSearchIcon from './icones/FeatherSearchIcon';
import CloseIcon from './icones/CloseIcon';
import DropdownSelectIcon from './icones/DropdownSelectIcon';
import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';

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

            <div className={styles.btnAcao}>

                <button className={styles.iconButton}>
                    <DropdownSelectIcon />
                </button>

                <div className={styles.dividir} />

                <div className={styles.content}>
                    <span className={styles.label}>
                        Situação
                    </span>
                    <span className={styles.value}>
                        Todas
                    </span>
                </div>

                <button className={styles.arrowButton}>
                    <ArrowAngleBottomIcon />
                </button>

            </div>

        </div>
    )
}

export default Filtro;
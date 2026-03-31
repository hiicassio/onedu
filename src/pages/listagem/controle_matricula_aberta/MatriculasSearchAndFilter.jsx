import styles from "./MatriculasSearchAndFilter.module.scss";
import CaminhoIcon from './icones/CaminhoIcon';
import FeatherSearchIcon from './icones/FeatherSearchIcon';
import CloseIcon from './icones/CloseIcon';
import UserAddIcon from './icones/UserAddIcon';

const MatriculasSearchAndFilter = () => {
    return (
        <div className={styles.matriculasToolbar}>

            {/* Botão lateral */}
            <button className={styles.matriculasToolbar_sideButton}>
                <CaminhoIcon />
            </button>

            {/* Campo de busca */}
            <label className={styles.matriculasToolbar_search}>
                <button className={styles.matriculasToolbar_searchIcon}>
                    <FeatherSearchIcon />
                </button>

                <input
                    className={styles.matriculasToolbar_searchInput}
                    type="text"
                    placeholder="Pesquisar por Aluno, Nível, Curso"
                />
            </label>

            {/* Filtros + ação */}
            <div className={styles.matriculasToolbar_actions}>

                {/* Filtro selecionado */}
                <div className={styles.matriculasToolbar_filter}>
                    <button className={styles.matriculasToolbar_filter_searchIcon}>
                        <FeatherSearchIcon />
                    </button>
                    <div className={styles.matriculasToolbar_filter_body}>
                        <label className={styles.matriculasToolbar_filterItem}>
                            <span className={styles.matriculasToolbar_filterText}>
                                TR001 (2ºANO B)
                            </span>
                            <CloseIcon />
                        </label>
                    </div>
                </div>

                {/* Botão principal */}
                <button className={styles.matriculasToolbar_primaryButton}>
                    <UserAddIcon />
                    <div className={styles.matriculasToolbar_divider}></div>
                    <span>Nova Matrícula</span>
                </button>
            </div>
        </div>
    )
}

export default MatriculasSearchAndFilter;
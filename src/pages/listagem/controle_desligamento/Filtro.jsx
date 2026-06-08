import styles from './Filtro.module.scss';
import CaminhoIcon from '../controle_transferencias/icones/CaminhoIcon';
import FeatherSearchIcon from '../controle_transferencias/icones/FeatherSearchIcon';
import CloseIcon from '../controle_transferencias/icones/CloseIcon';
import DropdownSelectIcon from '../controle_transferencias/icones/DropdownSelectIcon';
import ArrowAngleBottomIcon from '../controle_transferencias/icones/ArrowAngleBottomIcon';
import AddIcon from '../controle_transferencias/icones/AddIcon';

const Filtro = ({ onOpenDesligamento }) => {
    return (
        <div className={styles.filtro}>

            <button className={styles.dash}>
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
                    placeholder="Pesquisar por Aluno, Nível, Motivo"
                />
            </label>

            <label className={styles.tags}>
                <button type="button" className={styles.tagsIcon}>
                    <FeatherSearchIcon />
                </button>
                <div className={styles.tagsList}>
                    <div className={styles.tagItem}>
                        <span className={styles.tagText}>2026 — Todos os Motivos</span>
                        <button type="button" className={styles.tagRemove}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            </label>

            <div className={styles.select}>
                <div className={styles.selectIcon}>
                    <DropdownSelectIcon />
                </div>
                <div className={styles.selectInfo}>
                    <span className={styles.label}>Situação</span>
                    <span className={styles.value}>Todas</span>
                </div>
                <ArrowAngleBottomIcon />
            </div>

            <button type="button" className={styles.btnAdd} onClick={onOpenDesligamento}>
                <AddIcon />
            </button>

        </div>
    );
};

export default Filtro;

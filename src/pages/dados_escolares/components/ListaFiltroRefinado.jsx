import { useMemo } from 'react';
import FeatherSearchIcon from '../../../components/icones/FeatherSearchIcon';
import AddCircleOutlineIcon from '../../listagem/gestao_matricula/icones/AddCircleOutlineIcon';
import styles from './ListaFiltroRefinado.module.scss';

const TIPO_FILTERS = [
    { id: 'todos', label: 'Todos' },
    { id: 'Pronto', label: 'Prontos' },
    { id: 'OnReport', label: 'OnReport' },
];

const STATUS_FILTERS = [
    { id: 'todos', label: 'Qualquer status' },
    { id: 'Disponível', label: 'Disponível' },
    { id: 'Rascunho', label: 'Rascunho' },
];

const ListaFiltroRefinado = ({
    searchTerm,
    onSearchChange,
    tipoFilter,
    onTipoFilterChange,
    statusFilter,
    onStatusFilterChange,
    onNovoRelatorio,
    resultCount,
}) => {
    const activeFilters = useMemo(() => {
        const chips = [];
        if (tipoFilter !== 'todos') chips.push({ key: 'tipo', label: tipoFilter });
        if (statusFilter !== 'todos') chips.push({ key: 'status', label: statusFilter });
        return chips;
    }, [tipoFilter, statusFilter]);

    const clearFilter = (key) => {
        if (key === 'tipo') onTipoFilterChange('todos');
        if (key === 'status') onStatusFilterChange('todos');
    };

    return (
        <div className={styles.filtro}>
            <div className={styles.topRow}>
                <label className={styles.search}>
                    <FeatherSearchIcon />
                    <input
                        type="search"
                        placeholder="Buscar por nome ou tipo..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </label>

                <button type="button" className={styles.novoBtn} onClick={onNovoRelatorio}>
                    <AddCircleOutlineIcon />
                    <span>Novo Relatório</span>
                </button>
            </div>

            <div className={styles.filterRow}>
                <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>Tipo</span>
                    <div className={styles.chips}>
                        {TIPO_FILTERS.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`${styles.chip} ${tipoFilter === item.id ? styles.chipActive : ''}`}
                                onClick={() => onTipoFilterChange(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>Status</span>
                    <div className={styles.chips}>
                        {STATUS_FILTERS.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`${styles.chip} ${statusFilter === item.id ? styles.chipActive : ''}`}
                                onClick={() => onStatusFilterChange(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.metaRow}>
                <span className={styles.resultCount}>
                    {resultCount} {resultCount === 1 ? 'relatório' : 'relatórios'}
                </span>

                {activeFilters.length > 0 && (
                    <div className={styles.activeChips}>
                        {activeFilters.map((chip) => (
                            <button
                                key={chip.key}
                                type="button"
                                className={styles.activeChip}
                                onClick={() => clearFilter(chip.key)}
                            >
                                {chip.label} ×
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListaFiltroRefinado;

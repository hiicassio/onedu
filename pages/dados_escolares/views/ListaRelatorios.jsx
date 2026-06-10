import { useMemo, useState } from 'react';
import ListaFiltroRefinado from '../components/ListaFiltroRefinado';
import { MOCK_REPORTS } from '../data/mockReports';
import styles from './ListaRelatorios.module.scss';

const ListaRelatorios = ({ sectionLabel, onNovoRelatorio, onAbrirRelatorio }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [tipoFilter, setTipoFilter] = useState('todos');
    const [statusFilter, setStatusFilter] = useState('todos');

    const filteredReports = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        return MOCK_REPORTS.filter((report) => {
            const matchesSearch =
                !term ||
                report.nome.toLowerCase().includes(term) ||
                report.tipo.toLowerCase().includes(term);

            const matchesTipo = tipoFilter === 'todos' || report.tipo === tipoFilter;
            const matchesStatus = statusFilter === 'todos' || report.status === statusFilter;

            return matchesSearch && matchesTipo && matchesStatus;
        });
    }, [searchTerm, tipoFilter, statusFilter]);

    return (
        <div className={styles.lista}>
            <ListaFiltroRefinado
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                tipoFilter={tipoFilter}
                onTipoFilterChange={setTipoFilter}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                onNovoRelatorio={onNovoRelatorio}
                resultCount={filteredReports.length}
            />

            <div className={styles.tableArea}>
                <div className={styles.table}>
                    <div className={styles.header}>
                        <div className={styles.th}>NOME</div>
                        <div className={styles.th}>TIPO</div>
                        <div className={styles.th}>DATA</div>
                        <div className={styles.th}>STATUS</div>
                        <div className={styles.th}>AÇÕES</div>
                    </div>

                    <div className={styles.body}>
                        {filteredReports.map((report) => (
                            <div key={report.id} className={styles.row}>
                                <div className={styles.td}>{report.nome}</div>
                                <div className={styles.td}>{report.tipo}</div>
                                <div className={styles.td}>{report.data}</div>
                                <div className={styles.td}>
                                    <span
                                        className={`${styles.badge} ${
                                            report.status === 'Rascunho' ? styles.badgeDraft : styles.badgeOk
                                        }`}
                                    >
                                        {report.status}
                                    </span>
                                </div>
                                <div className={styles.td}>
                                    <button
                                        type="button"
                                        className={styles.rowAction}
                                        onClick={() => onAbrirRelatorio?.(report)}
                                    >
                                        Abrir
                                    </button>
                                </div>
                            </div>
                        ))}

                        {filteredReports.length === 0 && (
                            <div className={styles.empty}>
                                Nenhum relatório encontrado
                                {sectionLabel ? (
                                    <>
                                        {' '}
                                        em <strong>{sectionLabel}</strong>
                                    </>
                                ) : null}
                                .
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListaRelatorios;

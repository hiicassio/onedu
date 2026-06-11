import ArrowAngleBottomIcon from '../../../listagem/controle_matricula/icones/ArrowAngleBottomIcon';
import CircleAIcon from '../../../listagem/controle_matricula/icones/CircleAIcon';
import Circle1Icon from '../../../listagem/controle_matricula/icones/Circle1Icon';
import styles from './CadastralListTable.module.scss';

const ACTION_COLUMN_WIDTH = '0.5fr';

const CadastralListTable = ({
    columns,
    rows,
    onRowClick,
    showHeaderActions = false,
}) => {
    const gridTemplate = [...columns.map((col) => col.width), ACTION_COLUMN_WIDTH].join(' ');

    return (
        <div className={styles.tableArea}>
            <div className={styles.table}>
                <div className={styles.header} style={{ gridTemplateColumns: gridTemplate }}>
                    {columns.map((column) => (
                        <div
                            key={column.key}
                            className={`${styles.th} ${column.align === 'start' ? styles.thStart : ''}`}
                        >
                            {column.label}
                        </div>
                    ))}

                    <div className={styles.th}>
                        {showHeaderActions ? (
                            <div className={styles.headerActions}>
                                <button type="button" className={`${styles.viewButton} ${styles.active}`}>
                                    <CircleAIcon />
                                </button>
                                <button type="button" className={styles.viewButton}>
                                    <Circle1Icon />
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className={styles.body}>
                    {rows.map((row) => {
                        const RowTag = onRowClick ? 'button' : 'div';
                        return (
                            <RowTag
                                key={row.id}
                                type={onRowClick ? 'button' : undefined}
                                className={styles.areaRow}
                                onClick={onRowClick ? () => onRowClick(row) : undefined}
                            >
                                <div className={styles.row} style={{ gridTemplateColumns: gridTemplate }}>
                                    {columns.map((column) => (
                                        <div
                                            key={column.key}
                                            className={`${styles.td} ${
                                                column.align === 'start' ? styles.tdStart : ''
                                            }`}
                                        >
                                            {column.render ? column.render(row) : row[column.key]}
                                        </div>
                                    ))}

                                    <div className={styles.td}>
                                        <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                    </div>
                                </div>
                            </RowTag>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CadastralListTable;

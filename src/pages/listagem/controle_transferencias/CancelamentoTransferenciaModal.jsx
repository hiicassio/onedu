import DrawerComponent from '../../../components/DrawerComponent';
import AngleSmallLeftIcon from '../../analise_candidato/icones/AngleSmallLeftIcon';
import formStyles from '../../../components/form/FormComponents.module.scss';
import styles from './CancelamentoTransferenciaModal.module.scss';

const CancelamentoTransferenciaModal = ({
    open,
    onClose,
    student,
    onConfirm,
}) => {
    const handleClose = () => onClose?.();

    const handleConfirm = () => {
        onConfirm?.(student);
        handleClose();
    };

    const btnsFooterModal = [
        {
            id: 1,
            descricao: 'Voltar',
            class: 'primary',
            icone: <AngleSmallLeftIcon />,
            func: handleClose,
        },
        {
            id: 2,
            descricao: 'Confirmar Cancelamento',
            class: 'secondary',
            func: handleConfirm,
        },
    ];

    if (!student) return null;

    return (
        <DrawerComponent
            bgColor="#fff"
            openCloseDrawer={open}
            setOpenCloseDrawer={handleClose}
            btnsFooterModal={btnsFooterModal}
            titulo="Cancelamento de Transferência"
        >
            <div className={styles.modal}>
                <div className={formStyles.infoAlertBox}>
                    <span>Atenção</span>
                    <p>
                        Você está prestes a cancelar a transferência de{' '}
                        <strong>{student.name}</strong>. Esta ação não pode ser desfeita.
                    </p>
                </div>

                <div className={styles.summaryList}>
                    <div className={styles.summaryRow}>
                        <span>Matrícula</span>
                        <p>{student.matricula}</p>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Turma / Nível</span>
                        <p>{student.nivel}</p>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Tipo de Transferência</span>
                        <p>{student.destino}</p>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Destino</span>
                        <p>{student.local_destino}</p>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Responsável pelo registro</span>
                        <p>{student.responsavel ?? 'Simone Tabet Filha'}</p>
                    </div>
                </div>

                <label className={styles.motivoField}>
                    <span>Motivo do cancelamento</span>
                    <textarea
                        placeholder="Descreva o motivo do cancelamento..."
                        defaultValue=""
                    />
                </label>
            </div>
        </DrawerComponent>
    );
};

export default CancelamentoTransferenciaModal;

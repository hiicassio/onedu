import { useNavigate } from 'react-router-dom';
import TrashIcon from '../../controle_transferencias/icones/TrashIcon';
import PenSquareIcon from '../../controle_transferencias/icones/PenSquareIcon';
import PrintIcon from '../../controle_transferencias/icones/PrintIcon';
import TelegramIcon from '../../controle_transferencias/icones/TelegramIcon';
import WhatsappIcon from '../../controle_transferencias/icones/WhatsappIcon';
import styles from './TransferenciaRowActions.module.scss';

const DEFAULT_WHATSAPP = '5521999620251';

const buildWhatsappUrl = (phone) => {
    const digits = (phone ?? DEFAULT_WHATSAPP).replace(/\D/g, '');
    return `https://wa.me/${digits}`;
};

const TransferenciaRowActions = ({
    student,
    onCancel,
    onEdit,
    onPrint,
    onNotify,
    onWhatsapp,
}) => {
    const navigate = useNavigate();

    const stop = (event) => event.stopPropagation();

    const handleEdit = () => {
        if (onEdit) return onEdit(student);
        navigate('/gestao-matricula/central-estudante', { state: { studentId: student?.id } });
    };

    const handlePrint = () => {
        if (onPrint) return onPrint(student);
        window.print();
    };

    const handleNotify = () => {
        if (onNotify) return onNotify(student);
        navigate('/gestao-matricula/documentos-express');
    };

    const handleWhatsapp = () => {
        if (onWhatsapp) return onWhatsapp(student);
        window.open(buildWhatsappUrl(student?.whatsapp ?? student?.contato), '_blank', 'noopener,noreferrer');
    };

    const actions = [
        {
            id: 'cancel',
            label: 'Cancelar transferência',
            icon: TrashIcon,
            variant: 'danger',
            onClick: () => onCancel?.(student),
        },
        {
            id: 'edit',
            label: 'Central do Estudante',
            icon: PenSquareIcon,
            onClick: handleEdit,
        },
        {
            id: 'print',
            label: 'Imprimir registro',
            icon: PrintIcon,
            onClick: handlePrint,
        },
        {
            id: 'notify',
            label: 'Documentos Express',
            icon: TelegramIcon,
            onClick: handleNotify,
        },
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            icon: WhatsappIcon,
            onClick: handleWhatsapp,
        },
    ];

    return (
        <div className={styles.actions} onClick={stop}>
            {actions.map(({ id, label, icon: Icon, variant, onClick }) => (
                <button
                    key={id}
                    type="button"
                    className={`${styles.actionButton} ${variant === 'danger' ? styles.actionButtonDanger : ''}`}
                    title={label}
                    aria-label={label}
                    onClick={onClick}
                >
                    <Icon />
                </button>
            ))}
        </div>
    );
};

export default TransferenciaRowActions;

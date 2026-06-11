import { useNavigate } from 'react-router-dom';
import CrossCircleIcon from '../../controle_matricula/icones/CrossCircleIcon';
import InfoIcon from '../../controle_matricula/icones/InfoIcon';
import ChartUserIcon from '../../controle_matricula/icones/ChartUserIcon';
import DocumentIconList from '../../controle_matricula/icones/DocumentIconList';
import PriorityArrowsIcon from '../../controle_matricula/icones/PriorityArrowsIcon';
import AlertaSensorIcon from '../../controle_matricula/icones/AlertaSensorIcon';
import WhatsappIcon from '../../controle_matricula/icones/WhatsappIcon';
import styles from './MatriculaRowActions.module.scss';

const MatriculaRowActions = ({
    onDesligamento,
    onInfo,
    onDocumentos,
    onTransferencia,
    className = '',
}) => {
    const navigate = useNavigate();

    const stop = (event) => event.stopPropagation();

    const actions = [
        {
            id: 'desligamento',
            label: 'Desligamento Express',
            icon: CrossCircleIcon,
            variant: 'danger',
            onClick: onDesligamento,
        },
        {
            id: 'info',
            label: 'Gestão de Pessoas',
            icon: InfoIcon,
            onClick: onInfo,
        },
        {
            id: 'transferencia',
            label: 'Gestão de Transferências',
            icon: ChartUserIcon,
            onClick: () => navigate('/gestao-matricula/controle-transferencias'),
        },
        {
            id: 'documentos',
            label: 'Documentos Express',
            icon: DocumentIconList,
            onClick: onDocumentos,
        },
        {
            id: 'transferencia-modal',
            label: 'Transferência do Aluno',
            icon: PriorityArrowsIcon,
            onClick: onTransferencia,
        },
        {
            id: 'ocorrencias',
            label: 'Monitoramento de Ocorrências',
            icon: AlertaSensorIcon,
            onClick: () => navigate('/gestao-matricula/controle-ocorrencias'),
        },
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            icon: WhatsappIcon,
            onClick: () => {},
        },
    ];

    return (
        <div className={`${styles.actions} ${className}`} onClick={stop}>
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

export default MatriculaRowActions;

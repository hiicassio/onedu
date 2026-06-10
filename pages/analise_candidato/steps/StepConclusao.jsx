import CheckCircleIcon from '../../home/icones/CheckCircleIcon';
import SuccessScreen from '../../../components/form/SuccessScreen';

const StepConclusao = () => (
    <SuccessScreen
        icon={<CheckCircleIcon />}
        title="Transferência realizada com sucesso!"
        description="O aluno foi transferido para a unidade de destino. O documento oficial foi gerado e está disponível para impressão no histórico de transferências."
    />
);

export default StepConclusao;

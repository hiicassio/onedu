import CheckCircleIcon from '../../home/icones/CheckCircleIcon';
import SuccessScreen from '../../../components/form/SuccessScreen';

const StepConclusao = () => (
    <SuccessScreen
        icon={<CheckCircleIcon />}
        title="Desligamento realizado com sucesso!"
        description="O aluno foi desligado desta unidade escolar. O registro foi gerado e está disponível no histórico de ações de matrícula."
    />
);

export default StepConclusao;

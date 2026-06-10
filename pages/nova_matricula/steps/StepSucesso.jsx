import SuccessScreen from '../../../components/form/SuccessScreen';
import CheckCircleIcon from '../../home/icones/CheckCircleIcon';

const StepSucesso = () => (
    <SuccessScreen
        icon={<CheckCircleIcon />}
        title="Matrícula realizada com sucesso!"
        description="A matrícula foi registrada. O responsável receberá as informações de acesso e cobrança por e-mail."
    />
);

export default StepSucesso;

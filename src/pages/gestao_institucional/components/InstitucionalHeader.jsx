import ModuleBlueHeader from '../../../components/ModuleBlueHeader/ModuleBlueHeader';
import AppsAddIcon from '../../../components/icones/AppsAddIcon';

const INSTITUCIONAL_DESCRIPTION =
    'Neste ambiente, você poderá configurar o funcionamento da sua escola, realizar os cadastros essenciais para a operação do sistema e acessar informações importantes sobre a rotina e a gestão escolar. Além disso, será possível acompanhar indicadores, ajustar parâmetros operacionais e garantir que todos os módulos trabalhem de forma integrada e alinhada às necessidades da unidade escolar.';

const InstitucionalHeader = () => (
    <ModuleBlueHeader
        title="Gestão Institucional"
        description={INSTITUCIONAL_DESCRIPTION}
        headerIcon={AppsAddIcon}
        descriptionMaxWidth={900}
        textPadding="32px 58px"
    />
);

export default InstitucionalHeader;

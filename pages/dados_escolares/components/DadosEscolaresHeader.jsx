import ModuleBlueHeader from '../../../components/ModuleBlueHeader/ModuleBlueHeader';
import DiscoverIcon from '../../../components/icones/DiscoverIcon';
import { DADOS_ESCOLARES_DESCRIPTION } from '../data/dadosEscolaresData';

const DadosEscolaresHeader = () => (
    <ModuleBlueHeader
        title="Dados Escolares"
        description={DADOS_ESCOLARES_DESCRIPTION}
        headerIcon={DiscoverIcon}
    />
);

export default DadosEscolaresHeader;

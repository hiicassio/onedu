import ModuleBlueHeader from '../../../../components/ModuleBlueHeader/ModuleBlueHeader';
import DiscoverIcon from '../../../../components/icones/DiscoverIcon';
import { PROTOCOLO_DIGITAL_DESCRIPTION } from '../data/protocoloDigitalData';

const ProtocoloDigitalHeader = () => (
    <ModuleBlueHeader
        title="Protocolo Digital"
        description={PROTOCOLO_DIGITAL_DESCRIPTION}
        headerIcon={DiscoverIcon}
    />
);

export default ProtocoloDigitalHeader;

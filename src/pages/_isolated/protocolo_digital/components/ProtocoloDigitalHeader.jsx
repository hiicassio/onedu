import ModuleBlueHeader from '../../../../components/ModuleBlueHeader/ModuleBlueHeader';
import DocumentIcon from '../../../listagem/gestao_matricula/icones/DocumentIcon';
import { PROTOCOLO_DIGITAL_DESCRIPTION } from '../data/protocoloDigitalData';

const ProtocoloDigitalHeader = () => (
    <ModuleBlueHeader
        title="Protocolo Digital"
        description={PROTOCOLO_DIGITAL_DESCRIPTION}
        headerIcon={DocumentIcon}
    />
);

export default ProtocoloDigitalHeader;

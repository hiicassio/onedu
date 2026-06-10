import { useState } from 'react';
import DrawerComponent from '../../components/DrawerComponent';
import WizardSteps from '../../components/form/WizardSteps';
import AngleSmallLeftIcon from '../analise_candidato/icones/AngleSmallLeftIcon';
import ExclamationIcon from '../analise_candidato/icones/ExclamationIcon';
import DocumentIcon from '../analise_candidato/icones/DocumentIcon';
import FeatherPrinterIcon from '../analise_candidato/icones/FeatherPrinterIcon';
import OperationIcon from '../analise_candidato/icones/OperationIcon';
import StepIdentificacao from './steps/StepIdentificacao';
import StepMotivo from './steps/StepMotivo';
import StepTermos from './steps/StepTermos';
import StepRevisao from './steps/StepRevisao';
import StepConclusao from './steps/StepConclusao';
import styles from './DesligamentoExpress.module.scss';

const STEPS = [
    { id: 1, icon: <ExclamationIcon />, label: 'Identificação' },
    { id: 2, icon: <DocumentIcon />,    label: 'Motivo' },
    { id: 3, icon: <FeatherPrinterIcon />, label: 'Termos' },
    { id: 4, icon: <OperationIcon />,   label: 'Revisão' },
];

const TOTAL_STEPS = 4;

const DesligamentoExpress = ({ openCloseDrawer, setOpenCloseDrawer }) => {
    const [etapa, setEtapa] = useState(1);

    const isFirst     = etapa === 1;
    const isFinal     = etapa === TOTAL_STEPS;
    const isConclusao = etapa === TOTAL_STEPS + 1;

    const avancar = () => setEtapa(prev => prev + 1);
    const voltar  = () => setEtapa(prev => prev - 1);

    const handleClose = () => {
        setOpenCloseDrawer(false);
        // Pequeno delay para o drawer fechar antes de resetar o estado
        setTimeout(() => setEtapa(1), 400);
    };

    const btnsFooterModal = isConclusao
        ? [
            {
                id: 1,
                descricao: 'Fechar',
                class: 'secondary',
                func: handleClose,
            },
        ]
        : [
            ...(!isFirst ? [{
                id: 0,
                descricao: 'Voltar',
                class: 'primary',
                func: voltar,
            }] : []),
            {
                id: 1,
                descricao: isFinal ? 'Finalizar Desligamento' : 'Próximo',
                icone: isFinal ? null : <AngleSmallLeftIcon />,
                class: 'secondary',
                func: avancar,
            },
        ];

    return (
        <DrawerComponent
            bgColor="#fff"
            openCloseDrawer={openCloseDrawer}
            setOpenCloseDrawer={handleClose}
            btnsFooterModal={btnsFooterModal}
            titulo="Desligamento Express"
        >
            <div className={styles.desligamentoExpress}>
                {!isConclusao && (
                    <WizardSteps steps={STEPS} activeStep={etapa} />
                )}

                <form
                    className={styles.desligamentoExpress_form}
                    onSubmit={e => e.preventDefault()}
                >
                    {etapa === 1 && <StepIdentificacao />}
                    {etapa === 2 && <StepMotivo />}
                    {etapa === 3 && <StepTermos />}
                    {etapa === 4 && <StepRevisao />}
                    {etapa === 5 && <StepConclusao />}
                </form>
            </div>
        </DrawerComponent>
    );
};

export default DesligamentoExpress;

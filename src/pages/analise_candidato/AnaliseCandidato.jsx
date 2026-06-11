import { useState } from 'react';
import DrawerComponent from '../../components/DrawerComponent';
import WizardSteps from '../../components/form/WizardSteps';
import AngleSmallLeftIcon from './icones/AngleSmallLeftIcon';
import ExclamationIcon from './icones/ExclamationIcon';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import OperationIcon from './icones/OperationIcon';
import FeatherPrinterIcon from './icones/FeatherPrinterIcon';
import StepDados from './steps/StepDados';
import StepTransferencia from './steps/StepTransferencia';
import StepConfiguracoes from './steps/StepConfiguracoes';
import StepDocumento from './steps/StepDocumento';
import StepConclusao from './steps/StepConclusao';
import styles from './AnaliseCandidato.module.scss';

const STEPS = [
    { id: 1, icon: <ExclamationIcon />,    label: 'Dados' },
    { id: 2, icon: <PriorityArrowsIcon />, label: 'Transferência' },
    { id: 3, icon: <OperationIcon />,      label: 'Configurações' },
    { id: 4, icon: <FeatherPrinterIcon />, label: 'Conclusão' },
];

const TOTAL_STEPS = 4;

const AnaliseCandidato = ({ openCloseDrawer, setOpenCloseDrawer }) => {
    const [etapa, setEtapa] = useState(1);

    const isFirst     = etapa === 1;
    const isFinal     = etapa === TOTAL_STEPS;
    const isConclusao = etapa > TOTAL_STEPS;

    const avancar = () => setEtapa(prev => prev + 1);
    const voltar  = () => setEtapa(prev => prev - 1);

    const handleClose = () => {
        setOpenCloseDrawer(false);
        setTimeout(() => setEtapa(1), 400);
    };

    const btnsFooterModal = isConclusao
        ? [{ id: 1, descricao: 'Fechar', class: 'secondary', func: handleClose }]
        : [
            ...(!isFirst ? [{
                id: 0,
                descricao: 'Voltar',
                class: 'primary',
                func: voltar,
            }] : []),
            {
                id: 1,
                descricao: isFinal ? 'Concluir' : 'Avançar',
                icone: <AngleSmallLeftIcon />,
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
            titulo="Transferência do Aluno"
        >
            <div className={styles.analiseCandidato}>
                {!isConclusao && (
                    <WizardSteps steps={STEPS} activeStep={etapa} />
                )}

                <form
                    className={styles.analiseCandidato_form}
                    onSubmit={e => e.preventDefault()}
                >
                    {etapa === 1 && <StepDados />}
                    {etapa === 2 && <StepTransferencia />}
                    {etapa === 3 && <StepConfiguracoes />}
                    {etapa === 4 && <StepDocumento />}
                    {etapa === 5 && <StepConclusao />}
                </form>
            </div>
        </DrawerComponent>
    );
};

export default AnaliseCandidato;

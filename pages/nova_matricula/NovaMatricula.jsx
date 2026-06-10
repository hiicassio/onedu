import DrawerComponent from '../../components/DrawerComponent';
import WizardSteps from '../../components/form/WizardSteps';
import AngleSmallLeftIcon from '../analise_candidato/icones/AngleSmallLeftIcon';
import ExclamationIcon from '../analise_candidato/icones/ExclamationIcon';
import DocumentIcon from '../analise_candidato/icones/DocumentIcon';
import OperationIcon from '../analise_candidato/icones/OperationIcon';
import FeatherPrinterIcon from '../analise_candidato/icones/FeatherPrinterIcon';
import StepDados from './steps/StepDados';
import StepFinanceiro from './steps/StepFinanceiro';
import StepDocumentos from './steps/StepDocumentos';
import StepRevisao from './steps/StepRevisao';
import StepSucesso from './steps/StepSucesso';
import styles from './NovaMatricula.module.scss';

const STEPS = [
    { id: 1, icon: <ExclamationIcon />, label: 'Dados' },
    { id: 2, icon: <OperationIcon />, label: 'Financeiro' },
    { id: 3, icon: <DocumentIcon />, label: 'Documentos' },
    { id: 4, icon: <FeatherPrinterIcon />, label: 'Conclusão' },
];

const FOOTER_LABELS = {
    1: 'Próximo',
    2: 'Próximo',
    3: 'Próximo',
    4: 'Finalizar',
    5: 'Voltar ao início',
};

const NovaMatricula = ({ openCloseDrawer, setOpenCloseDrawer }) => {
    const etapa = 1;

    const btnsFooterModal = [
        {
            id: 1,
            descricao: FOOTER_LABELS[etapa] || 'Próximo',
            icone: <AngleSmallLeftIcon />,
            class: 'secondary',
        },
    ];

    return (
        <DrawerComponent
            bgColor="#fff"
            openCloseDrawer={openCloseDrawer}
            setOpenCloseDrawer={setOpenCloseDrawer}
            btnsFooterModal={btnsFooterModal}
            titulo="Nova Matrícula"
        >
            <div className={styles.novaMatricula}>
                {etapa <= 4 && <WizardSteps steps={STEPS} activeStep={etapa} />}

                <form className={styles.novaMatricula_form}>
                    {etapa === 1 && <StepDados />}
                    {etapa === 2 && <StepFinanceiro />}
                    {etapa === 3 && <StepDocumentos />}
                    {etapa === 4 && <StepRevisao />}
                    {etapa === 5 && <StepSucesso />}
                </form>
            </div>
        </DrawerComponent>
    );
};

export default NovaMatricula;

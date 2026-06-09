import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AngleSmallLeftIcon from '../../../pages/analise_candidato/icones/AngleSmallLeftIcon';
import PersonalDataForm from './PersonalDataForm';
import AddressForm from './AddressForm';
import FiliacaoForm from './FiliacaoForm';
import SaudeForm from './SaudeForm';
import DocumentacaoForm from './DocumentacaoForm';
import DadosEscolaresForm from './DadosEscolaresForm';
import ResumoMatricula, { exportMatriculaFicha } from './ResumoMatricula';
import styles from './EnrollmentStepper.module.scss';

const STEPS = [
    { id: 1, label: 'Dados Pessoais' },
    { id: 2, label: 'Endereço' },
    { id: 3, label: 'Filiação' },
    { id: 4, label: 'Saúde' },
    { id: 5, label: 'Documentação' },
    { id: 6, label: 'Dados Escolares' },
    { id: 7, label: 'Revisão' },
];

const TOTAL_STEPS = STEPS.length;

const getInitialFormData = () => ({
    dadosPessoais: {},
    endereco: {},
    filiacao: {},
    saude: {},
    documentacao: {},
    dadosEscolares: {},
});

const EnrollmentStepper = () => {
    const location = useLocation();
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState(getInitialFormData);

    const isFirst = activeStep === 1;
    const isLast = activeStep === TOTAL_STEPS;

    useEffect(() => {
        if (location.pathname.includes('minha-escola')) {
            setActiveStep(1);
            setFormData(getInitialFormData());
        }
    }, [location.pathname, location.key, location.state?.resetAt]);

    const handleFormChange = (stepKey, newData) => {
        setFormData((prev) => ({
            ...prev,
            [stepKey]: {
                ...prev[stepKey],
                ...newData,
            },
        }));
    };

    const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 1));

    const handleFinish = () => {
        console.log('Payload Final:', formData);
        alert('Matrícula finalizada com sucesso!');
    };

    const handleExport = () => {
        exportMatriculaFicha(formData);
    };

    const formProps = { formData, handleFormChange };

    return (
        <div className={styles.enrollmentStepper}>
            <div className={styles.content}>
                <div className={styles.progressBar}>
                    {STEPS.map((step, index) => {
                        const isActive = activeStep === step.id;
                        const isDone = activeStep > step.id;

                        return (
                            <div key={step.id} className={styles.progressStep}>
                                <div className={styles.progressTrack}>
                                    {index > 0 && (
                                        <div
                                            className={`${styles.progressLine} ${isDone || isActive ? styles.progressLineDone : ''}`}
                                        />
                                    )}

                                    <div
                                        className={`
                                            ${styles.progressCircle}
                                            ${isActive ? styles.progressCircleActive : ''}
                                            ${isDone ? styles.progressCircleDone : ''}
                                        `}
                                    >
                                        {step.id}
                                    </div>

                                    {index < STEPS.length - 1 && (
                                        <div
                                            className={`${styles.progressLine} ${isDone ? styles.progressLineDone : ''}`}
                                        />
                                    )}
                                </div>

                                <span
                                    className={`${styles.progressLabel} ${isActive ? styles.progressLabelActive : ''}`}
                                >
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {activeStep === 1 && <PersonalDataForm {...formProps} />}
                {activeStep === 2 && <AddressForm {...formProps} />}
                {activeStep === 3 && <FiliacaoForm {...formProps} />}
                {activeStep === 4 && <SaudeForm {...formProps} />}
                {activeStep === 5 && <DocumentacaoForm {...formProps} />}
                {activeStep === 6 && <DadosEscolaresForm {...formProps} />}
                {activeStep === 7 && <ResumoMatricula formData={formData} />}
            </div>

            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    {!isFirst && (
                        <button type="button" className={styles.primary} onClick={handleBack}>
                            <span>Voltar</span>
                        </button>
                    )}
                </div>

                <div className={styles.footerRight}>
                    {isLast ? (
                        <>
                            <button type="button" className={styles.primary} onClick={handleExport}>
                                <span>Exportar Ficha de Matrícula</span>
                            </button>
                            <button type="button" className={styles.secondary} onClick={handleFinish}>
                                <span>Finalizar Matrícula</span>
                            </button>
                        </>
                    ) : (
                        <button type="button" className={styles.secondary} onClick={handleNext}>
                            <span>Avançar</span>
                            <AngleSmallLeftIcon />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnrollmentStepper;

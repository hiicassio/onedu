import { useState } from 'react';
import RelatorioFooter from '../../components/RelatorioFooter';
import StepSelecao from './StepSelecao';
import StepParametros from './StepParametros';
import StepPreview from './StepPreview';
import StepRelatorioFinal from './StepRelatorioFinal';
import styles from './RelatorioWizard.module.scss';

const STEPS = [
    { id: 1, label: 'Seleção' },
    { id: 2, label: 'Parâmetros' },
    { id: 3, label: 'Pré-visualização' },
    { id: 4, label: 'Relatório' },
];

const getInitialWizardData = () => ({
    template: 'lista-turma',
    ano: '2026',
    turma: '3a',
    campos: ['nome', 'matricula', 'turma', 'frequencia'],
});

const RelatorioWizard = ({ reportName, onCancel, onComplete }) => {
    const [activeStep, setActiveStep] = useState(1);
    const [wizardData, setWizardData] = useState(getInitialWizardData);

    const isFirst = activeStep === 1;
    const isLast = activeStep === STEPS.length;

    const handleChange = (patch) => {
        setWizardData((prev) => ({ ...prev, ...patch }));
    };

    const handleBack = () => {
        if (isFirst) {
            onCancel?.();
            return;
        }
        setActiveStep((prev) => prev - 1);
    };

    const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, STEPS.length));

    const handleFinish = () => {
        onComplete?.(wizardData);
    };

    return (
        <div className={styles.wizard}>
            <div className={styles.progressBar}>
                {STEPS.map((step, index) => {
                    const isActive = activeStep === step.id;
                    const isDone = activeStep > step.id;

                    return (
                        <div key={step.id} className={styles.progressStep}>
                            <div className={styles.progressTrack}>
                                {index > 0 && (
                                    <div
                                        className={`${styles.progressLine} ${
                                            isDone || isActive ? styles.progressLineDone : ''
                                        }`}
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
                                        className={`${styles.progressLine} ${
                                            isDone ? styles.progressLineDone : ''
                                        }`}
                                    />
                                )}
                            </div>

                            <span
                                className={`${styles.progressLabel} ${
                                    isActive ? styles.progressLabelActive : ''
                                }`}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className={styles.content}>
                {activeStep === 1 && (
                    <StepSelecao
                        reportName={reportName}
                        value={wizardData.template}
                        onChange={(template) => handleChange({ template })}
                    />
                )}
                {activeStep === 2 && (
                    <StepParametros wizardData={wizardData} onChange={handleChange} />
                )}
                {activeStep === 3 && <StepPreview wizardData={wizardData} />}
                {activeStep === 4 && (
                    <StepRelatorioFinal wizardData={wizardData} reportName={reportName} />
                )}
            </div>

            <RelatorioFooter
                showBack
                onBack={handleBack}
                onNext={handleNext}
                onFinish={handleFinish}
                isLast={isLast}
                nextLabel={activeStep === 3 ? 'Gerar Relatório' : 'Avançar'}
                finishLabel="Concluir"
            />
        </div>
    );
};

export default RelatorioWizard;

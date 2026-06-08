import styles from './FormComponents.module.scss';

const WizardSteps = ({ steps, activeStep }) => (
    <div className={styles.wizardSteps}>
        {steps.map((step) => (
            <button
                key={step.id}
                type="button"
                className={`${styles.wizardStep} ${activeStep === step.id ? styles.wizardStepActive : ''}`}
            >
                {step.icon}
                <span>{step.label}</span>
            </button>
        ))}
    </div>
);

export default WizardSteps;

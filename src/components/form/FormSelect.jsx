import styles from './FormComponents.module.scss';

const FormSelect = ({
    label,
    name,
    placeholder = 'Selecione...',
    options = [],
    icon,
    bg = false,
}) => (
    <label className={`${styles.formField} ${bg ? styles.formFieldBg : ''}`}>
        {icon && (
            <div className={styles.formFieldIcon}>{icon}</div>
        )}
        <div className={styles.formFieldGroup}>
            <span>{label}</span>
            <select name={name} defaultValue="">
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    </label>
);

export default FormSelect;

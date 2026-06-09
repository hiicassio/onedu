import styles from './FormComponents.module.scss';

const FormSelect = ({
    label,
    name,
    placeholder = 'Selecione...',
    options = [],
    icon,
    bg = false,
    value,
    onChange,
}) => (
    <label className={`${styles.formField} ${bg ? styles.formFieldBg : ''}`}>
        {icon && (
            <div className={styles.formFieldIcon}>{icon}</div>
        )}
        <div className={styles.formFieldGroup}>
            <span>{label}</span>
            <select
                name={name}
                value={onChange ? (value ?? '') : undefined}
                defaultValue={onChange ? undefined : ''}
                onChange={onChange}
            >
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

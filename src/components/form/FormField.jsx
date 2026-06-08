import styles from './FormComponents.module.scss';

const FormField = ({
    label,
    name,
    type = 'text',
    placeholder,
    icon,
    action,
    avatar,
    bg = false,
    defaultValue,
}) => (
    <label className={`${styles.formField} ${bg ? styles.formFieldBg : ''}`}>
        {avatar && (
            <img className={styles.formFieldAvatar} src={avatar} alt="" />
        )}
        {icon && (
            <div className={styles.formFieldIcon}>{icon}</div>
        )}
        <div className={styles.formFieldGroup}>
            <span>{label}</span>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                readOnly={defaultValue !== undefined}
            />
        </div>
        {action && (
            <div className={styles.formFieldAction}>{action}</div>
        )}
    </label>
);

export default FormField;

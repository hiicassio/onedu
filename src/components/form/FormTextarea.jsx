import styles from './FormComponents.module.scss';

const FormTextarea = ({ label, name, placeholder, rows = 4 }) => (
    <label className={styles.formTextarea}>
        <span>{label}</span>
        <textarea
            name={name}
            placeholder={placeholder}
            rows={rows}
        />
    </label>
);

export default FormTextarea;

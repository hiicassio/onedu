import styles from './FormComponents.module.scss';

const FormCheckbox = ({ label, name, id }) => (
    <div className={styles.formCheckbox}>
        <input type="checkbox" name={name} id={id || name} />
        <label htmlFor={id || name}>{label}</label>
    </div>
);

export default FormCheckbox;

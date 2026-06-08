import styles from './FormComponents.module.scss';

const FormGrid = ({ children }) => (
    <div className={styles.formGrid}>{children}</div>
);

export default FormGrid;

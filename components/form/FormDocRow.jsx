import styles from './FormComponents.module.scss';

/**
 * Linha de documento reutilizável:
 * [ icon ] [ label / select ] [ ...actions (children) ]
 *
 * Usage:
 *   <FormDocRow icon={<DocumentIcon />} label="Tipo de Documento" name="tipo" options={[...]}>
 *     <div className={styles.formDocAction}><EyeIcon /></div>
 *     <GovBrButton />
 *   </FormDocRow>
 */
const FormDocRow = ({ icon, label, name, options = [], defaultValue, children }) => (
    <div className={styles.formDocRow}>
        <div className={styles.formDocIcon}>{icon}</div>
        <div className={styles.formDocGroup}>
            <span>{label}</span>
            <select name={name} defaultValue={defaultValue ?? options[0]?.value ?? ''}>
                {options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
        </div>
        {children}
    </div>
);

export default FormDocRow;

import FormField from './FormField';
import FormGrid from './FormGrid';
import styles from './FormComponents.module.scss';

const StudentInfoCard = ({ avatar, name, fields = [] }) => (
    <div className={styles.studentInfoCard}>
        <div className={styles.studentInfoHeader}>
            {avatar && <img src={avatar} alt="" />}
            {name && <span className={styles.studentInfoName}>{name}</span>}
        </div>
        {fields.length > 0 && (
            <div className={styles.studentInfoGrid}>
                {fields.map((field) => (
                    <FormField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        placeholder={field.placeholder}
                        defaultValue={field.value}
                        bg
                    />
                ))}
            </div>
        )}
    </div>
);

export default StudentInfoCard;

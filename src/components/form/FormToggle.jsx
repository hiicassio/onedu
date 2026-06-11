import { useState } from 'react';
import styles from './FormComponents.module.scss';

const FormToggle = ({ label, name, defaultChecked = true }) => {
    const [on, setOn] = useState(defaultChecked);

    return (
        <div className={styles.formToggleItem} onClick={() => setOn(v => !v)}>
            <span>{label}</span>
            <div className={`${styles.toggleSwitch} ${on ? styles.toggleSwitchOn : ''}`}>
                <div className={styles.toggleKnob} />
            </div>
            <input type="hidden" name={name} value={on ? '1' : '0'} readOnly />
        </div>
    );
};

export default FormToggle;

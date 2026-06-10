import FeatherPlayCircleIcon from '../../pages/listagem/gestao_matricula/icones/FeatherPlayCircleIcon';
import AppsAddIcon from '../icones/AppsAddIcon';
import styles from './ModuleBlueHeader.module.scss';

const ModuleBlueHeader = ({
    title,
    description,
    headerIcon: HeaderIcon = AppsAddIcon,
    descriptionMaxWidth = 487,
    textPadding = '20px 58px',
}) => (
    <div className={styles.content}>
        <div className={styles.text} style={{ padding: textPadding }}>
            <span className={styles.title}>{title}</span>
            <p
                className={styles.description}
                style={{ maxWidth: descriptionMaxWidth }}
            >
                {description}
            </p>
        </div>

        <div className={styles.actions}>
            <button type="button" className={styles.button}>
                <span>Apresentação das funcionalidades</span>
                <div className={styles.divider} />
                <FeatherPlayCircleIcon />
            </button>

            <HeaderIcon className={styles.icon} />
        </div>
    </div>
);

export default ModuleBlueHeader;

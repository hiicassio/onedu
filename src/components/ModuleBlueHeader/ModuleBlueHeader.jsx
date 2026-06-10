import FeatherPlayCircleIcon from '../../pages/listagem/gestao_matricula/icones/FeatherPlayCircleIcon';
import AppsAddIcon from '../icones/AppsAddIcon';
import styles from './ModuleBlueHeader.module.scss';

const ModuleBlueHeader = ({
    title,
    description,
    headerIcon: HeaderIcon = AppsAddIcon,
}) => (
    <div className={styles.content}>
        <div className={styles.text}>
            <span className={styles.title}>{title}</span>
            <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.actions}>
            <button type="button" className={styles.button}>
                <span>Apresentação das Funcionalidades</span>
                <div className={styles.divider} />
                <FeatherPlayCircleIcon />
            </button>

            <HeaderIcon className={styles.icon} />
        </div>
    </div>
);

export default ModuleBlueHeader;

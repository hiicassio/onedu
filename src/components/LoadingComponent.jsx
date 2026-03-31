import styles from './LoadingComponent.module.scss';
import loading from '../assets/img/loading.gif';
const LoadingComponent = () => {
    return (
        <div className={styles.loadingContainer}>
            <img src={loading} alt="Loading" />
        </div>
    );
}

export default LoadingComponent;
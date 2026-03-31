import styles from './LoadingComponent.module.scss';

const LoadingComponent = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}></div>
        </div>
    );
}

export default LoadingComponent;
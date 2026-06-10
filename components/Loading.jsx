import styles from './Loading.module.scss';
const Loading = () => {
    return (
        // <div className={styles.containerLoading}>
        //     <div className={styles.loader}></div>
        // </div>
        <div className={styles.loading}>
            <div className={styles.spin} />
        </div>
    )
}

export default Loading;
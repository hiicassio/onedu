import styles from './Loading.module.scss';
import logo from './icones/logo.png';
const Loading = () => {
    return (
        <div className={styles.containerLoading}>
            <img src={logo} alt="" srcset="" />
            <span>Estamos organizando as coisas para você por favor aguarde um instante...</span>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loading;
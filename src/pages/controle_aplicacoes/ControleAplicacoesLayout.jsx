import { Outlet } from 'react-router-dom';
import ControleAplicacoesHeader from './components/ControleAplicacoesHeader';
import styles from './ControleAplicacoes.module.scss';

const ControleAplicacoesLayout = () => (
    <section className={styles.container}>
        <ControleAplicacoesHeader />
        <Outlet />
    </section>
);

export default ControleAplicacoesLayout;

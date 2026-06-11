import { Outlet } from 'react-router-dom';
import ControleAplicacoesHeader from './components/ControleAplicacoesHeader';
import layoutStyles from '../../components/ModulePageLayout/ModulePageLayout.module.scss';

const ControleAplicacoesLayout = () => (
    <section className={layoutStyles.container}>
        <ControleAplicacoesHeader />
        <Outlet />
    </section>
);

export default ControleAplicacoesLayout;

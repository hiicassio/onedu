import { Outlet, useLocation } from 'react-router-dom';
import DadosEscolaresHeader from './components/DadosEscolaresHeader';
import layoutStyles from '../../components/ModulePageLayout/ModulePageLayout.module.scss';

const DadosEscolaresLayout = () => {
    const location = useLocation();
    const isWizard = location.pathname.includes('/gerador');

    return (
        <section className={layoutStyles.container}>
            {!isWizard && <DadosEscolaresHeader />}
            <Outlet />
        </section>
    );
};

export default DadosEscolaresLayout;

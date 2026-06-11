import { Outlet, useLocation } from 'react-router-dom';
import InstitucionalHeader from './components/InstitucionalHeader';
import layoutStyles from '../../components/ModulePageLayout/ModulePageLayout.module.scss';

const GestaoInstitucionalLayout = () => {
    const location = useLocation();
    const isCadastroPessoas = location.pathname.includes('/gestao-pessoas/cadastro');

    return (
        <section className={layoutStyles.container}>
            {!isCadastroPessoas && <InstitucionalHeader />}
            <Outlet />
        </section>
    );
};

export default GestaoInstitucionalLayout;
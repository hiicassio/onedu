import { Outlet, useLocation } from 'react-router-dom';
import InstitucionalHeader from './components/InstitucionalHeader';
import styles from './GestaoInstitucional.module.scss';

const GestaoInstitucionalLayout = () => {
    const location = useLocation();
    const isCadastroPessoas = location.pathname.includes('/gestao-pessoas/cadastro');

    return (
        <section className={styles.container}>
            {!isCadastroPessoas && <InstitucionalHeader />}
            <Outlet />
        </section>
    );
};

export default GestaoInstitucionalLayout;
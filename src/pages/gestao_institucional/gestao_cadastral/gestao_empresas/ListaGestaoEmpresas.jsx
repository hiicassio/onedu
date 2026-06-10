import CadastralListHeader from '../components/CadastralListHeader';
import styles from './ListaGestaoEmpresas.module.scss';

const ListaGestaoEmpresas = () => (
    <div className={styles.page}>
        <CadastralListHeader title="Gestão de Empresas" breadcrumb="Gestão Cadastral" />

        <div className={styles.placeholder}>
            <p>Cadastros gerais de empresas parceiras e fornecedores.</p>
            <span>Esta funcionalidade será conectada aos cadastros definitivos na próxima etapa.</span>
        </div>
    </div>
);

export default ListaGestaoEmpresas;

import CadastralListHeader from '../components/CadastralListHeader';
import styles from './ListaGestaoFamilias.module.scss';

const ListaGestaoFamilias = () => (
    <div className={styles.page}>
        <CadastralListHeader title="Gestão de Famílias" breadcrumb="Gestão Cadastral" />

        <div className={styles.placeholder}>
            <p>Gestão de informações das famílias vinculadas à unidade escolar.</p>
            <span>Esta funcionalidade será conectada aos cadastros definitivos na próxima etapa.</span>
        </div>
    </div>
);

export default ListaGestaoFamilias;

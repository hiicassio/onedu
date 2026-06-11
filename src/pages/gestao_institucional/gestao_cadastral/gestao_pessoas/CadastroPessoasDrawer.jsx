import DrawerComponent from '../../../../components/DrawerComponent';
import CadastroPessoasContent from './CadastroPessoasContent';
import styles from './CadastroPessoasDrawer.module.scss';

const CadastroPessoasDrawer = ({ openCloseDrawer, setOpenCloseDrawer, student }) => (
    <DrawerComponent
        bgColor="#fff"
        openCloseDrawer={openCloseDrawer}
        setOpenCloseDrawer={setOpenCloseDrawer}
        titulo="Gestão de Pessoas"
    >
        {openCloseDrawer && (
            <div className={styles.drawerBody}>
                <CadastroPessoasContent matriculaStudent={student} />
            </div>
        )}
    </DrawerComponent>
);

export default CadastroPessoasDrawer;

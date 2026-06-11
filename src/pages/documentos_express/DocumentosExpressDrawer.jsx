import { useState } from 'react';
import DrawerComponent from '../../components/DrawerComponent';
import AngleSmallLeftIcon from '../analise_candidato/icones/AngleSmallLeftIcon';
import ViewFormulario from './views/ViewFormulario';
import ViewGerado from './views/ViewGerado';
import styles from './DocumentosExpressDrawer.module.scss';

/**
 * Fluxo:
 *  view 1 – Formulário (preencher + "Gerar Documento")
 *  view 2 – Resultado  (doc gerado + "Novo Documento")
 */
const DocumentosExpressDrawer = ({ openCloseDrawer, setOpenCloseDrawer }) => {
    const [view, setView] = useState(1);

    const handleClose = () => {
        setOpenCloseDrawer(false);
        setTimeout(() => setView(1), 400);
    };

    const gerarDocumento = () => setView(2);
    const novoDocumento  = () => setView(1);

    const btnsFooterModal = view === 1
        ? [{
            id: 1,
            descricao: 'Gerar Documento',
            icone: <AngleSmallLeftIcon />,
            class: 'secondary',
            func: gerarDocumento,
        }]
        : [{
            id: 1,
            descricao: 'Novo Documento',
            icone: <AngleSmallLeftIcon />,
            class: 'secondary',
            func: novoDocumento,
        }];

    return (
        <DrawerComponent
            bgColor="#fff"
            openCloseDrawer={openCloseDrawer}
            setOpenCloseDrawer={handleClose}
            btnsFooterModal={btnsFooterModal}
            titulo="Documentos Express"
        >
            <div className={styles.drawer}>
                <form
                    className={styles.form}
                    onSubmit={e => e.preventDefault()}
                >
                    {view === 1 && <ViewFormulario />}
                    {view === 2 && <ViewGerado />}
                </form>
            </div>
        </DrawerComponent>
    );
};

export default DocumentosExpressDrawer;

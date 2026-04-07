import styles from './GeracaoAutomaticaDrawer.module.scss';
import DrawerComponent from '../../components/DrawerComponent';
import AngleSmallLeftIcon from './icones/AngleSmallLeftIcon';
import AngleSmallRightIcon from './icones/AngleSmallRightIcon';
import CheckCircleIcon from './icones/CheckCircleIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GeracaoAutomaticaDrawer = ({ openCloseDrawer, setOpenCloseDrawer }) => {
    const [unidadesEscolares, setUnidadesEscolares] = useState([
        { id: 1, number: 5210014, name: "E.M Rio Branco", selected: false },
        { id: 2, number: 5212100, name: "E.M Delcidio do Amaral", selected: false },
        { id: 3, number: 5212141, name: "E.M Armenindo Tonon", selected: false },
    ]);

    const navigation = useNavigate();

    const btnsFooterModal = [
        { id: 1, class: 'primary', descricao: '', icone: <AngleSmallLeftIcon />, func: () => setOpenCloseDrawer(false) },
        { id: 2, class: 'secondary', descricao: 'Iniciar', icone: <AngleSmallRightIcon />, func: () => navigation('/dashboard/home') }
    ];


    const handleUnidadeEscolarSelect = (id) => {
        const updated = unidadesEscolares.filter((item) => {
            if (item.id === id) {
                item.selected = true;
                return item;
            }
            item.selected = false;
            return item
        });

        setUnidadesEscolares(updated);
    }

    return (
        <DrawerComponent
            btnsFooterModal={btnsFooterModal}
            openCloseDrawer={openCloseDrawer}
            setOpenCloseDrawer={setOpenCloseDrawer}
            titulo="Seleção de Unidades"
        >
            <div className={styles.drawerContainer}>
                <div className={styles.alertSection}>
                    <span className={styles.alertTitle}>Atenção</span>
                    <p className={styles.alertText}>
                        As unidades apresentadas abaixo estão disponíveis de acordo com suas permissões ou autorizações para visualização.
                        Caso não apresente as informações corretas, procure o responsável técnico pelo sistema ou acione o suporte técnico, clicando aqui.
                    </p>
                </div>

                <span className={styles.sectionTitle}>Unidades Escolares Habilitadas:</span>

                <div className={styles.unidadesList}>
                    {unidadesEscolares.map((item) => (
                        <button
                            onClick={() => handleUnidadeEscolarSelect(item.id)}
                            key={item.id}
                            className={`
                                    ${styles.unidadeItem}
                                    ${item.selected ? styles.unidadeItemSelected : ''}
                                `}
                        >
                            <span className={styles.unidadeNumber}>{item.number}</span>
                            <div className={styles.unidadeInfo}>
                                <span className={styles.unidadeLabel}>Unidade Escolar</span>
                                <span className={styles.unidadeName}>{item.name}</span>
                            </div>
                            <CheckCircleIcon className={styles.unidadeCheckIcon} />
                        </button>
                    ))}
                </div>
            </div>
        </DrawerComponent>
    )
}

export default GeracaoAutomaticaDrawer;
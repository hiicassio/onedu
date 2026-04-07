import AngleSmallLeftIcon from '../pages/analise_candidato/icones/AngleSmallLeftIcon';
import CircleXMarkIcon from '../pages/analise_candidato/icones/CircleXMarkIcon';
import styles from './DrawerComponent.module.scss';

const DrawerComponent = ({
    children,
    openCloseDrawer,
    setOpenCloseDrawer,
    bgColor,
    btnsFooterModal,
    titulo
}) => {

    const handleClose = () => setOpenCloseDrawer(false);

    return (
        <div
            className={`${styles.drawerContainer} ${openCloseDrawer ? styles.drawerOpen : ''}`}
            onClick={handleClose}
        >
            <div
                className={styles.areaDrawer}
                style={{ backgroundColor: bgColor || '#fff' }}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.analiseCandidato_header}>
                    <span className={styles.analiseCandidato_title}>{titulo}</span>

                    <CircleXMarkIcon
                        className={styles.analiseCandidato_close}
                        onClick={handleClose}
                    />
                </div>

                <div className={styles.body}>
                    {children}
                </div>

                <div className={styles.analiseCandidato_footer}>
                    {btnsFooterModal?.map((item) => (
                        <button
                            onClick={item.func || null}
                            style={{ justifyContent: item?.icone ? "space-between" : 'center' }}
                            key={item?.id}
                            className={`${styles[item.class]}`}>
                            {item?.descricao && <span>{item?.descricao}</span>}
                            {item?.icone}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

// btnsFooterModal
// [
//     { id: 1, class: 'primary', descricao: 'descricao', icone: <AngleSmallLeftIcon />, func: () => alert("Função") },
//     { id: 2, class: 'secondary', descricao: 'descricao', icone: <AngleSmallLeftIcon />, func: () => alert("Função") }
// ]
export default DrawerComponent;
import styles from './DrawerComponent.module.scss';

const DrawerComponent = ({ children, openCloseDrawer, setOpenCloseDrawer, bgColor }) => {
    return (
        <div
            onClick={() => setOpenCloseDrawer(false)}
            className={`${styles.drawerContainer} ${openCloseDrawer ? styles.drawerOpen : ''}`}
        >
            <div
                style={{ backgroundColor: bgColor || '#fff' }}
                className={styles.areaDrawer}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default DrawerComponent;
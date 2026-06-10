import { Outlet } from 'react-router-dom';
import styles from './BaseComponent.module.scss';
import MenuComponent from './MenuComponent';

const BaseComponent = () => {
    return (
        <div className={styles.containerBaseComponent}>
            <MenuComponent />
            <div className={styles.body}>
                <Outlet />
            </div>
        </div>
    )
}

export default BaseComponent;
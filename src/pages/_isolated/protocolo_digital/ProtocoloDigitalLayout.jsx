import { Outlet } from 'react-router-dom';
import ProtocoloDigitalHeader from './components/ProtocoloDigitalHeader';
import layoutStyles from '../../../components/ModulePageLayout/ModulePageLayout.module.scss';

const ProtocoloDigitalLayout = () => (
    <section className={layoutStyles.container}>
        <ProtocoloDigitalHeader />
        <Outlet />
    </section>
);

export default ProtocoloDigitalLayout;

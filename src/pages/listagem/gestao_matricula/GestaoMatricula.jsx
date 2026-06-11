import ModuleBlueHeader from '../../../components/ModuleBlueHeader/ModuleBlueHeader';
import BellSchoolIcon from './icones/BellSchoolIcon';
import Dashboard from './Dashboard';
import layoutStyles from '../../../components/ModulePageLayout/ModulePageLayout.module.scss';

const GestaoMatricula = () => (
    <section className={layoutStyles.container}>
        <ModuleBlueHeader
            title="Gestão de Matrículas"
            description="Gerencie matrículas, rematrículas e rotinas escolares de forma centralizada, com acesso rápido aos controles e às informações essenciais da unidade."
            headerIcon={BellSchoolIcon}
        />
        <Dashboard />
    </section>
);

export default GestaoMatricula;

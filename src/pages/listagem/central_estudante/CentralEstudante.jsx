import { useState } from 'react';
import layoutStyles from '../../../components/ModulePageLayout/ModulePageLayout.module.scss';
import StudentIdentificationCard from '../../../components/StudentIdentificationCard';
import CentralEstudanteHeader from './components/CentralEstudanteHeader';
import { STUDENT } from './data/mockData';
import TabAprendizagem from './tabs/TabAprendizagem';
import TabOcorrencias from './tabs/TabOcorrencias';
import TabNotas from './tabs/TabNotas';
import TabFrequencia from './tabs/TabFrequencia';
import TabResumo from './tabs/TabResumo';
import styles from './CentralEstudante.module.scss';

const CentralEstudante = () => {
    const [view, setView] = useState(1);

    return (
        <section className={layoutStyles.container}>
            <CentralEstudanteHeader activeView={view} onViewChange={setView} />

            <div className={styles.pageContent}>
                <StudentIdentificationCard student={STUDENT} />

                <div className={styles.contentPanel}>
                    {view === 1 && <TabAprendizagem />}
                    {view === 2 && <TabOcorrencias />}
                    {view === 3 && <TabNotas />}
                    {view === 4 && <TabFrequencia />}
                    {view === 5 && <TabResumo />}
                </div>
            </div>
        </section>
    );
};

export default CentralEstudante;

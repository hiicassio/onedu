import { useState } from 'react';
import styles from './CentralEstudante.module.scss';
import StudentHeader from './components/StudentHeader';
import TabPerfil from './tabs/TabPerfil';
import TabOcorrencias from './tabs/TabOcorrencias';
import TabNotas from './tabs/TabNotas';
import TabFrequencia from './tabs/TabFrequencia';
import TabResumo from './tabs/TabResumo';

const TABS = [
    { id: 1, label: 'Perfil'       },
    { id: 2, label: 'Ocorrências'  },
    { id: 3, label: 'Notas'        },
    { id: 4, label: 'Frequência'   },
    { id: 5, label: 'Resumo'       },
];

const CentralEstudante = () => {
    const [tab, setTab] = useState(1);

    return (
        <div className={styles.container}>
            <StudentHeader />

            {/* Tab bar */}
            <div className={styles.tabBar}>
                {TABS.map(t => (
                    <button
                        key={t.id}
                        className={`${styles.tabBtn} ${tab === t.id ? styles.tabBtnActive : ''}`}
                        onClick={() => setTab(t.id)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className={styles.content}>
                {tab === 1 && <TabPerfil />}
                {tab === 2 && <TabOcorrencias />}
                {tab === 3 && <TabNotas />}
                {tab === 4 && <TabFrequencia />}
                {tab === 5 && <TabResumo />}
            </div>
        </div>
    );
};

export default CentralEstudante;

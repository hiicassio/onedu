import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GraduationCapIcon from '../../listagem/gestao_matricula/icones/GraduationCapIcon';
import ChartUserIcon from '../../listagem/controle_matricula/icones/ChartUserIcon';
import MemberListIcon from '../../listagem/intencao_vaga/icones/MemberListIcon';
import BellSchoolIcon from '../../listagem/gestao_matricula/icones/BellSchoolIcon';
import DocumentIcon from '../../listagem/gestao_matricula/icones/DocumentIcon';
import ConvertDocumentIcon from '../../listagem/gestao_matricula/icones/ConvertDocumentIcon';
import EditIcon from '../../listagem/gestao_matricula/icones/EditIcon';
import DiagramSankeyIcon from '../../listagem/gestao_matricula/icones/DiagramSankeyIcon';
import LessonIcon from '../../listagem/gestao_matricula/icones/LessonIcon';
import AppsAddIcon from '../../../components/icones/AppsAddIcon';
import { EXTRA_FUNCTIONS, INSTITUCIONAL_STATS, MAIN_CARDS } from '../data/institutionalData';
import styles from './DashboardInstitucional.module.scss';

const CARD_ICONS = {
    'estrutura-pedagogica': GraduationCapIcon,
    'estrutura-escola': BellSchoolIcon,
    'gestao-cadastral': DocumentIcon,
    'gestao-apoio': ConvertDocumentIcon,
};

const EXTRA_ICONS = {
    'planos-pedagogicos': DiagramSankeyIcon,
    'percurso-avaliativo': LessonIcon,
    'estrutura-avaliacoes': DocumentIcon,
    'percurso-planejamento': ConvertDocumentIcon,
    'gestao-pessoas': ChartUserIcon,
    'gestao-profissionais': DocumentIcon,
    'gestao-familias': MemberListIcon,
    'gestao-empresas': BellSchoolIcon,
    'perfil-minha-escola': EditIcon,
    'estruturas-fisicas': AppsAddIcon,
    'estrutura-funcional': DiagramSankeyIcon,
    'gestao-turmas': LessonIcon,
};

const MenuItem = ({ item, isActive, onClick }) => {
    const Icon = CARD_ICONS[item.id];

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.menuItem} ${isActive ? styles.menuItemSelected : ''}`}
        >
            <Icon />
            <span className={styles.menuText}>
                {item.title} <strong>{item.subtitle}</strong>
            </span>
            <div className={styles.menuBadge}>{item.badge}</div>
        </button>
    );
};

const ExtraCard = ({ item, onClick }) => {
    const Icon = EXTRA_ICONS[item.id] ?? DocumentIcon;
    const isDisabled = item.noAction || !item.rota;

    return (
        <button
            type="button"
            className={`${styles.extraCard} ${isDisabled ? styles.extraCardDisabled : ''}`}
            onClick={isDisabled ? undefined : onClick}
            disabled={isDisabled}
        >
            <div className={styles.extraIcon}>
                <Icon />
            </div>
            <div className={styles.extraContent}>
                <span className={styles.extraSubtitle}>{item.title}</span>
                <strong className={styles.extraHighlight}>{item.subtitle}</strong>
                <span className={styles.extraDescription}>{item.description}</span>
            </div>
        </button>
    );
};

const DashboardInstitucional = () => {
    const [menuSelected, setMenuSelected] = useState(null);
    const navigate = useNavigate();
    const submenu = EXTRA_FUNCTIONS[menuSelected] ?? [];

    const handleMenuClick = (id) => {
        setMenuSelected((prev) => (prev === id ? null : id));
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.areaMenu}>
                <div className={styles.menu}>
                    {MAIN_CARDS.map((item) => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            isActive={menuSelected === item.id}
                            onClick={() => handleMenuClick(item.id)}
                        />
                    ))}
                </div>

                <div className={styles.statsCard}>
                    <div className={styles.statsHeader}>
                        <span>Minha escola</span>
                    </div>

                    <div className={styles.statsContent}>
                        {INSTITUCIONAL_STATS.map((stat) => (
                            <div key={stat.label} className={styles.statItem}>
                                <span>{stat.label}</span>
                                <span>{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {submenu.length > 0 && (
                <div className={styles.extraSection}>
                    <span className={styles.extraTitle}>Funções adicionais</span>
                    <div className={styles.extraDivider} />

                    <div className={styles.extraGrid}>
                        {submenu.map((item) => (
                            <ExtraCard
                                key={item.id}
                                item={item}
                                onClick={() => item.rota && navigate(item.rota)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardInstitucional;

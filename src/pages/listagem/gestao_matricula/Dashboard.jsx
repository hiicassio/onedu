import styles from './Dashboard.module.scss';
import GraduationCapIcon from './icones/GraduationCapIcon';
import RefreshIcon from './icones/RefreshIcon';
import LessonIcon from './icones/LessonIcon';
import CalendarIcon from './icones/CalendarIcon';
import AddCircleOutlineIcon from './icones/AddCircleOutlineIcon';
import DocumentIcon from './icones/DocumentIcon';
import AlertaSensorIcon from './icones/AlertaSensorIcon';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import DiagramSankeyIcon from './icones/DiagramSankeyIcon';
import ConvertDocumentIcon from './icones/ConvertDocumentIcon';
import RadarIcon from './icones/RadarIcon';
import EditIcon from './icones/EditIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MENU = [
    {
        id: 1,
        icon: GraduationCapIcon,
        title: "Controle de",
        subtitle: "Matrícula",
        action: { type: "icon", content: AddCircleOutlineIcon, },
        rota: "/gestao-matricula/controle-matricula"

    },
    {
        id: 2,
        icon: RefreshIcon,
        title: "Controle de",
        subtitle: "Rematrícula",
        action: { type: "icon", content: AddCircleOutlineIcon }
    },
    {
        id: 3,
        icon: LessonIcon,
        title: "Ações de",
        subtitle: "Matrículas",
        action: { type: "badge", content: 4 }
    },
    {
        id: 4,
        icon: CalendarIcon,
        title: "Rotina",
        subtitle: "Escolar",
        action: { type: "badge", content: 4 }
    }
];

const SUBMENUS = {
    3: [
        { id: 1, title: "Controle de", subtitle: "Documentos", description: "Visão Geral de Lançamentos", icon: DocumentIcon },
        { id: 2, title: "Monitoramento de", subtitle: "Ocorrências", description: "Visão Geral de Lançamentos", icon: AlertaSensorIcon },
        { id: 3, title: "Gestão de", subtitle: "Transferências", description: "Visão Geral de Lançamentos", icon: PriorityArrowsIcon },
        { id: 4, title: "Central do", subtitle: "Estudante", description: "Visão Geral de Lançamentos", icon: DiagramSankeyIcon }
    ],
    4: [
        { id: 1, title: "Histórico", subtitle: "Escolar", description: "Controle de Registros", icon: ConvertDocumentIcon, rota: "/gestao-matricula/historico-escolar" },
        { id: 2, title: "Radar de", subtitle: "Registros", description: "Ferramenta Administrativa", icon: RadarIcon },
        { id: 3, title: "Registros de", subtitle: "Sala de Aula", description: "Visão Geral de Lançamentos", icon: EditIcon },
        { id: 4, title: "Manutenções de", subtitle: "Turma", description: "Visão Geral de Lançamentos", icon: DocumentIcon }
    ]
};


const MenuItem = ({ item, isActive, onClick }) => {
    const Icon = item.icon;
    const ActionIcon = item.action?.content;

    return (
        <button
            onClick={onClick}
            className={`${styles.menuItem} ${isActive ? styles.menuItemSelected : ''}`}
        >
            <Icon />

            <span className={styles.menuText}>
                {item.title} <strong>{item.subtitle}</strong>
            </span>

            {item.action?.type === "icon" && (
                <div className={styles.menuAction}>
                    <ActionIcon />
                </div>
            )}

            {item.action?.type === "badge" && (
                <div className={styles.menuBadge}>
                    {item.action.content}
                </div>
            )}
        </button>
    );
};

const ExtraCard = ({ item, func }) => {
    const Icon = item.icon;

    return (
        <button className={styles.extraCard} onClick={func}>
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

const Dashboard = () => {
    const [menuSelected, setMenuSelected] = useState(null);
    const navigation = useNavigate();
    const submenu = SUBMENUS[menuSelected] || [];

    const handleMenuClick = (id) => {
        setMenuSelected(prev => (prev === id ? null : id));
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.areaMenu}>

                <div className={styles.menu}>
                    {MENU.map(item => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            isActive={menuSelected === item.id}
                            onClick={() => item.rota ? navigation(item.rota) : handleMenuClick(item.id)}
                        />
                    ))}
                </div>

                <div className={styles.statsCard}>
                    <div className={styles.statsHeader}>
                        <span>Dados das Matrículas</span>
                    </div>

                    <div className={styles.statsContent}>
                        <div className={styles.statItem}>
                            <span>Total de Matrículados</span>
                            <span>448</span>
                        </div>

                        <div className={styles.statItem}>
                            <span>Total de Desligados</span>
                            <span>21</span>
                        </div>

                        <div className={styles.statItem}>
                            <span>Total de Transferidos</span>
                            <span>382</span>
                        </div>
                    </div>
                </div>
            </div>

            {submenu.length > 0 && (
                <div className={styles.extraSection}>
                    <span className={styles.extraTitle}>Funções Adicionais:</span>

                    <div className={styles.extraDivider} />

                    <div className={styles.extraGrid}>
                        {submenu.map(item => (
                            <ExtraCard key={item.id} item={item} func={() => navigation(item.rota)} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
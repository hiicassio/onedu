import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import styles from './MenuComponent.module.scss';
import { DADOS_ESCOLARES_MENU } from '../pages/dados_escolares/data/menuItems';
import DocumentIcon from '../pages/listagem/gestao_matricula/icones/DocumentIcon';
import ConvertDocumentIcon from '../pages/listagem/gestao_matricula/icones/ConvertDocumentIcon';
import DiagramSankeyIcon from '../pages/listagem/gestao_matricula/icones/DiagramSankeyIcon';
import RadarIcon from '../pages/listagem/gestao_matricula/icones/RadarIcon';

import user from './icones/user.png';
import logo from './icones/logo.png';

import EyeIcon from './icones/EyeIcon';
import BrightnessIcon from './icones/BrightnessIcon';
import MoonIcon from './icones/MoonIcon';
import BellSchoolIcon from './icones/BellSchoolIcon';
import AppsAddIcon from './icones/AppsAddIcon';
import GraduationCapIcon from './icones/GraduationCapIcon';
import PenSquareIcon from './icones/PenSquareIcon';
import DiscoverIcon from './icones/DiscoverIcon';
import OneproIcon from './icones/OneproIcon';
import ChatbotSpeechBubbleIcon from './icones/ChatbotSpeechBubbleIcon';
import NotificationIcon from './icones/NotificationIcon';
import MessagesIcon from './icones/MessagesIcon';
import ControlesDeslizantesIcon from './icones/ControlesDeslizantesIcon';
import FeatherMenuIcon from './icones/FeatherMenuIcon';
import FeatherMoreVerticalIcon from './icones/FeatherMoreVerticalIcon';
import ReplaceIcon from './icones/ReplaceIcon';
import FeatherSearchIcon from './icones/FeatherSearchIcon';
import CaretDownIcon from './icones/CaretDownIcon';
import RefreshIcon from './icones/RefreshIcon';
import LessonIcon from './icones/LessonIcon';
import CalendarIcon from './icones/CalendarIcon';
import AngleSmallRightIcon from './icones/AngleSmallRightIcon';

const menu = [
    { id: 1, rota: "/dashboard/home", icone: <EyeIcon /> },
    { id: 2, rota: "/gestao-matricula", icone: <BellSchoolIcon /> },
    { id: 3, rota: "", icone: <AppsAddIcon /> },
    { id: 4, rota: "/minha-escola", icone: <GraduationCapIcon /> },
    { id: 5, rota: "/dados-escolares", icone: <DiscoverIcon /> },
    { id: 6, rota: "", icone: <PenSquareIcon /> },
    { id: 7, rota: "", icone: <OneproIcon /> },
    { id: 8, rota: "", icone: <ChatbotSpeechBubbleIcon /> },
];

const DADOS_ESCOLARES_ICONS = {
    'relatorios-prontos': DocumentIcon,
    onreport: ConvertDocumentIcon,
    'onreport-graficos': DiagramSankeyIcon,
    'sala-situacao': RadarIcon,
};

const matriculas = [
    { id: 1, descricao: "Controle de Matrícula", rota: "/gestao-matricula/controle-matricula", icone: <GraduationCapIcon />, submenu: [] },
    { id: 2, descricao: "Rematrícula", rota: "/gestao-matricula/controle-rematricula", icone: <RefreshIcon />, submenu: [] },
    {
        id: 3, descricao: "Ações na Matrícula", icone: <LessonIcon />, submenu: [
            { id: 1, descricao: "Controle de Doc.", rota: "/gestao-matricula/documentos-express" },
            { id: 2, descricao: "Monit. de Ocorrências", rota: "/gestao-matricula/controle-ocorrencias" },
            { id: 3, descricao: "Gestão de Transf.", rota: "/gestao-matricula/controle-transferencias" },
            { id: 4, descricao: "Central do Estud.", rota: "" },
        ]
    },
    {
        id: 4, descricao: "Rotina Escolar", icone: <CalendarIcon />, submenu: [
            { id: 1, descricao: "Hist. Escolar", rota: "/gestao-matricula/historico-escolar" },
            { id: 2, descricao: "Radar de Reg.", rota: "" },
            { id: 3, descricao: "Reg. de Sala de Aula", rota: "" },
            { id: 4, descricao: "Manut. de Turma", rota: "" },
        ]
    },
];

const MenuComponent = () => {
    const [thema, setThema] = useState(true);
    const [menuOpenClose, setMenuOpenClose] = useState(true);
    const [menuSelected, setMenuSelected] = useState(null);
    const [menuSearch, setMenuSearch] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const rotaBase = String(location.pathname).split('/').filter(Boolean)[0] ?? '';
    const isDadosEscolares = rotaBase === 'dados-escolares';
    const activeSec = new URLSearchParams(location.search).get('sec');

    const dadosEscolaresMenu = useMemo(() => {
        const term = menuSearch.trim().toLowerCase();
        if (!term) return DADOS_ESCOLARES_MENU;

        return DADOS_ESCOLARES_MENU.map((item) => {
            const parentMatch = item.label.toLowerCase().includes(term);
            const filteredSubmenu = item.submenu.filter((sub) =>
                sub.label.toLowerCase().includes(term)
            );

            if (parentMatch || filteredSubmenu.length > 0) {
                return {
                    ...item,
                    submenu: parentMatch ? item.submenu : filteredSubmenu,
                };
            }

            return null;
        }).filter(Boolean);
    }, [menuSearch]);

    const handleMenu = (id) => {
        setMenuSelected(prev => (prev === id ? null : id));
    };

    const handleNavigate = (rota) => {
        if (!rota) return;

        if (rota === '/minha-escola') {
            navigate(rota, { state: { resetAt: Date.now() } });
            return;
        }

        navigate(rota);
    };

    const handleDadosEscolaresSelect = (itemId) => {
        if (!itemId) {
            navigate('/dados-escolares');
            return;
        }

        navigate(`/dados-escolares?sec=${itemId}`);
    };

    const isDadosEscolaresItemActive = (itemId) => {
        if (!activeSec) return false;
        if (activeSec === itemId) return true;

        const parent = DADOS_ESCOLARES_MENU.find(
            (item) => item.id === itemId && item.submenu.some((sub) => sub.id === activeSec)
        );

        return Boolean(parent);
    };

    const MENU_WIDTH_EXPANDED = 286;
    const MENU_WIDTH_COLLAPSED = 75;

    useEffect(() => {
        const menuWidth = menuOpenClose ? MENU_WIDTH_EXPANDED : MENU_WIDTH_COLLAPSED;
        document.documentElement.style.setProperty('--layout-menu-width', `${menuWidth}px`);
        document.documentElement.style.setProperty(
            '--layout-content-offset',
            `calc(${menuWidth}px + 20px)`
        );
    }, [menuOpenClose]);

    useEffect(() => {
        if (!isDadosEscolares) {
            setMenuSearch('');
        }
    }, [isDadosEscolares]);

    return (
        <div className={styles.containerMenuComponent}>
            <div className={styles.menuWrapper}>

                <button
                    className={`${styles.menuButton} ${menuOpenClose ? styles.menuButtonNone : ''}`}
                    disabled={menuOpenClose}
                    onClick={() => setMenuOpenClose(true)}
                >
                    <FeatherMenuIcon />
                </button>

                <div className={`${styles.dividir} ${menuOpenClose ? styles.dividirNone : ''}`} />

                <div className={styles.menuArea}>
                    <div className={styles.menuTop}>

                        {menu.map((item) => {
                            const rotaItem = String(item.rota).split('/').filter(Boolean)[0] ?? '';
                            const isActive = Boolean(rotaItem) && rotaBase === rotaItem;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    title={item.rota ? undefined : 'Em breve'}
                                    onClick={() => item.rota ? handleNavigate(item.rota) : undefined}
                                    className={`
                                        ${styles.menuButton}
                                        ${isActive ? styles.menuButtonSelect : ''}
                                    `}
                                >
                                    {item.icone}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className={`${styles.dividir} ${menuOpenClose ? styles.dividirNone : ''}`} />

                <div className={styles.menuBottom}>
                    <div className={`${styles.areaBtns} ${menuOpenClose ? styles.areaBtnsNone : ''}`}>
                        <button className={styles.menuButton} disabled={menuOpenClose}><NotificationIcon /></button>
                        <button className={styles.menuButton} disabled={menuOpenClose}><MessagesIcon /></button>
                        <button className={styles.menuButton} disabled={menuOpenClose}><ControlesDeslizantesIcon /></button>

                        <button className={styles.menuAvatarButton} disabled={menuOpenClose}>
                            <img className={styles.userImage} src={user} alt="" />
                        </button>
                    </div>

                    <button
                        onClick={() => setThema(prev => !prev)}
                        className={`${styles.themeToggle} ${thema ? styles.light : styles.dark}`}
                    >
                        {thema ? (
                            <span className={styles.themeIconLight}><BrightnessIcon /></span>
                        ) : (
                            <span className={styles.themeIconDark}><MoonIcon /></span>
                        )}
                    </button>
                </div>
            </div>

            <div className={`${styles.bodyMenu} ${menuOpenClose ? '' : styles.bodyMenuClose}`}>
                <div className={styles.topoMenu}>
                    <img className={styles.logo} src={logo} alt="" />

                    <button className={styles.menuButton} onClick={() => setMenuOpenClose(false)}>
                        <FeatherMenuIcon />
                    </button>
                </div>

                <div className={styles.areaMenu}>
                    <div className={styles.menuContent}>
                        <div className={styles.areaSearch}>
                            <label>
                                <FeatherSearchIcon />
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    value={menuSearch}
                                    onChange={(e) => setMenuSearch(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={styles.menu}>
                            <div className={styles.menuOpcoes}>
                                <span className={styles.menuTitle}>MATRÍCULAS</span>

                                <div className={styles.menuList}>
                                    {isDadosEscolares ? (
                                        dadosEscolaresMenu.map((item) => {
                                            const Icon = DADOS_ESCOLARES_ICONS[item.id] ?? DocumentIcon;
                                            const hasSubmenu = item.submenu.length > 0;
                                            const isExpanded = menuSelected === item.id || isDadosEscolaresItemActive(item.id);

                                            return (
                                                <div key={item.id}>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            hasSubmenu
                                                                ? handleMenu(item.id)
                                                                : handleDadosEscolaresSelect(item.id)
                                                        }
                                                        className={`${styles.menuItem} ${
                                                            isDadosEscolaresItemActive(item.id) ? styles.menuItemActive : ''
                                                        }`}
                                                    >
                                                        <div className={styles.menuItemContent}>
                                                            <Icon />
                                                            <span>{item.label}</span>
                                                        </div>

                                                        {hasSubmenu && (
                                                            <CaretDownIcon
                                                                className={isExpanded ? styles.iconeExpaned : ''}
                                                            />
                                                        )}
                                                    </button>

                                                    {hasSubmenu && isExpanded &&
                                                        item.submenu.map((sub) => (
                                                            <button
                                                                key={`${item.id}-${sub.id}`}
                                                                type="button"
                                                                onClick={() => handleDadosEscolaresSelect(sub.id)}
                                                                className={`${styles.menuItem} ${styles.menuItemSubmenu} ${
                                                                    activeSec === sub.id ? styles.menuItemActive : ''
                                                                }`}
                                                            >
                                                                <div className={styles.menuItemContent}>
                                                                    <AngleSmallRightIcon />
                                                                    <span>{sub.label}</span>
                                                                </div>
                                                            </button>
                                                        ))}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        matriculas.map((matricula) => (
                                            <div key={matricula.id}>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        matricula.rota
                                                            ? handleNavigate(matricula.rota)
                                                            : handleMenu(matricula.id)
                                                    }
                                                    className={styles.menuItem}
                                                >
                                                    <div className={styles.menuItemContent}>
                                                        {matricula.icone}
                                                        <span>{matricula.descricao}</span>
                                                    </div>

                                                    {matricula.submenu.length > 0 && (
                                                        <CaretDownIcon
                                                            className={menuSelected === matricula.id ? styles.iconeExpaned : ''}
                                                        />
                                                    )}
                                                </button>

                                                {matricula.submenu.length > 0 && menuSelected === matricula.id &&
                                                    matricula.submenu.map((sub) => (
                                                        <button
                                                            key={`${matricula.id}-${sub.id}`}
                                                            type="button"
                                                            onClick={() => handleNavigate(sub.rota)}
                                                            className={`${styles.menuItem} ${styles.menuItemSubmenu}`}
                                                        >
                                                            <div className={styles.menuItemContent}>
                                                                <AngleSmallRightIcon />
                                                                <span>{sub.descricao}</span>
                                                            </div>
                                                        </button>
                                                    ))}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            <div className={styles.dividir} />

                            <div className={`${styles.menuOpcoes} ${styles.menuOpcoesConta}`}>
                                <span className={styles.menuTitle}>CONTA</span>

                                <div className={styles.menuList}>
                                    {isDadosEscolares ? (
                                        <>
                                            <button type="button" className={styles.menuItem}>
                                                <div className={styles.menuItemContent}>
                                                    <NotificationIcon />
                                                    <span>Notificações</span>
                                                </div>
                                            </button>

                                            <button type="button" className={styles.menuItem}>
                                                <div className={styles.menuItemContent}>
                                                    <MessagesIcon />
                                                    <span>Mensagens</span>
                                                </div>
                                            </button>

                                            <button type="button" className={styles.menuItem}>
                                                <div className={styles.menuItemContent}>
                                                    <ControlesDeslizantesIcon />
                                                    <span>Configurações</span>
                                                </div>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button type="button" className={styles.menuItem}>
                                                <div className={styles.menuItemContent}>
                                                    <NotificationIcon />
                                                    <span>Rematrícula</span>
                                                </div>
                                            </button>

                                            <button type="button" className={styles.menuItem}>
                                                <div className={styles.menuItemContent}>
                                                    <MessagesIcon />
                                                    <span>Ações na Matrícula</span>
                                                </div>
                                            </button>

                                            <button type="button" className={styles.menuItem}>
                                                <div className={styles.menuItemContent}>
                                                    <ControlesDeslizantesIcon />
                                                    <span>Rotina Escolar</span>
                                                </div>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menuFooter}>
                        <div className={styles.schoolInfo}>
                            <span className={styles.schoolName}>
                                E.M Rio Branco Suo
                            </span>
                            <ReplaceIcon />
                        </div>

                        <div className={styles.userContent}>
                            <div className={styles.userAvatar}>
                                <img className={styles.userImage} src={user} alt="" />
                            </div>

                            <div className={styles.userText}>
                                <span className={styles.userName}>Sueli Cardoso Silva</span>
                                <span className={styles.userRole}>Professor(a)</span>
                            </div>

                            <FeatherMoreVerticalIcon className={styles.moreIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
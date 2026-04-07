import styles from './MenuComponent.module.scss';
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const matriculas = [
    { id: 1, descricao: "Controle de Matrícula", rota: "/gestao-matricula/controle-matricula", icone: <GraduationCapIcon />, submenu: [] },
    { id: 2, descricao: "Rematrícula", rota: "/gestao-matricula/controle-rematricula", icone: <RefreshIcon />, submenu: [] },
    {
        id: 3, descricao: "Ações na Matrícula", icone: <LessonIcon />, submenu: [
            { id: 1, descricao: "Controle de Doc.", rota: "/gestao-matricula/documentos-express" },
            { id: 2, descricao: "Monit. de Ocorrências", rota: "" },
            { id: 3, descricao: "Gestão de Transf.", rota: "" },
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
    const [menuSelected, setMenuSelected] = useState();
    const navigation = useNavigate();

    const handleMenu = (id) => {
        if (id === menuSelected) {
            setMenuSelected();
            return
        }
        setMenuSelected(id);
    }

    return (
        <div className={styles.containerMenuComponent}>
            <div className={styles.menuWrapper}>

                <button
                    className={`
                        ${styles.menuButton}
                        ${menuOpenClose ? styles.menuButtonNone : ''}
                    `}
                    disabled={menuOpenClose}
                    onClick={() => setMenuOpenClose(true)}>
                    <FeatherMenuIcon />
                </button>

                <div className={`
                                ${styles.dividir}
                                ${menuOpenClose ? styles.dividirNone : ''}
                            `} />
                <div className={styles.menuArea}>

                    <div className={styles.menuTop}>
                        <button className={styles.menuButton}><EyeIcon /></button>
                        <button className={styles.menuButton}><BellSchoolIcon /></button>
                        <button className={styles.menuButton}><AppsAddIcon /></button>
                        <button className={styles.menuButton}><GraduationCapIcon /></button>
                        <button className={styles.menuButton}><PenSquareIcon /></button>
                        <button className={styles.menuButton}><DiscoverIcon /></button>
                        <button className={styles.menuButton}><OneproIcon /></button>
                        <button className={styles.menuButton}><ChatbotSpeechBubbleIcon /></button>
                    </div>


                </div>
                <div className={`
                                ${styles.dividir}
                                ${menuOpenClose ? styles.dividirNone : ''}
                            `} />
                <div className={styles.menuBottom}>
                    <div className={`
                            ${styles.areaBtns}
                            ${menuOpenClose ? styles.areaBtnsNone : ''}
                        `}>
                        <button className={styles.menuButton} disabled={menuOpenClose}><NotificationIcon /></button>
                        <button className={styles.menuButton} disabled={menuOpenClose}><MessagesIcon /></button>
                        <button className={styles.menuButton} disabled={menuOpenClose}><ControlesDeslizantesIcon /></button>

                        <button className={styles.menuAvatarButton} disabled={menuOpenClose}>
                            <img className={styles.userImage} src={user} alt="" />
                        </button>
                    </div>
                    <button
                        onClick={() => setThema(prev => !prev)}
                        className={`
                        ${styles.themeToggle}
                        ${thema ? styles.light : styles.dark}
                    `}
                    >
                        {thema ? (
                            <span className={styles.themeIconLight}>
                                <BrightnessIcon />
                            </span>
                        ) : (
                            <span className={styles.themeIconDark}>
                                <MoonIcon />
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <div className={`
                    ${styles.bodyMenu}
                    ${menuOpenClose ? '' : styles.bodyMenuClose}
                `}>
                <div className={styles.topoMenu}>
                    <img className={styles.logo} src={logo} alt="" />

                    <button className={styles.menuButton} onClick={() => setMenuOpenClose(false)}>
                        <FeatherMenuIcon />
                    </button>
                </div>

                <div className={styles.areaMenu}>
                    <div className={styles.menuContent}>
                        <div className={styles.areaSearch}>
                            <label htmlFor="">
                                <FeatherSearchIcon />
                                <input type="text" name="" id="" placeholder='Buscar' />
                            </label>
                        </div>
                        {/* vou fazer o meu aqui */}

                        <div className={styles.menu}>

                            <div className={styles.menuOpcoes}>
                                <span className={styles.menuTitle}>MATRÍCULAS</span>

                                <div className={styles.menuList}>
                                    {matriculas.map((matricula) => (
                                        <>
                                            <button onClick={() => matricula.rota ? navigation(matricula.rota) : handleMenu(matricula.id)} className={styles.menuItem}>
                                                <div className={styles.menuItemContent}>
                                                    {matricula.icone}
                                                    <span>{matricula.descricao}</span>
                                                </div>
                                                {matricula.submenu.length > 0 && <CaretDownIcon />}
                                            </button>
                                            {matricula.submenu.length > 0 &&
                                                matricula.submenu.map((matriculaSubmenu) => (
                                                    <button
                                                        onClick={() => navigation(matriculaSubmenu.rota)}
                                                        className={`
                                                                    ${styles.menuItem}
                                                                    ${styles.menuItemSubmenu}
                                                                    ${matricula.id === menuSelected ? styles.menuItemSelected : ''}
                                                                `}
                                                        key={matriculaSubmenu.id}
                                                    >
                                                        <div className={styles.menuItemContent}>
                                                            <AngleSmallRightIcon />
                                                            <span>{matriculaSubmenu.descricao}</span>
                                                        </div>
                                                    </button>
                                                ))
                                            }
                                        </>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.dividir} />

                            <div className={`
                                    ${styles.menuOpcoes}
                                    ${styles.menuOpcoesConta}
                                `}>
                                <span className={styles.menuTitle}>CONTA</span>

                                <div className={styles.menuList}>
                                    <button className={styles.menuItem}>
                                        <div className={styles.menuItemContent}>
                                            <NotificationIcon />
                                            <span>Rematrícula</span>
                                        </div>
                                    </button>

                                    <button className={styles.menuItem}>
                                        <div className={styles.menuItemContent}>
                                            <MessagesIcon />
                                            <span>Ações na Matrícula</span>
                                        </div>
                                    </button>

                                    <button className={styles.menuItem}>
                                        <div className={styles.menuItemContent}>
                                            <ControlesDeslizantesIcon />
                                            <span>Rotina Escolar</span>
                                        </div>
                                    </button>
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
                                <span className={styles.userName}>
                                    Sueli Cardoso Silva
                                </span>
                                <span className={styles.userRole}>
                                    Professor(a)
                                </span>
                            </div>

                            <FeatherMoreVerticalIcon className={styles.moreIcon} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent;
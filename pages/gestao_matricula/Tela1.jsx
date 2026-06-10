import styles from "./Tela1.module.scss";
import PlayIcon from './icones/PlayIcon';
import BellSchoolIcon from './icones/BellSchoolIcon';
import GraduationCapIcon from './icones/GraduationCapIcon';
import RefreshIcon from './icones/RefreshIcon';
import LessonIcon from './icones/LessonIcon';
import CalendarIcon from './icones/CalendarIcon';
import AddCircleOutlineIcon from './icones/AddCircleOutlineIcon';
import RadarIcon from './icones/RadarIcon';
import ConvertDocumentIcon from './icones/ConvertDocumentIcon';
import EditIcon from './icones/EditIcon';
import DocumentIcon from './icones/DocumentIcon';
import AlertaSensorIcon from './icones/AlertaSensorIcon';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import GestaoPresenteIcon from './icones/GestaoPresenteIcon';
import DrawerComponent from '../../components/DrawerComponent';
import { useState } from "react";
import InfoIntegracaoGestaoPresente from "./InfoIntegracaoGestaoPresente";

const additionalButtonsAcoes = [
    {
        id: 1,
        title: "Gestão",
        subtitle: "Documental",
        descricao: "Visão geral de Lançamentos",
        icon: <DocumentIcon className={styles.icon} />,
    },
    {
        id: 2,
        title: "Monitoramento de",
        subtitle: "Ocorrências",
        descricao: "Visão geral de Lançamentos",
        icon: <AlertaSensorIcon className={styles.icon} />,
    },
    {
        id: 3,
        title: "Gestão de",
        subtitle: "Transferências",
        descricao: "Visão geral de Lançamentos",
        icon: <PriorityArrowsIcon className={styles.icon} />,
    },
    {
        id: 4,
        title: "Movimentações de",
        subtitle: "Matrículas",
        descricao: "Visão geral de Lançamentos",
        icon: <DocumentIcon className={styles.icon} />,
    },
];

const additionalButtonsRotina = [
    {
        id: 1,
        title: "Histórico",
        subtitle: "Escolar",
        descricao: "Controle de Registros",
        icon: <ConvertDocumentIcon className={styles.icon} />,
    },
    {
        id: 2,
        title: "Radar de",
        subtitle: "Registros",
        descricao: "Ferramenta Administrativa",
        icon: <RadarIcon className={styles.icon} />,
    },
    {
        id: 3,
        title: "Registros de",
        subtitle: "Sala de Aula",
        descricao: "Visão geral de Lançamentos",
        icon: <EditIcon className={styles.icon} />,
    },
    {
        id: 4,
        title: "Manutenções",
        subtitle: "de Turmas",
        descricao: "Ferramenta Administrativa",
        icon: <DocumentIcon className={styles.icon} />,
    },
];

const btns = [
    {
        id: 1,
        title: "Controle de",
        supertitle: "Matrículas",
        icon: <GraduationCapIcon className={styles.icon} />,
        iconBottom: <AddCircleOutlineIcon className={styles.icon} />,
        rota: "/gestao-matricula/lista-matriculas"
    },
    {
        id: 2,
        title: "Controle de",
        supertitle: "Rematrículas",
        icon: <RefreshIcon className={styles.icon} />,
        iconBottom: <AddCircleOutlineIcon className={styles.icon} />,
        rota: ""
    },
    {
        id: 3,
        title: "Ações de",
        supertitle: "Matrículas",
        icon: <LessonIcon className={styles.icon} />,
        iconBottom: <p>{additionalButtonsAcoes?.length}</p>,
        rota: 1
    },
    {
        id: 4,
        title: "Rotina",
        supertitle: "Escolar",
        icon: <CalendarIcon className={styles.icon} />,
        iconBottom: <p>{additionalButtonsRotina?.length}</p>,
        rota: 2
    }
];
const Tela1 = () => {
    const [btnSelected, setBtnSelected] = useState(0);
    const [additionalButtons, setAdditionalButtons] = useState([]);
    const [openCloseDrawer, setOpenCloseDrawer] = useState(false);

    const handleBtnSelected = (option) => {
        if (option === btnSelected) {
            setAdditionalButtons([]);
            return setBtnSelected(0);
        }

        if (option === 1) {
            setAdditionalButtons(additionalButtonsAcoes);
        }

        if (option === 2) {
            setAdditionalButtons(additionalButtonsRotina);
        }

        setBtnSelected(option);
    }

    const handleNavigation = (rota) => {
        if (rota === 1 || rota === 2) {
            handleBtnSelected(rota);
        }
    }

    return (
        <div className={styles.matriculaPage}>
            <button className={styles.gestaoPresenteButton} onClick={() => setOpenCloseDrawer(true)}>
                <GestaoPresenteIcon />
            </button>

            <DrawerComponent
                bgColor='#fff'
                openCloseDrawer={openCloseDrawer}
                setOpenCloseDrawer={setOpenCloseDrawer}
            >
                <InfoIntegracaoGestaoPresente setOpenCloseDrawer={setOpenCloseDrawer} />
            </DrawerComponent>

            <div className={styles.matriculaHero}>
                <div className={styles.matriculaHero_text}>
                    <h1>Gestão de Matrículas</h1>
                    <p>
                        Uma das principais vantagens dos questionários digitais é a facilidade de criação e distribuição.
                        Com apenas alguns cliques, é possível elaborar um questionário personalizado com uma variedade
                        de tipos de perguntas.
                    </p>
                </div>

                <div className={styles.matriculaHero_actions}>
                    <button className={styles.matriculaHero_cta}>
                        <span>Apresentação das Funcionalidades</span>
                        <div className={styles.matriculaHero_divider} />
                        <PlayIcon />
                    </button>
                    <BellSchoolIcon className={styles.icon} />
                </div>
            </div>

            <div className={styles.matriculaActions}>
                {btns.map((btn) => (
                    <button
                        key={btn.id}
                        className={`${styles.matriculaCard} ${btn?.rota === btnSelected ? styles["matriculaCard--active"] : ''}`}
                        onClick={() => handleNavigation(btn?.rota)}
                    >
                        {btn.icon}

                        <div className={styles.matriculaCard_text}>
                            <span>{btn.title}</span>
                            <span>{btn.supertitle}</span>
                        </div>

                        <div className={styles.matriculaCard_iconWrapper}>
                            <button className={styles.matriculaCard_badge}>
                                {btn.iconBottom}
                            </button>
                        </div>
                    </button>
                ))}

                <div className={styles.matriculaStats}>
                    <div className={styles.matriculaStats_header}>
                        <span className={styles.matriculaStats_title}>
                            Dados das Matrículas
                        </span>
                    </div>

                    <div className={styles.matriculaStats_grid}>
                        <div className={styles.matriculaStats_item}>
                            <span className={styles.matriculaStats_label}>
                                Total de <br />Matrículados
                            </span>
                            <span className={styles.matriculaStats_value}>448</span>
                        </div>

                        <div className={styles.matriculaStats_item}>
                            <span className={styles.matriculaStats_label}>
                                Total de <br />Desligados
                            </span>
                            <span className={styles.matriculaStats_value}>21</span>
                        </div>

                        <div className={styles.matriculaStats_item}>
                            <span className={styles.matriculaStats_label}>
                                Total de <br />Transferidos
                            </span>
                            <span className={styles.matriculaStats_value}>382</span>
                        </div>
                    </div>
                </div>
            </div>

            {additionalButtons?.length > 0 && (
                <div className={styles.matriculaExtras}>
                    <div className={styles.matriculaExtras_header}>
                        <span className={styles.matriculaExtras_title}>
                            Funções Adicionais:
                        </span>
                    </div>

                    <div className={styles.matriculaExtras_grid}>
                        {additionalButtons.map((item) => (
                            <button
                                key={item.id}
                                className={styles.matriculaExtras_card}
                            >
                                <div className={styles.matriculaExtras_icon}>
                                    {item.icon}
                                </div>

                                <div className={styles.matriculaExtras_text}>
                                    <span>{item.title}</span>
                                    <span>{item.subtitle}</span>
                                    <span>{item.descricao}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tela1;
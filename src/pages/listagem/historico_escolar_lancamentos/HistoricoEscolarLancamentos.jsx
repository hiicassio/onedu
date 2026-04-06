import styles from './HistoricoEscolarLancamentos.module.scss';
import MenuDotsIcon from './icones/MenuDotsIcon';
import FeatherImageIcon from './icones/FeatherImageIcon';
import GestãoPresenteIcon from './icones/GestãoPresenteIcon';
import EducacaoEspecialIcon from './icones/EducacaoEspecialIcon';
import FeatherSearchIcon from './icones/FeatherSearchIcon';
import UserAddIcon from './icones/UserAddIcon';
import AngleSmallLeftIcon from './icones/AngleSmallLeftIcon';
import WhatsappIcon from './icones/WhatsappIcon';
import aluno from './icones/aluno.png';
import HistoricoEscolar from './HistoricoEscolar';
import Header from './Header';

const HistoricoEscolarLancamentos = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.card}>

                {/* HEADER */}
                <div className={styles.header}>
                    <span className={styles.title}>Resumo de Matrícula</span>
                    <MenuDotsIcon />
                </div>

                <form className={styles.form}>

                    {/* FOTO */}
                    <div className={styles.photoContainer}>
                        <img className={styles.photo} src={aluno} alt="" />
                        <button className={styles.photoButton}>
                            <FeatherImageIcon />
                        </button>
                    </div>

                    <div className={styles.fieldsContainer}>

                        {/* LINHA 1 */}
                        <div className={styles.row}>
                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>IDSGP</span>
                                    <span className={styles.value}>424001004</span>
                                </div>
                                <button className={styles.iconButton}>
                                    <GestãoPresenteIcon className={styles.gestaoPresenteIcone} />
                                </button>
                            </label>

                            <label className={styles.field}>
                                <button
                                    style={{ background: '#197DFF' }}
                                    className={styles.iconButton}
                                >
                                    <EducacaoEspecialIcon style={{ fontSize: 20, color: '#fff' }} />
                                </button>

                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Nome do Aluno</span>
                                    <span className={styles.value}>Diego da Silva Cardoso Oliveira JR</span>
                                </div>

                                <div className={styles.actions}>
                                    <button className={styles.iconButton}>
                                        <FeatherSearchIcon />
                                    </button>
                                    <button className={styles.iconButton}>
                                        <UserAddIcon />
                                    </button>
                                </div>
                            </label>

                            <label className={styles.field}>
                                <button className={styles.iconButton}>
                                    <FeatherSearchIcon />
                                </button>

                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>DN</span>
                                    <span className={styles.value}>10/05/2018</span>
                                </div>
                            </label>
                        </div>

                        {/* LINHA 2 */}
                        <div className={styles.row}>
                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>INEP</span>
                                    <input className={styles.input} type="number" defaultValue="45881100" />
                                </div>
                            </label>

                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Nome Social</span>
                                    <input className={styles.input} type="text" />
                                </div>
                            </label>

                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Gênero</span>
                                    <span className={styles.value}>Masculino</span>
                                </div>
                                <AngleSmallLeftIcon className={styles.arrowIcon} />
                            </label>
                        </div>

                        {/* LINHA 3 */}
                        <div className={styles.row}>
                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Programas Sociais</span>
                                    <span className={styles.value}>Sim</span>
                                </div>
                                <AngleSmallLeftIcon className={styles.arrowIcon} />
                            </label>

                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Programas Sociais</span>
                                    <input className={styles.input} type="text" />
                                </div>
                                <button className={styles.iconButton}>
                                    <FeatherSearchIcon />
                                </button>
                            </label>

                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Aluno PCD</span>
                                    <span className={styles.value}>Sim</span>
                                </div>
                                <AngleSmallLeftIcon className={styles.arrowIcon} />
                            </label>
                        </div>

                        {/* LINHA 4 */}
                        <div className={styles.row}>
                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Responsável</span>
                                    <input className={styles.input} type="text" defaultValue="Sonia Francisca Cardoso Silva" />
                                </div>
                                <button className={styles.iconButton}>
                                    <FeatherSearchIcon />
                                </button>
                            </label>

                            <label className={styles.field}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Telefone Principal</span>
                                    <input className={styles.input} type="tel" defaultValue="(11) 99563-5210" />
                                </div>
                                <button className={styles.iconButton}>
                                    <WhatsappIcon style={{ fontSize: 15, color: '#00397B' }} />
                                </button>
                            </label>
                        </div>

                    </div>
                </form>
                <div className={styles.dividir} />
            </div>
            <HistoricoEscolar />
        </div>
    )
}

export default HistoricoEscolarLancamentos;
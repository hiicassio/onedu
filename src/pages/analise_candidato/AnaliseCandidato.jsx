import styles from './AnaliseCandidato.module.scss';
import CircleXMarkIcon from './icones/CircleXMarkIcon';
import ExclamationIcon from './icones/ExclamationIcon';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import OperationIcon from './icones/OperationIcon';
import FeatherPrinterIcon from './icones/FeatherPrinterIcon';
import FeatherSearchIcon from './icones/FeatherSearchIcon';
import WALogoIcon from './icones/WALogoIcon';
import CalendarClockIcon from './icones/CalendarClockIcon';
import AngleSmallLeftIcon from './icones/AngleSmallLeftIcon';
import DocumentIcon from './icones/DocumentIcon';
import ShareIcon from './icones/ShareIcon';
import EyeIcon from './icones/EyeIcon';
import user from './img/user.png';
import { useState } from 'react';
import DrawerComponent from '../../components/DrawerComponent';

const btnsFooterModal = [
    { id: 1, descricao: "Avançar", icone: <AngleSmallLeftIcon />, class: "secondary" }
];

const AnaliseCandidato = ({ openCloseDrawer, setOpenCloseDrawer }) => {
    const [etapa, setEtapa] = useState(1);

    const steps = [
        { id: 1, icon: <ExclamationIcon />, label: 'Dados' },
        { id: 2, icon: <PriorityArrowsIcon />, label: 'Transferência' },
        { id: 3, icon: <OperationIcon />, label: 'Configurações' },
        { id: 4, icon: <FeatherPrinterIcon />, label: 'Conclusão' },
    ];

    return (
        <DrawerComponent
            bgColor="#fff"
            openCloseDrawer={openCloseDrawer}
            setOpenCloseDrawer={setOpenCloseDrawer}
            btnsFooterModal={btnsFooterModal}
            titulo="Transferência do Aluno"
        >
            <div className={styles.analiseCandidato}>
                <div className={styles.analiseCandidato_content}>
                    {/* STEPS */}
                    <div className={styles.analiseCandidato_steps}>
                        <div className={styles.analiseCandidato_steps_area}>
                            {steps.map(step => (
                                <button
                                    key={step.id}
                                    onClick={() => setEtapa(step.id)}
                                    className={`${styles.analiseCandidato_step} ${etapa === step.id ? styles.analiseCandidato_step_select : ''}`}
                                >
                                    {step.icon}
                                    <span>{step.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* FORM */}
                    <form className={styles.analiseCandidato_form}>

                        {/* IDENTIFICAÇÃO */}
                        {etapa === 1 && (
                            <>
                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Identificação de Aluno:
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>

                                        <label className={styles.analiseCandidato_field}>
                                            <img
                                                className={styles.analiseCandidato_avatar}
                                                src={user}
                                                alt=""
                                            />

                                            <div className={styles.analiseCandidato_fieldGroup}>
                                                <span>Aluno</span>
                                                <input type="text" name="nome" />
                                            </div>

                                            <div className={styles.analiseCandidato_fieldAction}>
                                                <FeatherSearchIcon />
                                            </div>
                                        </label>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>IDSGP</span>
                                                    <input type="text" name="idsgp" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>PCD</span>
                                                    <input type="text" name="pcd" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Contato</span>
                                                    <input type="text" name="contato" />
                                                </div>

                                                <div className={styles.analiseCandidato_fieldAction}>
                                                    <WALogoIcon />
                                                </div>
                                            </label>
                                        </div>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>D.N</span>
                                                    <input type="date" name="data_nascimento" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Responsável</span>
                                                    <input type="text" name="responsavel" />
                                                </div>

                                                <div className={styles.analiseCandidato_fieldAction}>
                                                    <WALogoIcon />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.analiseCandidato_dividir} />

                                {/* MATRÍCULA */}
                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Informações de Matrícula
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>

                                        <label
                                            style={{ backgroundColor: '#F3F4F1', paddingLeft: 3 }}
                                            className={styles.analiseCandidato_field}
                                        >
                                            <div className={styles.analiseCandidato_fieldIcon}>
                                                <CalendarClockIcon />
                                            </div>

                                            <div className={styles.analiseCandidato_fieldGroup}>
                                                <span>Unidade Escolar</span>
                                                <input type="text" name="unidade_escolar" />
                                            </div>
                                        </label>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Nível</span>
                                                    <input type="text" name="nivel" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Turma</span>
                                                    <input type="text" name="turma" />
                                                </div>

                                                <div
                                                    style={{ maxWidth: 36, maxHeight: 33, backgroundColor: '#fff', borderRadius: 5, padding: 5 }}
                                                    className={styles.analiseCandidato_fieldGroup}
                                                >
                                                    <span>Nº</span>
                                                    <input type="text" name="numero" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Regime Atual</span>
                                                    <input type="text" name="regime_atual" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {etapa === 2 && (
                            <>
                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Informações de Transferência:
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>

                                        <label
                                            style={{ backgroundColor: '#fff', paddingLeft: 3 }}
                                            className={styles.analiseCandidato_field}
                                        >
                                            <div
                                                style={{ backgroundColor: '#F3F4F1' }}
                                                className={styles.analiseCandidato_fieldIcon}>
                                                <DocumentIcon />
                                            </div>

                                            <div className={styles.analiseCandidato_fieldGroup}>
                                                <span>Modalidade de Transferênciar</span>
                                                <select name="" id="">
                                                    <option value="">Selecione...</option>
                                                    <option value="externa">Escolas Externas (Fora da Rede)</option>
                                                    <option value="municipal">Escolas Municipais</option>
                                                    <option value="estadual">Escolas Estaduais</option>
                                                    <option value="federal">Escolas Federais</option>
                                                    <option value="privada">Escolas Privadas</option>
                                                    <option value="comunitaria">Escolas Comunitárias</option>
                                                    <option value="filantropica">Escolas Filantrópicas</option>
                                                    <option value="tecnica">Escolas Técnicas</option>
                                                    <option value="militar">Escolas Militares</option>
                                                    <option value="internacional">Escolas Internacionais</option>
                                                    <option value="indigena">Escolas Indígenas</option>
                                                    <option value="quilombola">Escolas Quilombolas</option>
                                                    <option value="especial">Educação Especial</option>
                                                    <option value="eja">Educação de Jovens e Adultos (EJA)</option>
                                                </select>
                                            </div>
                                        </label>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Data da Tranferência</span>
                                                    <input type="date" name="Data da Tranferência" />
                                                </div>
                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <CalendarClockIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Data do Registro</span>
                                                    <input type="date" name="Data do Registro" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.analiseCandidato_dividir} />

                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Destino do Aluno:
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Estado</span>
                                                    <select name="" id="">
                                                        <option value="">Rio de Janeiro</option>
                                                    </select>
                                                </div>
                                            </label>

                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Município</span>
                                                    <select name="" id="">
                                                        <option value="">Niterói</option>
                                                    </select>
                                                </div>
                                                <div
                                                    style={{ backgroundColor: '#197DFF' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <ShareIcon style={{ fontSize: 15, color: '#fff' }} />
                                                </div>
                                            </label>
                                        </div>
                                        <label
                                            style={{ backgroundColor: '#fff', paddingLeft: 3 }}
                                            className={styles.analiseCandidato_field}
                                        >
                                            <div
                                                style={{ backgroundColor: '#F3F4F1' }}
                                                className={styles.analiseCandidato_fieldIcon}>
                                                <CalendarClockIcon style={{ fontSize: 15 }} />
                                            </div>

                                            <div className={styles.analiseCandidato_fieldGroup}>
                                                <span>Unidade Escolar</span>
                                                <select name="" id="">
                                                    <option value="">Selecione...</option>
                                                    <option value="externa">521110 - Escola Municipal Angelo Gaivoto</option>
                                                </select>
                                            </div>
                                        </label>

                                        <div className={styles.atencao}>
                                            <span>Atenção</span>
                                            <p>Este software permite a integração de informações escolares entre redes de diferentes regiões do território nacional. No entanto, é importante destacar que os municípios de origem e destino devem utilizar a mesma ferramenta base para garantir o máximo de compatibilidade entre os dados, assegurando que o compartilhamento ocorra de forma legal e devidamente autorizado, em conformidade com a LGPD. Além disso, o sistema disponibiliza um portal de histórico escolar acessível por meio de QR Code impresso no documento, permitindo a verificação digital e segura das informações acadêmicas.</p>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}

                        {etapa === 3 && (
                            <>
                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Resumo de Compartilhamento:
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Notas e Desempenho" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Avaliações Descritivas" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Avaliações Diagnósticas" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Frequência Escolar" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Conteúdos Curriculares" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Históricos anteriores" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Dados de Educação Especial" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.analiseCandidato_dividir} />

                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Compatibilização de Notas e Faltas
                                        <ExclamationIcon />
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Notas e Desempenho" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                        <div className={styles.analiseCandidato_grid}>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Item Compartilhado</span>
                                                    <input type="text" name="responsavel" value="Notas e Desempenho" />
                                                </div>

                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}>
                                                    <EyeIcon style={{ fontSize: 15 }} />
                                                </div>
                                            </label>
                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Compartilhar?</span>
                                                    <select name="" id="">
                                                        <option value="">Sim</option>
                                                        <option value="">Não</option>
                                                    </select>
                                                </div>
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </DrawerComponent>
    );
};

export default AnaliseCandidato;
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
import CheckCircleIcon from '../home/icones/CheckCircleIcon';
import SuccessScreen from '../../components/form/SuccessScreen';

const TOTAL_STEPS = 4;

const AnaliseCandidato = ({ openCloseDrawer, setOpenCloseDrawer }) => {
    const [etapa, setEtapa] = useState(1);

    const steps = [
        { id: 1, icon: <ExclamationIcon />, label: 'Dados' },
        { id: 2, icon: <PriorityArrowsIcon />, label: 'Transferência' },
        { id: 3, icon: <OperationIcon />, label: 'Configurações' },
        { id: 4, icon: <FeatherPrinterIcon />, label: 'Conclusão' },
    ];

    const isFirst     = etapa === 1;
    const isFinal     = etapa === TOTAL_STEPS;
    const isConclusao = etapa > TOTAL_STEPS;

    const avancar = () => setEtapa(prev => prev + 1);
    const voltar  = () => setEtapa(prev => prev - 1);

    const handleClose = () => {
        setOpenCloseDrawer(false);
        setTimeout(() => setEtapa(1), 400);
    };

    const btnsFooterModal = isConclusao
        ? [
            {
                id: 1,
                descricao: 'Fechar',
                class: 'secondary',
                func: handleClose,
            },
        ]
        : [
            ...(!isFirst ? [{
                id: 0,
                descricao: 'Voltar',
                class: 'primary',
                func: voltar,
            }] : []),
            {
                id: 1,
                descricao: isFinal ? 'Confirmar Transferência' : 'Avançar',
                icone: isFinal ? null : <AngleSmallLeftIcon />,
                class: 'secondary',
                func: avancar,
            },
        ];

    return (
        <DrawerComponent
            bgColor="#fff"
            openCloseDrawer={openCloseDrawer}
            setOpenCloseDrawer={handleClose}
            btnsFooterModal={btnsFooterModal}
            titulo="Transferência do Aluno"
        >
            <div className={styles.analiseCandidato}>
                <div className={styles.analiseCandidato_content}>

                    {/* STEPS BAR */}
                    {!isConclusao && (
                        <div className={styles.analiseCandidato_steps}>
                            <div className={styles.analiseCandidato_steps_area}>
                                {steps.map(step => (
                                    <button
                                        key={step.id}
                                        type="button"
                                        onClick={() => setEtapa(step.id)}
                                        className={`${styles.analiseCandidato_step} ${etapa === step.id ? styles.analiseCandidato_step_select : ''}`}
                                    >
                                        {step.icon}
                                        <span>{step.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FORM */}
                    <form
                        className={styles.analiseCandidato_form}
                        onSubmit={e => e.preventDefault()}
                    >

                        {/* ETAPA 1 — DADOS */}
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
                                                <input type="text" name="nome" placeholder="Nome do aluno" />
                                            </div>

                                            <div className={styles.analiseCandidato_fieldAction}>
                                                <FeatherSearchIcon />
                                            </div>
                                        </label>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>IDSGP</span>
                                                    <input type="text" name="idsgp" placeholder="000000" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>PCD</span>
                                                    <input type="text" name="pcd" placeholder="Não informado" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Contato</span>
                                                    <input type="text" name="contato" placeholder="(00) 00000-0000" />
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
                                                    <input type="text" name="responsavel" placeholder="Nome do responsável" />
                                                </div>
                                                <div className={styles.analiseCandidato_fieldAction}>
                                                    <WALogoIcon />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.analiseCandidato_dividir} />

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
                                                <input type="text" name="unidade_escolar" placeholder="Selecione a unidade" />
                                            </div>
                                        </label>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Nível</span>
                                                    <input type="text" name="nivel" placeholder="Ex: Fundamental" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Turma</span>
                                                    <input type="text" name="turma" placeholder="Ex: A" />
                                                </div>
                                                <div
                                                    style={{ maxWidth: 36, maxHeight: 33, backgroundColor: '#fff', borderRadius: 5, padding: 5 }}
                                                    className={styles.analiseCandidato_fieldGroup}
                                                >
                                                    <span>Nº</span>
                                                    <input type="text" name="numero" placeholder="0" />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Regime Atual</span>
                                                    <input type="text" name="regime_atual" placeholder="Ex: Regular" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ETAPA 2 — TRANSFERÊNCIA */}
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
                                                className={styles.analiseCandidato_fieldIcon}
                                            >
                                                <DocumentIcon />
                                            </div>
                                            <div className={styles.analiseCandidato_fieldGroup}>
                                                <span>Modalidade de Transferência</span>
                                                <select name="modalidade">
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
                                                className={styles.analiseCandidato_field}
                                            >
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Data da Transferência</span>
                                                    <input type="date" name="data_transferencia" />
                                                </div>
                                                <div
                                                    style={{ backgroundColor: '#F3F4F1' }}
                                                    className={styles.analiseCandidato_fieldAction}
                                                >
                                                    <CalendarClockIcon />
                                                </div>
                                            </label>

                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Data do Registro</span>
                                                    <input type="date" name="data_registro" />
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
                                                className={styles.analiseCandidato_field}
                                            >
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Estado</span>
                                                    <select name="estado">
                                                        <option value="">Rio de Janeiro</option>
                                                    </select>
                                                </div>
                                            </label>

                                            <label
                                                style={{ backgroundColor: '#fff' }}
                                                className={styles.analiseCandidato_field}
                                            >
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Município</span>
                                                    <select name="municipio">
                                                        <option value="">Niterói</option>
                                                    </select>
                                                </div>
                                                <div
                                                    style={{ backgroundColor: '#197DFF' }}
                                                    className={styles.analiseCandidato_fieldAction}
                                                >
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
                                                className={styles.analiseCandidato_fieldIcon}
                                            >
                                                <CalendarClockIcon />
                                            </div>
                                            <div className={styles.analiseCandidato_fieldGroup}>
                                                <span>Unidade Escolar de Destino</span>
                                                <select name="unidade_destino">
                                                    <option value="">Selecione...</option>
                                                    <option value="521110">521110 - Escola Municipal Angelo Gaivoto</option>
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

                        {/* ETAPA 3 — CONFIGURAÇÕES */}
                        {etapa === 3 && (
                            <>
                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Resumo de Compartilhamento:
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>
                                        {[
                                            'Notas e Desempenho',
                                            'Avaliações Descritivas',
                                            'Avaliações Diagnósticas',
                                            'Frequência Escolar',
                                            'Conteúdos Curriculares',
                                            'Históricos Anteriores',
                                            'Dados de Educação Especial',
                                        ].map((item) => (
                                            <div key={item} className={styles.analiseCandidato_grid}>
                                                <label
                                                    style={{ backgroundColor: '#fff' }}
                                                    className={styles.analiseCandidato_field}
                                                >
                                                    <div className={styles.analiseCandidato_fieldGroup}>
                                                        <span>Item Compartilhado</span>
                                                        <input type="text" readOnly value={item} />
                                                    </div>
                                                    <div
                                                        style={{ backgroundColor: '#F3F4F1' }}
                                                        className={styles.analiseCandidato_fieldAction}
                                                    >
                                                        <EyeIcon />
                                                    </div>
                                                </label>
                                                <label
                                                    style={{ backgroundColor: '#fff' }}
                                                    className={styles.analiseCandidato_field}
                                                >
                                                    <div className={styles.analiseCandidato_fieldGroup}>
                                                        <span>Compartilhar?</span>
                                                        <select name={`compartilhar_${item}`}>
                                                            <option value="sim">Sim</option>
                                                            <option value="nao">Não</option>
                                                        </select>
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.analiseCandidato_dividir} />

                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Compatibilização de Notas e Faltas
                                        <ExclamationIcon />
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>
                                        {[
                                            'Notas e Desempenho',
                                            'Frequência Escolar',
                                        ].map((item) => (
                                            <div key={item} className={styles.analiseCandidato_grid}>
                                                <label
                                                    style={{ backgroundColor: '#fff' }}
                                                    className={styles.analiseCandidato_field}
                                                >
                                                    <div className={styles.analiseCandidato_fieldGroup}>
                                                        <span>Item</span>
                                                        <input type="text" readOnly value={item} />
                                                    </div>
                                                    <div
                                                        style={{ backgroundColor: '#F3F4F1' }}
                                                        className={styles.analiseCandidato_fieldAction}
                                                    >
                                                        <EyeIcon />
                                                    </div>
                                                </label>
                                                <label
                                                    style={{ backgroundColor: '#fff' }}
                                                    className={styles.analiseCandidato_field}
                                                >
                                                    <div className={styles.analiseCandidato_fieldGroup}>
                                                        <span>Compatibilizar?</span>
                                                        <select name={`compat_${item}`}>
                                                            <option value="sim">Sim</option>
                                                            <option value="nao">Não</option>
                                                        </select>
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ETAPA 4 — REVISÃO */}
                        {etapa === 4 && (
                            <>
                                <div className={styles.analiseCandidato_section}>
                                    <span className={styles.analiseCandidato_sectionTitle}>
                                        Revisão da Transferência:
                                    </span>

                                    <div className={styles.analiseCandidato_sectionContent}>

                                        <label
                                            style={{ backgroundColor: '#F3F4F1', paddingLeft: 3 }}
                                            className={styles.analiseCandidato_field}
                                        >
                                            <img className={styles.analiseCandidato_avatar} src={user} alt="" />
                                            <div className={styles.analiseCandidato_fieldGroup}>
                                                <span>Aluno</span>
                                                <input type="text" readOnly placeholder="Nome do aluno selecionado" />
                                            </div>
                                        </label>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Unidade de Origem</span>
                                                    <input type="text" readOnly placeholder="Unidade selecionada" />
                                                </div>
                                            </label>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Unidade de Destino</span>
                                                    <input type="text" readOnly placeholder="Unidade selecionada" />
                                                </div>
                                            </label>
                                        </div>

                                        <div className={styles.analiseCandidato_grid}>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Modalidade</span>
                                                    <input type="text" readOnly placeholder="Modalidade selecionada" />
                                                </div>
                                            </label>
                                            <label className={styles.analiseCandidato_field}>
                                                <div className={styles.analiseCandidato_fieldGroup}>
                                                    <span>Data da Transferência</span>
                                                    <input type="text" readOnly placeholder="DD/MM/AAAA" />
                                                </div>
                                            </label>
                                        </div>

                                        <div className={styles.atencao}>
                                            <span>Confirme os dados antes de finalizar</span>
                                            <p>Ao confirmar a transferência, o aluno será vinculado à unidade de destino e um documento oficial será gerado. Esta ação não poderá ser desfeita sem autorização administrativa.</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ETAPA 5 — CONCLUSÃO */}
                        {etapa === 5 && (
                            <SuccessScreen
                                icon={<CheckCircleIcon />}
                                title="Transferência realizada com sucesso!"
                                description="O aluno foi transferido para a unidade de destino. O documento oficial foi gerado e está disponível para impressão no histórico de transferências."
                            />
                        )}

                    </form>
                </div>
            </div>
        </DrawerComponent>
    );
};

export default AnaliseCandidato;

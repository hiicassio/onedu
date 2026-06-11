import { useEffect, useState } from 'react';
import styles from './ControleDesligamento.module.scss';
import Header from './Header';
import Filtro from './Filtro';
import Loading from '../../../components/Loading';
import DesligamentoExpress from '../../desligamento_express/DesligamentoExpress';
import students from './students.json';
import ArrowAngleBottomIcon from '../controle_transferencias/icones/ArrowAngleBottomIcon';
import TrashIcon from '../controle_transferencias/icones/TrashIcon';
import PenSquareIcon from '../controle_transferencias/icones/PenSquareIcon';
import PrintIcon from '../controle_transferencias/icones/PrintIcon';
import WhatsappIcon from '../controle_transferencias/icones/WhatsappIcon';
import CircleAIcon from '../controle_transferencias/icones/CircleAIcon';
import Circle1Icon from '../controle_transferencias/icones/Circle1Icon';
import user from '../controle_transferencias/icones/user.png';
import user2 from '../controle_transferencias/icones/user2.png';

const MOTIVO_COLORS = {
    'Transferência p/ outra rede': { bg: '#EFF6FF', color: '#1D4ED8' },
    'Mudança de endereço':         { bg: '#F0FDF4', color: '#15803D' },
    'Motivos pessoais':            { bg: '#FFF7ED', color: '#C2410C' },
    'Motivos financeiros':         { bg: '#FEF2F2', color: '#B91C1C' },
    'Outro':                       { bg: '#F5F3FF', color: '#6D28D9' },
};

const MotivoTag = ({ motivo }) => {
    const style = MOTIVO_COLORS[motivo] || { bg: '#F3F4F1', color: '#00397B' };
    return (
        <span
            className={styles.motivoTag}
            style={{ backgroundColor: style.bg, color: style.color }}
        >
            {motivo}
        </span>
    );
};

const ControleDesligamento = () => {
    const [selectHead, setSelectHead] = useState(1);
    const [rowColapse, setRowColapse] = useState(0);
    const [loading, setLoading] = useState(true);
    const [openDesligamento, setOpenDesligamento] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(t);
    }, []);

    const handleRowColapse = (id) =>
        setRowColapse(prev => (prev === id ? 0 : id));

    return (
        <div className={styles.containerControleDesligamento}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Header />
                    <Filtro onOpenDesligamento={() => setOpenDesligamento(true)} />

                    <div className={styles.tableArea}>
                        <div className={styles.table}>

                            {/* CABEÇALHO */}
                            <div className={styles.header}>
                                <div className={styles.th}>NOME ALUNO(A)</div>
                                <div className={styles.th}>MATRÍCULA</div>
                                <div className={styles.th}>DATA DESLIGAMENTO</div>
                                <div className={styles.th}>NÍVEL / TURMA</div>
                                <div className={styles.th}>MOTIVO</div>
                                <div className={styles.th}>
                                    <div className={styles.headerActions}>
                                        <button
                                            onClick={() => setSelectHead(1)}
                                            className={`${styles.viewButton} ${selectHead === 1 ? styles.active : ''}`}
                                        >
                                            <CircleAIcon />
                                        </button>
                                        <button
                                            onClick={() => setSelectHead(2)}
                                            className={`${styles.viewButton} ${selectHead === 2 ? styles.active : ''}`}
                                        >
                                            <Circle1Icon />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* LINHAS */}
                            <div className={styles.body}>
                                {students.map((student, index) => (
                                    <div
                                        key={student.id}
                                        className={`${styles.areaRow} ${rowColapse === student.id ? styles.areaRowSelected : ''}`}
                                        onClick={() => handleRowColapse(student.id)}
                                    >
                                        <div className={styles.row}>
                                            <div className={styles.td}>
                                                <img
                                                    src={index % 2 === 0 ? user : user2}
                                                    className={styles.userIcon}
                                                    alt=""
                                                />
                                                <span>{student.name}</span>
                                            </div>

                                            <div className={styles.td}>
                                                <strong>{student.matricula}</strong>
                                            </div>

                                            <div className={styles.td}>{student.data}</div>

                                            <div className={styles.td}>{student.nivel}</div>

                                            <div className={styles.td}>
                                                <MotivoTag motivo={student.motivo} />
                                            </div>

                                            <div className={styles.td}>
                                                <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                            </div>
                                        </div>

                                        {rowColapse === student.id && (
                                            <div className={styles.dropdown}>
                                                <div>
                                                    <span>Registro realizado em:</span>
                                                    <span>{student.data} às 17:41:20</span>
                                                </div>
                                                <div>
                                                    <span>Usuário Responsável</span>
                                                    <span>{student.responsavel}</span>
                                                </div>
                                                <div>
                                                    <TrashIcon />
                                                    <PenSquareIcon />
                                                    <PrintIcon />
                                                    <WhatsappIcon />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </>
            )}

            <DesligamentoExpress
                openCloseDrawer={openDesligamento}
                setOpenCloseDrawer={setOpenDesligamento}
            />
        </div>
    );
};

export default ControleDesligamento;

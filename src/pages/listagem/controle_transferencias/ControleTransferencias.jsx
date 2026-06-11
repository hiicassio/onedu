import { useEffect, useState } from 'react';
import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import styles from './ControleTransferencias.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import studentsData from './students.json';
import ShareIcon from './icones/ShareIcon';
import CircleAIcon from './icones/CircleAIcon';
import Circle1Icon from './icones/Circle1Icon';
import Header from './Header';
import Filtro from './Filtro';
import Loading from '../../../components/Loading';
import AnaliseCandidato from '../../analise_candidato/AnaliseCandidato';
import CancelamentoTransferenciaModal from './CancelamentoTransferenciaModal';
import TransferenciaRowActions from '../gestao_matricula/components/TransferenciaRowActions';

const ControleTransferencias = () => {
    const [selectHead, setSelectHead] = useState(1);
    const [rowColapse, setRowColapse] = useState(0);
    const [loading, setLoading] = useState(true);
    const [openTransferencia, setOpenTransferencia] = useState(false);
    const [openCancelamento, setOpenCancelamento] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [transferencias, setTransferencias] = useState(studentsData);

    const handleRowColapse = (id) => {
        setRowColapse((prev) => (prev === id ? 0 : id));
    };

    const handleOpenCancelamento = (student) => {
        setSelectedStudent(student);
        setOpenCancelamento(true);
    };

    const handleConfirmCancelamento = (student) => {
        setTransferencias((prev) => prev.filter((item) => item.id !== student.id));
        setRowColapse(0);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.containerControleTransferencias}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Header />
                    <Filtro onOpenTransfer={() => setOpenTransferencia(true)} />
                    <div className={styles.tableArea}>
                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.th}>NOME ALUNO(A)</div>
                                <div className={styles.th}>TURMA</div>
                                <div className={styles.th}>DATA REGISTRO</div>
                                <div className={styles.th}>NIVEL/TURMA</div>
                                <div className={styles.th}>DESTINO</div>
                                <div className={styles.th}>
                                    <div className={styles.headerActions}>
                                        <button
                                            type="button"
                                            onClick={() => setSelectHead(1)}
                                            className={`${styles.viewButton} ${selectHead === 1 ? styles.active : ''}`}
                                        >
                                            <CircleAIcon />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setSelectHead(2)}
                                            className={`${styles.viewButton} ${selectHead === 2 ? styles.active : ''}`}
                                        >
                                            <Circle1Icon />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.body}>
                                {transferencias.map((student, index) => (
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

                                            <div className={styles.td}>{student.matricula}</div>
                                            <div className={styles.td}>{student.data}</div>
                                            <div className={styles.td}>{student.nivel}</div>
                                            <div className={styles.td}>{student.destino}</div>
                                            <div className={styles.td}>
                                                <span>{student.local_destino}</span>
                                                <div className={styles.areaShare}>
                                                    {student.share && <ShareIcon className={styles.shareIcon} />}
                                                </div>
                                                <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                            </div>
                                        </div>

                                        {rowColapse === student.id && (
                                            <div className={styles.dropdown}>
                                                <div>
                                                    <span>Registro realizado em:</span>
                                                    <span>{student.registroEm ?? '10/01/2026 as 17:41:20'}</span>
                                                </div>
                                                <div>
                                                    <span>Usuário Responsável</span>
                                                    <span>{student.responsavel ?? 'Simone Tabet Filha'}</span>
                                                </div>
                                                <TransferenciaRowActions
                                                    student={student}
                                                    onCancel={handleOpenCancelamento}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <AnaliseCandidato
                openCloseDrawer={openTransferencia}
                setOpenCloseDrawer={setOpenTransferencia}
            />

            <CancelamentoTransferenciaModal
                open={openCancelamento}
                onClose={() => setOpenCancelamento(false)}
                student={selectedStudent}
                onConfirm={handleConfirmCancelamento}
            />
        </div>
    );
};

export default ControleTransferencias;

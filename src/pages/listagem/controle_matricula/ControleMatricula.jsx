import { useEffect, useState } from 'react';
import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import styles from './ControleMatricula.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import students from './students.json';
import CircleAIcon from './icones/CircleAIcon';
import Circle1Icon from './icones/Circle1Icon';
import InfoIcon from './icones/InfoIcon';
import Header from './Header';
import Filtro from './Filtro';
import Loading from '../../../components/Loading';
import DesligamentoExpress from '../../desligamento_express/DesligamentoExpress';
import CadastroPessoasDrawer from '../../gestao_institucional/gestao_cadastral/gestao_pessoas/CadastroPessoasDrawer';
import DocumentosExpressDrawer from '../../documentos_express/DocumentosExpressDrawer';
import AnaliseCandidato from '../../analise_candidato/AnaliseCandidato';
import MatriculaRowActions from '../gestao_matricula/components/MatriculaRowActions';

const ControleMatricula = () => {
    const [rowColapse, setRowColapse] = useState(0);
    const [selectHead, setSelectHead] = useState(1);
    const [loading, setLoading] = useState(true);
    const [openDesligamento, setOpenDesligamento] = useState(false);
    const [openInfoPessoa, setOpenInfoPessoa] = useState(false);
    const [openDocumentosExpress, setOpenDocumentosExpress] = useState(false);
    const [openTransferencia, setOpenTransferencia] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleRowColapse = (id) => {
        setRowColapse(prev => prev === id ? 0 : id);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.containerControleMatricula}>
            {loading ?
                <Loading />
                :
                <>
                    <Header />
                    <Filtro />
                    <div className={styles.tableArea}>
                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.th}>NOME ALUNO(A)</div>
                                <div className={styles.th}>MATRÍCULA</div>
                                <div className={styles.th}>NIVEL/TURMA</div>
                                <div className={styles.th}>TURNO</div>
                                <div className={styles.th}>STATUS</div>
                                <div className={styles.th}>SITUAÇÕES</div>
                                <div className={styles.th}>
                                    <div className={styles.headerActions}>
                                        <button
                                            onClick={() => setSelectHead(1)}
                                            className={`${styles.viewButton} ${selectHead === 1 ? styles.active : ''
                                                }`}
                                        >
                                            <CircleAIcon />
                                        </button>

                                        <button
                                            onClick={() => setSelectHead(2)}
                                            className={`${styles.viewButton} ${selectHead === 2 ? styles.active : ''
                                                }`}
                                        >
                                            <Circle1Icon />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.body}>
                                {students?.map((student, index) => (
                                    <div
                                        className={
                                            `
                                ${styles.areaRow} 
                                ${student.situacao === 0 ? styles.areaRowAtencao : ''} 
                                ${rowColapse === student.id ? styles.areaRowSelected : ''}
                                `
                                        } onClick={() => handleRowColapse(student?.id)}>
                                        <div key={index} className={styles.row}>
                                            <div className={styles.td}>
                                                <img src={index % 2 === 0 ? user : user2} className={styles.userIcon} />
                                                <span>{student?.id}</span>
                                                <span>{student.name}</span>
                                            </div>

                                            <div className={styles.td}>{student.protocolo}</div>
                                            <div className={styles.td}>{student.turma}</div>
                                            <div className={styles.td}>{student.turno}</div>
                                            <div className={styles.td}>
                                                <button
                                                    style={{
                                                        background: student.status === "MC" ? '#FCD4D4' : '#E8FFE8'
                                                    }}
                                                >
                                                    <button
                                                        style={{
                                                            background: student.status === "MC" ? '#FF0000' : '#12B76A'
                                                        }}
                                                        className={styles.status}>{student.status}</button>
                                                    <button className={styles.data}>{student.data}</button>
                                                </button>
                                            </div>
                                            <div className={styles.td}>
                                                {student.situacao === 0 && <InfoIcon className={styles.info} />}
                                            </div>
                                            <div className={styles.td}>
                                                <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                            </div>
                                        </div>
                                        {rowColapse === student?.id && (
                                            <div className={styles.dropdown}>
                                                <MatriculaRowActions
                                                    onDesligamento={() => setOpenDesligamento(true)}
                                                    onInfo={() => {
                                                        setSelectedStudent(student);
                                                        setOpenInfoPessoa(true);
                                                    }}
                                                    onDocumentos={() => setOpenDocumentosExpress(true)}
                                                    onTransferencia={() => setOpenTransferencia(true)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }

            <DesligamentoExpress
                openCloseDrawer={openDesligamento}
                setOpenCloseDrawer={setOpenDesligamento}
            />
            <CadastroPessoasDrawer
                openCloseDrawer={openInfoPessoa}
                setOpenCloseDrawer={setOpenInfoPessoa}
                student={selectedStudent}
            />
            <DocumentosExpressDrawer
                openCloseDrawer={openDocumentosExpress}
                setOpenCloseDrawer={setOpenDocumentosExpress}
            />
            <AnaliseCandidato
                openCloseDrawer={openTransferencia}
                setOpenCloseDrawer={setOpenTransferencia}
            />
        </div>
    )
}

export default ControleMatricula;
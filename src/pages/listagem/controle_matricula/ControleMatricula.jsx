import { useState } from 'react';
import AlertaSensorIcon from './icones/AlertaSensorIcon';
import DocumentIconList from './icones/DocumentIconList';
import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import styles from './ControleMatricula.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import students from './students.json';
import CrossCircleIcon from './icones/CrossCircleIcon';
import CircleAIcon from './icones/CircleAIcon';
import Circle1Icon from './icones/Circle1Icon';
import InfoIcon from './icones/InfoIcon';
import WhatsappIcon from './icones/WhatsappIcon';
import Header from './Header';
import Filtro from './Filtro';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';

const ControleMatricula = () => {
    const [rowColapse, setRowColapse] = useState(0);
    const [selectHead, setSelectHead] = useState(1);

    const handleRowColapse = (id) => {
        setRowColapse(prev => prev === id ? 0 : id);
    }

    return (
        <div className={styles.containerControleMatricula}>
            <Header />
            <Filtro />
            <div className={styles.tableArea}>
                <div className={styles.table}>
                    <div className={styles.header}>
                        <div className={styles.th}>NOME ALUNO</div>
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
                                {rowColapse === student?.id &&
                                    <div className={styles.dropdown}>
                                        <CrossCircleIcon />
                                        <InfoIcon />
                                        <DocumentIconList />
                                        <PriorityArrowsIcon />
                                        <AlertaSensorIcon />
                                        <WhatsappIcon />
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControleMatricula;
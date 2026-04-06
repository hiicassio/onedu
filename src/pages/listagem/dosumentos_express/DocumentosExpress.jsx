import { useState } from 'react';
import TrashIcon from './icones/TrashIcon';
import PenSquareIcon from './icones/PenSquareIcon';
import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import styles from './DocumentosExpress.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import students from './students.json';
import CrossCircleIcon from './icones/CrossCircleIcon';
import PrintIcon from './icones/PrintIcon';
import TelegramIcon from './icones/TelegramIcon';
import InfoIcon from './icones/InfoIcon';
import WhatsappIcon from './icones/WhatsappIcon';
import CircleAIcon from './icones/CircleAIcon';
import Circle1Icon from './icones/Circle1Icon';
import Header from './Header';
import Filtro from './Filtro';

const DocumentosExpress = () => {
    const [selectHead, setSelectHead] = useState(1);
    const [rowColapse, setRowColapse] = useState(0);

    const handleRowColapse = (id) => {
        setRowColapse(prev => prev === id ? 0 : id);
    }

    return (
        <div className={styles.containerDocumentosExpress}>
            <Header />
            <Filtro />
            <div className={styles.tableArea}>
                <div className={styles.table}>
                    <div className={styles.header}>
                        <div className={styles.th}>NOME ALUNO(A)</div>
                        <div className={styles.th}>MATRÍCULA</div>
                        <div className={styles.th}>NIVEL/TURMA</div>
                        <div className={styles.th}>CATEGORIA</div>
                        <div className={styles.th}>
                            DATA/HORA EMISSÃO
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
                            <div className={
                                `
                                ${styles.areaRow} 
                                ${rowColapse === student.id ? styles.areaRowSelected : ''}
                                `
                            } onClick={() => handleRowColapse(student?.id)}>
                                <div key={index} className={styles.row}>
                                    <div className={styles.td}>
                                        <img src={index % 2 === 0 ? user : user2} className={styles.userIcon} />
                                        <span>{student.name}</span>
                                    </div>

                                    <div className={styles.td}>{student.protocolo}</div>
                                    <div className={styles.td}>{student.nivel}</div>
                                    <div className={styles.td}>Requerimentos Gerais</div>
                                    <div className={styles.td}>
                                        Requerimento de Ensino Religioso / Dispensa
                                        <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                    </div>
                                </div>
                                {rowColapse === student?.id &&
                                    <div className={styles.dropdown}>
                                        <div>
                                            <span>Documentação Emitida em:</span>
                                            <span>10/01/2026 as 17:41:20</span>
                                        </div>
                                        <div>
                                            <span>Usuário Responsável</span>
                                            <span>Simone Tabet Filha</span>
                                        </div>
                                        <div>
                                            <TrashIcon />
                                            <PenSquareIcon />
                                            <PrintIcon />
                                            <TelegramIcon />
                                            <WhatsappIcon />
                                        </div>
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

export default DocumentosExpress;
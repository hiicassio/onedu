import { useState } from 'react';
import ArrowDownIcon from './icones/ArrowDownIcon';
import ArrowUpIcon from './icones/ArrowUpIcon';
import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import styles from './IntencaoVaga.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import students from './students.json';
import CrossCircleIcon from './icones/CrossCircleIcon';
import CheckIcon from './icones/CheckIcon';
import TimePastIcon from './icones/TimePastIcon';
import InfoIcon from './icones/InfoIcon';
import WhatsappIcon from './icones/WhatsappIcon';
import Header from './Header';
import Filtro from './Filtro';

const IntencaoVaga = () => {
    const [rowColapse, setRowColapse] = useState(0);

    const handleRowColapse = (id) => {
        setRowColapse(prev => prev === id ? 0 : id);
    }

    return (
        <div className={styles.containerIntencaoVaga}>
            <Header />
            <Filtro />
            <div className={styles.tableArea}>
                <div className={styles.table}>
                    <div className={styles.header}>
                        <div className={styles.th}>POS.</div>
                        <div className={styles.th}>NOME ALUNO</div>
                        <div className={styles.th}>PROTOCOLO</div>
                        <div className={styles.th}>DN(IDADE)</div>
                        <div className={styles.th}>NÍVEL</div>
                        <div className={styles.th}>TURNO</div>
                        <div className={styles.th}>SITUAÇÃO</div>
                        <div className={styles.th}></div>
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
                                        {index % 2 === 0 ?
                                            <ArrowUpIcon style={{ color: "#089A25" }} />
                                            :
                                            <ArrowDownIcon style={{ color: "#FF0000" }} />
                                        }
                                        <img src={index % 2 === 0 ? user : user2} className={styles.userIcon} />
                                        {student?.id}º
                                    </div>

                                    <div className={styles.td}>{student.name}</div>
                                    <div className={styles.td}>{student.protocolo}</div>
                                    <div className={styles.td}>{student.idade}</div>
                                    <div className={styles.td}>{student.nivel}</div>
                                    <div className={styles.td}>{student.turno}</div>
                                    <div className={styles.td}>
                                        <button
                                            style={{
                                                background: student.situacao === 0 ? "#D7E8FF" : "#FFDFCA",
                                                color: student.situacao === 0 ? "#197DFF" : "#F58334"
                                            }}
                                        >{student.situacao === 0 ? "Elegível" : "Em Fila"}</button>
                                    </div>
                                    <div className={styles.td}>
                                        <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                    </div>
                                </div>
                                {rowColapse === student?.id &&
                                    <div className={styles.dropdown}>
                                        <div>
                                            <span>Protocolo Registrado em</span>
                                            <span>10/01/2026 as 17:41:20</span>
                                        </div>
                                        <div>
                                            <span>Score Avaliativo</span>
                                            <span>45</span>
                                        </div>
                                        <div>
                                            <CrossCircleIcon />
                                            <CheckIcon />
                                            <div className={styles.dividir}></div>
                                            <TimePastIcon />
                                            <InfoIcon />
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

export default IntencaoVaga;
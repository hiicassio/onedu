import { useEffect, useState } from 'react';
import styles from './ControleRematricula.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import students from './students.json';
import InfoIcon from './icones/InfoIcon';
import Header from './Header';
import Filtro from './Filtro';
import RadioIcon from './icones/RadioIcon';
import Loading from '../../../components/Loading';

const ControleRematricula = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.containerControleRematricula}>
            {loading ?
                <Loading />
                :
                <>
                    <Header />
                    <Filtro />
                    <div className={styles.tableArea}>
                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.th}>NOME ALUNO</div>
                                <div className={styles.th}>MATRÍCULA</div>
                                <div className={styles.th}>NIVEL/TURMA</div>
                                <div className={styles.th}>TURNO</div>
                                <div className={styles.th}>SITUAÇÃO</div>
                                <div className={styles.th}>INFORMAÇÕES</div>
                                <div className={styles.th}>
                                    <button>Todos</button>
                                </div>
                            </div>

                            <div className={styles.body}>
                                {students?.map((student, index) => (
                                    <div
                                        key={student.id}
                                        className={`
                                            ${styles.areaRow} 
                                            ${student.situacao === 0 ? styles.areaRowAtencao : ''} 
                                        `}
                                    >
                                        <div className={styles.row}>
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
                                                        className={styles.status}
                                                    >
                                                        {student.status}
                                                    </button>
                                                    <button className={styles.data}>
                                                        {student.data}
                                                    </button>
                                                </button>
                                            </div>

                                            <div className={styles.td}>
                                                {student.situacao === 0 && (
                                                    <InfoIcon className={styles.info} />
                                                )}
                                            </div>

                                            <div className={styles.td}>
                                                <RadioIcon className={styles.arrowIcon} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ControleRematricula;
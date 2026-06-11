import { useEffect, useState } from 'react';
import styles from './ControleRematriculaValidacoes.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import students from './students.json';
import InfoIcon from './icones/InfoIcon';
import Header from './Header';
import Filtro from './Filtro';
import RadioIcon from './icones/RadioIcon';
import CheckboxIcon from './icones/CheckboxIcon';
import Loading from '../../../components/Loading';

const ControleRematriculaValidacoes = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.containerControleRematriculaValidacoes}>
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
                                <div className={styles.th}>ORIGEM</div>
                                <div className={styles.th}>DESTINO</div>
                                <div className={styles.th}>CAD.</div>
                                <div className={styles.th}>DOC</div>
                                <div className={styles.th}>CONFIRMAÇÃO</div>
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

                                            <div className={styles.td}>{student.matricula}</div>
                                            <div className={styles.td}>{student.origem}</div>
                                            <div className={styles.td}>{student.destino}</div>
                                            <div className={styles.td}>
                                                <CheckboxIcon className={`
                                                        ${styles.iconeCheck}
                                                        ${student.cad ? styles.iconeCheckOK : ''}
                                                    `} />
                                            </div>
                                            <div className={styles.td}>
                                                <CheckboxIcon className={`
                                                        ${styles.iconeCheck}
                                                        ${student.doc ? styles.iconeCheckOK : ''}
                                                    `} />
                                            </div>
                                            <div className={styles.td}>
                                                <CheckboxIcon className={`
                                                        ${styles.iconeCheck}
                                                        ${student.confirmacao ? styles.iconeCheckOK : ''}
                                                    `} />
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

export default ControleRematriculaValidacoes;
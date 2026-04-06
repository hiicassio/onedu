import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import LoadingIcon from './icones/LoadingIcon';
import styles from './HistoricoEscolar.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import FeatherPrinterIcon from './icones/FeatherPrinterIcon';
import EditIcon from './icones/EditIcon';
import { useState } from 'react';
import alunos from './alunos.json';
import CrossCircleIcon from './icones/CrossCircleIcon';

const HistoricoEscolar = () => {
    const [rowColapse, setRowColapse] = useState(0);

    const handleRowColapse = (id) => {
        setRowColapse(prev => prev === id ? 0 : id);
    }
    return (
        <div className={styles.historicoEscolarContainer}>
            <div className={styles.tableArea}>
                <div className={styles.table}>
                    <div className={styles.header}>
                        <div className={styles.th}>ANO</div>
                        <div className={styles.th}>UNIDADE ESCOLAR</div>
                        <div className={styles.th}>ETAPA</div>
                        <div className={styles.th}>NIVEL</div>
                        <div className={styles.th}>C.H ANUAL</div>
                        <div className={styles.th}>SITUAÇÃO</div>
                        <div className={styles.th}>AÇÕES</div>
                    </div>

                    <div className={styles.body}>
                        {alunos?.map((aluno, index) => (
                            <div key={index}
                                className={
                                    `
                                        ${styles.areaRow} 
                                        ${rowColapse === aluno.id ? styles.areaRowSelected : ''}
                                    `
                                } onClick={() => handleRowColapse(aluno?.id)}>
                                <div className={styles.row}>
                                    <div className={styles.td}>
                                        {aluno.ano}
                                    </div>

                                    <div className={styles.td}>
                                        {aluno.unidade_escolar}
                                    </div>
                                    <div className={styles.td}>
                                        {aluno.etapa}
                                    </div>

                                    <div className={styles.td}>
                                        {aluno.nivel}
                                    </div>

                                    <div className={styles.td}>
                                        {aluno.carga_horaria_anual} h/a
                                    </div>

                                    <div className={styles.td}>
                                        <span 
                                        className={`
                                                ${styles.situacao}
                                                ${aluno.situacao === 1 ? styles.aprovado : styles.cursando}
                                            `}
                                        >{aluno.situacao === 1 ? 'Aprovado' : 'Cursando'}</span>
                                    </div>

                                    <div className={styles.td}>
                                        <div className={styles.acoes}>
                                            <div className={styles.nivel}>
                                                <span
                                                    style={{
                                                        width: `${aluno?.progresso}%`,
                                                        background: aluno.progresso === 100 ? '#197DFF' : aluno.progresso >= 20 ? '#FFBB00' : '#FF0000'
                                                    }}
                                                />
                                            </div>
                                            {aluno.loading ? <LoadingIcon className={styles.loadingIcon} /> : <LoadingIcon style={{ color: 'transparent' }} className={styles.loadingIcon} />}
                                            <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.dividir} />
                                {rowColapse === aluno?.id &&
                                    <div className={styles.dropdown}>
                                        <CrossCircleIcon />
                                        <EditIcon />
                                        <FeatherPrinterIcon />
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoricoEscolar;
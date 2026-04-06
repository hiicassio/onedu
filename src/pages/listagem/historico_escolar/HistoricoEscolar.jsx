import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import LoadingIcon from './icones/LoadingIcon';
import styles from './HistoricoEscolar.module.scss';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import CircleAIcon from './icones/CircleAIcon';
import Circle1Icon from './icones/Circle1Icon';
import { useEffect, useState } from 'react';
import alunos from './alunos.json';
import Filtro from './Filtro';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';

const HistoricoEscolar = () => {
    const [selectHead, setSelectHead] = useState(1);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.historicoEscolarContainer}>
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
                                <div className={styles.th}>Nº REGISTRO</div>
                                <div className={styles.th}>MATRICULA ATIVA</div>
                                <div className={styles.th}>% CONCLUSÃO</div>
                                <div className={styles.th}>ULTIMA SINCRONIZAÇÃO</div>
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
                                {alunos?.map((aluno, index) => (
                                    <div onClick={() => navigation('/gestao-matricula/historico-escolar-lancamentos')} className={styles.row} key={index}>
                                        <div className={styles.td}>
                                            <img src={index % 2 === 0 ? user : user2} className={styles.userIcon} />
                                            {aluno.nome}
                                        </div>

                                        <div className={styles.td}>{aluno.registro}</div>
                                        <div className={styles.td}>{aluno.matriculaAtiva ? "Sim" : "Não"}</div>

                                        <div className={styles.td}>
                                            <div className={styles.nivel}>
                                                <span
                                                    style={{
                                                        width: `${aluno?.progresso}%`,
                                                        background: aluno.progresso === 100 ? '#197DFF' : aluno.progresso >= 20 ? '#FFBB00' : '#FF0000'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.td}>
                                            {aluno.ultimaSync}
                                            {aluno.loading && <LoadingIcon className={styles.loadingIcon} />}
                                        </div>

                                        <div className={styles.td}>
                                            <ArrowAngleBottomIcon className={styles.arrowIcon} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default HistoricoEscolar;
const students = [
    {
        id: 1,
        img: user2,
        name: "Ana Maria Carvalho",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 0
    },
    {
        id: 2,
        img: user,
        name: "Amanda Soares Tonardo Filha",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 3,
        img: user2,
        name: "Amanda Evellyn Silva Cardoso",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 4,
        img: user,
        name: "Bruna da Silva Pereira Souza",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 5,
        img: user2,
        name: "Bruna Sampaio de Oliveira",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 0,
        alert: true
    },
    {
        id: 6,
        img: user,
        name: "Carlos Henrique Mattours Heink",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 7,
        img: user2,
        name: "Daniella Kemp Monterrey",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 8,
        img: user,
        name: "Daniela Mercury Silva Santos",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 9,
        img: user2,
        name: "Daiane Coachello Silva Noak",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        date: "10/03/2024",
        situacao: 1,
        inactive: true
    },
    {
        id: 10,
        img: user,
        name: "Danilo de Carvalho Pinheiro",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 11,
        img: user2,
        name: "Danilo Monari Rompatto",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 12,
        img: user,
        name: "Eliane Macedo Silva Pereira",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1,
        inactive: true
    },
    {
        id: 13,
        img: user2,
        name: "Ana Maria Carvalho",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 14,
        img: user,
        name: "Ana Maria Carvalho",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 15,
        img: user,
        name: "Amanda Soares Tonardo Filha",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 16,
        img: user2,
        name: "Amanda Evellyn Silva Cardoso",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 17,
        img: user,
        name: "Bruna da Silva Pereira Souza",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 18,
        img: user2,
        name: "Bruna Sampaio de Oliveira",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 0,
        alert: true
    },
    {
        id: 19,
        img: user,
        name: "Carlos Henrique Mattours Heink",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 20,
        img: user2,
        name: "Daniella Kemp Monterrey",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 21,
        img: user,
        name: "Daniela Mercury Silva Santos",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 22,
        img: user2,
        name: "Daiane Coachello Silva Noak",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        date: "10/03/2024",
        situacao: 1,
        inactive: true
    },
    {
        id: 23,
        img: user,
        name: "Danilo de Carvalho Pinheiro",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 24,
        img: user2,
        name: "Danilo Monari Rompatto",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 25,
        img: user,
        name: "Eliane Macedo Silva Pereira",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1,
        inactive: true
    },
    {
        id: 26,
        img: user2,
        name: "Ana Maria Carvalho",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    },
    {
        id: 27,
        img: user,
        name: "Ana Maria Carvalho",
        protocolo: "2026001442",
        idade: '21/10/2014 ( 09 Anos e 2 dias)',
        nivel: "7º ANO",
        turno: "Matutino",
        situacao: 1
    }
];
import styles from './ControleMatriculaAberta.module.scss';

import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import AlertaSensorIcon from './icones/AlertaSensorIcon';
import CircleAIcon from './icones/CircleAIcon';
import Circle1Icon from './icones/Circle1Icon';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import WhatsappIcon from './icones/WhatsappIcon';
import CrossCircleIcon from './icones/CrossCircleIcon';
import CheckIcon from './icones/CheckIcon';
import ArrowUpIcon from './icones/ArrowUpIcon';
import ArrowDownIcon from './icones/ArrowDownIcon';
import TimePastIcon from './icones/TimePastIcon';
import InfoIcon from './icones/InfoIcon';
import { useEffect, useState } from 'react';
import GestaoMatriculasHeader from './GestaoMatriculasHeader';
import MatriculasSearchAndFilter from './MatriculasSearchAndFilter';
import LoadingComponent from '../../../components/LoadingComponent';

const ControleMatriculaAberta = () => {
    const [selectHead, setSelectHead] = useState(1);
    const [rowColapse, setRowColapse] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleRowColapse = (id) => {
        setRowColapse(prev => prev === id ? 0 : id);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingComponent />
    }

    return (
        <div className={styles.container}>
            <GestaoMatriculasHeader />
            <MatriculasSearchAndFilter />

            <div className={styles.enrollmentTable}>
                <div className={styles.head}>
                    <div className={styles.row}>
                        <div className={styles.headerCell}>
                            <span>POS.</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>Nome do Aluno(a)</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>PROTOCOLO</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>DN(IDADE)</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>NÍVEL</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>TURNO</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>Situação</span>
                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    {students?.map((item, index) => (
                        <div
                            onClick={() => handleRowColapse(item?.id)}
                            key={item?.id}
                            style={{ backgroundColor: index % 2 === 0 ? '#EEEEEE' : 'transparent' }}
                            className={`
                                ${styles.row}
                                ${rowColapse === item?.id ? styles.rowColapse : ''}
                                ${item?.situacao === 0 ? styles.elegivel : ''}
                            `}
                        >

                            <div className={styles.mainRow}>
                                <div className={styles.cell}>
                                    <div className={styles.studentAvatarArea}>
                                        {index % 2 === 0 ?
                                            <ArrowUpIcon style={{color: "#089A25"}}/>
                                            :
                                            <ArrowDownIcon style={{color: "#FF0000"}}/>
                                        }
                                        <img className={styles.avatar} src={item?.img} />
                                        <span className={styles.posicao}>{item?.id}º</span>
                                    </div>
                                </div>

                                <div className={styles.cell}>
                                    <span className={styles.studentName}>{item?.name}</span>
                                </div>

                                <div className={styles.cell}>
                                    <span className={styles.matricula}>{item?.protocolo}</span>
                                </div>

                                <div className={styles.cell}>
                                    <span>{item?.idade}</span>
                                </div>

                                <div className={styles.cell}>
                                    <span>{item?.nivel}</span>
                                </div>

                                <div className={styles.cell}>
                                    <span>{item?.turno}</span>
                                </div>

                                <div className={styles.cell}>
                                    <button className={`
                                        ${styles.shiftButton}
                                        ${item?.situacao === 1 ? styles.em_fila : ''}
                                    `}>
                                        <span className={styles.shiftDate}>
                                            {item?.situacao === 1 ? 'Em Fila' : 'Elegível'}
                                        </span>
                                    </button>
                                </div>

                                <div className={`${styles.cell} ${styles.cellColapse}`}>
                                    <ArrowAngleBottomIcon className={styles.arrowColapse} />
                                </div>

                            </div>

                            <div className={styles.actionsRow}>
                                <div
                                    className={styles.actions}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <CrossCircleIcon />
                                    <CheckIcon />
                                    <div className={styles.dividir}></div>
                                    <TimePastIcon />
                                    <InfoIcon />
                                    <WhatsappIcon />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ControleMatriculaAberta;
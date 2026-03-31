import styles from './ControleMatriculaSimples.module.scss';

import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import AlertaSensorIcon from './icones/AlertaSensorIcon';
import CircleAIcon from './icones/CircleAIcon';
import Circle1Icon from './icones/Circle1Icon';
import user from './icones/user.png';
import user2 from './icones/user2.png';
import PriorityArrowsIcon from './icones/PriorityArrowsIcon';
import WhatsappIcon from './icones/WhatsappIcon';
import CrossCircleIcon from './icones/CrossCircleIcon';
import DocumentIconList from './icones/DocumentIconList';
import InfoIcon from './icones/InfoIcon';
import { useState } from 'react';
import GestaoMatriculasHeader from './GestaoMatriculasHeader';
import MatriculasSearchAndFilter from './MatriculasSearchAndFilter';

const students = [
    {
        id: 1,
        img: user2,
        name: "Ana Maria Carvalho",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 2,
        img: user,
        name: "Amanda Soares Tonardo Filha",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 3,
        img: user2,
        name: "Amanda Evellyn Silva Cardoso",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 4,
        img: user,
        name: "Bruna da Silva Pereira Souza",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 5,
        img: user2,
        name: "Bruna Sampaio de Oliveira",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CH",
        date: "10/01/2024",
        situacao: 0,
        alert: true
    },
    {
        id: 6,
        img: user,
        name: "Carlos Henrique Mattours Heink",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 7,
        img: user2,
        name: "Daniella Kemp Monterrey",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 8,
        img: user,
        name: "Daniela Mercury Silva Santos",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 9,
        img: user2,
        name: "Daiane Coachello Silva Noak",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "TR",
        date: "10/03/2024",
        situacao: 1,
        inactive: true
    },
    {
        id: 10,
        img: user,
        name: "Danilo de Carvalho Pinheiro",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CH",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 11,
        img: user2,
        name: "Danilo Monari Rompatto",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 12,
        img: user,
        name: "Eliane Macedo Silva Pereira",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "MC",
        date: "10/01/2024",
        situacao: 1,
        inactive: true
    },
    {
        id: 13,
        img: user2,
        name: "Ana Maria Carvalho",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 14,
        img: user,
        name: "Ana Maria Carvalho",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 15,
        img: user,
        name: "Amanda Soares Tonardo Filha",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 16,
        img: user2,
        name: "Amanda Evellyn Silva Cardoso",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 17,
        img: user,
        name: "Bruna da Silva Pereira Souza",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 18,
        img: user2,
        name: "Bruna Sampaio de Oliveira",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CH",
        date: "10/01/2024",
        situacao: 0,
        alert: true
    },
    {
        id: 19,
        img: user,
        name: "Carlos Henrique Mattours Heink",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 20,
        img: user2,
        name: "Daniella Kemp Monterrey",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 21,
        img: user,
        name: "Daniela Mercury Silva Santos",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 22,
        img: user2,
        name: "Daiane Coachello Silva Noak",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "TR",
        date: "10/03/2024",
        situacao: 1,
        inactive: true
    },
    {
        id: 23,
        img: user,
        name: "Danilo de Carvalho Pinheiro",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CH",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 24,
        img: user2,
        name: "Danilo Monari Rompatto",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 25,
        img: user,
        name: "Eliane Macedo Silva Pereira",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "MC",
        date: "10/01/2024",
        situacao: 1,
        inactive: true
    },
    {
        id: 26,
        img: user2,
        name: "Ana Maria Carvalho",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    },
    {
        id: 27,
        img: user,
        name: "Ana Maria Carvalho",
        matricula: "520004",
        turma: '2º ANO "B"',
        turno: "Matutino",
        status: "CR",
        date: "10/01/2024",
        situacao: 1
    }
];

const ControleMatriculaSimples = () => {
    const [selectHead, setSelectHead] = useState(1);
    const [rowColapse, setRowColapse] = useState(0);

    const handleRowColapse = (id) => {
        if (id === rowColapse) {
            return setRowColapse(0);
        }
        setRowColapse(id);
    }
    return (
        <div className={styles.container}>
            <GestaoMatriculasHeader />
            <MatriculasSearchAndFilter />
            <div className={styles.enrollmentTable}>
                <div className={styles.head}>
                    <div className={styles.row}>

                        <div className={styles.headerCell}>
                            <span>Nome do Aluno(a)</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>Matrícula</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>Nível/Turma</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>Turno</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>Status</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
                            <span>Situação</span>
                        </div>
                        <div className={styles.dividir}></div>

                        <div className={styles.headerCell}>
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
                                    ${item?.situacao === 0 ? styles.alert : ''}
                                 `}
                        >

                            {/* Linha principal */}
                            <div className={styles.mainRow}>

                                <div className={styles.student}>
                                    <img
                                        className={styles.avatar}
                                        src={item?.img}
                                        alt=""
                                    />
                                    <span className={styles.index}>{item?.id}</span>
                                    <span className={styles.studentName}>{item?.name}</span>
                                </div>

                                <div className={styles.cell}>
                                    <span className={styles.matricula}>{item?.matricula}</span>
                                </div>

                                <div className={styles.cell}>
                                    <span>{item?.turma}</span>
                                </div>

                                <div className={styles.cell}>
                                    <span>{item?.turno}</span>
                                </div>
                                <div className={styles.cell}>
                                    <button className={`
                                                    ${styles.shiftButton}
                                                    ${styles[item?.status]}
                                                `}>
                                        <span className={styles.shiftCode}>{item?.status}</span>
                                        <span className={styles.shiftDate}>{item?.date}</span>
                                    </button>
                                </div>
                                <div className={styles.cell}>
                                    <InfoIcon className={styles.iconSituacao} />
                                </div>


                                <div className={`${styles.cell} ${styles.cellColapse}`}>
                                    <ArrowAngleBottomIcon
                                        className={styles.arrowColapse}
                                    />
                                </div>

                            </div>

                            {/* Linha de ações */}
                            <div className={styles.actionsRow}>
                                <div className={styles.actions}>
                                    <CrossCircleIcon />
                                    <InfoIcon />
                                    <DocumentIconList />
                                    <PriorityArrowsIcon />
                                    <AlertaSensorIcon />
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

export default ControleMatriculaSimples;
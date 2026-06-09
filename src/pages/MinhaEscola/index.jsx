import { useState } from 'react';
import StudentHeader from '../listagem/central_estudante/components/StudentHeader';
import EnrollmentStepper from '../../components/MinhaEscola/Forms/EnrollmentStepper';
import PhotoCaptureDrawer from '../../components/MinhaEscola/PhotoCaptureDrawer';
import aluno from '../listagem/historico_escolar_lancamentos/icones/aluno.png';
import styles from './MinhaEscola.module.scss';

const INITIAL_STUDENT = {
    id: '424001004',
    matricula: '2024000458',
    name: 'Diego da Silva Cardoso Oliveira JR.',
    turma: '3º ANO A',
    nivel: 'Ensino Fundamental - Anos Iniciais',
    turno: 'Matutino',
    responsavel: 'Sonia Francisca Cardoso',
    contato: '(11) 99512-3456',
    dataNasc: '10/05/2018',
    status: 'Ativo',
    unidade: 'E.M Geraldo Resende Filho',
    avatar: aluno,
};

const MinhaEscola = () => {
    const [student, setStudent] = useState(INITIAL_STUDENT);
    const [openPhotoDrawer, setOpenPhotoDrawer] = useState(false);

    const handlePhotoCapture = (photoUrl) => {
        if (!photoUrl) return;
        setStudent((prev) => ({ ...prev, avatar: photoUrl }));
    };

    return (
        <div className={styles.container}>
            <header className={styles['page-header-standard']}>
                <h1>Matrícula do Aluno</h1>
                <p>
                    Gerencie os dados, endereço, documentação e histórico escolar do aluno de forma centralizada.
                </p>
            </header>

            <StudentHeader
                student={student}
                enablePhotoEdit
                onPhotoClick={() => setOpenPhotoDrawer(true)}
            />
            <EnrollmentStepper />
            <PhotoCaptureDrawer
                openCloseDrawer={openPhotoDrawer}
                setOpenCloseDrawer={setOpenPhotoDrawer}
                onPhotoCapture={handlePhotoCapture}
            />
        </div>
    );
};

export default MinhaEscola;

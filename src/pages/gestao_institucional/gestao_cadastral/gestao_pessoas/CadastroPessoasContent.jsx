import { useEffect, useMemo, useState } from 'react';
import StudentHeader from '../../../listagem/central_estudante/components/StudentHeader';
import EnrollmentStepper from '../../../../components/MinhaEscola/Forms/EnrollmentStepper';
import PhotoCaptureDrawer from '../../../../components/MinhaEscola/PhotoCaptureDrawer';
import aluno from '../../../listagem/historico_escolar_lancamentos/icones/aluno.png';
import {
    findPessoaById,
    findPessoaForMatriculaStudent,
} from './data/pessoasMock';
import styles from './CadastroPessoasContent.module.scss';

export const mapPessoaToStudent = (pessoa) => ({
    id: pessoa.id,
    matricula: pessoa.matricula ?? pessoa.id,
    name: pessoa.name,
    turma: pessoa.turma ?? '—',
    nivel: pessoa.nivel ?? '—',
    turno: pessoa.turno ?? '—',
    responsavel: pessoa.responsavel ?? '—',
    contato: pessoa.contato ?? '—',
    dataNasc: pessoa.dataNasc,
    status: pessoa.status ?? 'Ativo',
    unidade: pessoa.unidade ?? 'E.M Geraldo Resende Filho',
    avatar: pessoa.avatar ?? aluno,
});

const CadastroPessoasContent = ({ pessoaId, matriculaStudent }) => {
    const pessoa = useMemo(() => {
        if (pessoaId) return findPessoaById(pessoaId);
        if (matriculaStudent) return findPessoaForMatriculaStudent(matriculaStudent);
        return null;
    }, [pessoaId, matriculaStudent]);

    const [student, setStudent] = useState(null);
    const [openPhotoDrawer, setOpenPhotoDrawer] = useState(false);

    useEffect(() => {
        if (pessoa) {
            setStudent(mapPessoaToStudent(pessoa));
        }
    }, [pessoa]);

    const handlePhotoCapture = (photoUrl) => {
        if (!photoUrl) return;
        setStudent((prev) => ({ ...prev, avatar: photoUrl }));
    };

    if (!pessoa || !student) {
        return <p className={styles.emptyState}>Pessoa não encontrada.</p>;
    }

    return (
        <div className={styles.content}>
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

export default CadastroPessoasContent;

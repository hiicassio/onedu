import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudentHeader from '../../../listagem/central_estudante/components/StudentHeader';
import EnrollmentStepper from '../../../../components/MinhaEscola/Forms/EnrollmentStepper';
import PhotoCaptureDrawer from '../../../../components/MinhaEscola/PhotoCaptureDrawer';
import aluno from '../../../listagem/historico_escolar_lancamentos/icones/aluno.png';
import { findPessoaById } from './data/pessoasMock';
import styles from './CadastroPessoas.module.scss';

const mapPessoaToStudent = (pessoa) => ({
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

const CadastroPessoas = () => {
    const { pessoaId } = useParams();
    const navigate = useNavigate();
    const pessoa = useMemo(() => findPessoaById(pessoaId), [pessoaId]);

    const [student, setStudent] = useState(() =>
        pessoa ? mapPessoaToStudent(pessoa) : mapPessoaToStudent(findPessoaById('520004'))
    );
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

    if (!pessoa) {
        return (
            <div className={styles.container}>
                <div className={styles.contentCard}>
                    <p>Pessoa não encontrada.</p>
                    <button
                        type="button"
                        className={styles.backLink}
                        onClick={() => navigate('/gestao-institucional/gestao-cadastral/gestao-pessoas')}
                    >
                        Voltar para a lista
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.pageHeaderStandard}>
                <h1>Cadastro de Pessoas</h1>
                <p>
                    Gerencie os dados, endereço, documentação e histórico escolar da pessoa de forma centralizada.
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

export default CadastroPessoas;

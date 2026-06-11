import styles from './StudentHeader.module.scss';
import { STUDENT, ATTENDANCE_MONTHLY } from '../data/mockData';
import user from '../../../analise_candidato/img/user.png';

const avgAttendance = Math.round(
    ATTENDANCE_MONTHLY.reduce((s, m) => s + (m.presencas / m.aulas) * 100, 0) / ATTENDANCE_MONTHLY.length
);

const PrintIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6v-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const ShareIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="6"  cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2"/>
    </svg>
);
const SearchIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
const CameraIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const StudentHeader = ({ student = STUDENT, enablePhotoEdit = false, onPhotoClick }) => (
    <div className={styles.header}>
        <div className={styles.profile}>
            <div className={styles.avatarWrapper}>
                <img className={styles.avatar} src={student.avatar || user} alt="Foto do aluno" />

                {enablePhotoEdit && (
                    <button
                        type="button"
                        className={styles.cameraButton}
                        onClick={(event) => {
                            event.stopPropagation();
                            onPhotoClick?.();
                        }}
                        title="Alterar foto do aluno"
                    >
                        <CameraIcon />
                    </button>
                )}
            </div>

            <div className={styles.info}>
                <div className={styles.nameRow}>
                    <span className={styles.name}>{student.name}</span>
                    <span className={`${styles.badge} ${styles.badgeActive}`}>{student.status}</span>
                </div>
                <span className={styles.sub}>{student.id} · {student.turma} · {student.nivel} · {student.turno}</span>
                <span className={styles.sub}>{student.unidade}</span>
            </div>
        </div>

        <div className={styles.stats}>
            <div className={styles.stat}>
                <span className={styles.statValue}>{avgAttendance}%</span>
                <span className={styles.statLabel}>Frequência</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
                <span className={styles.statValue}>7,8</span>
                <span className={styles.statLabel}>Média Geral</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
                <span className={styles.statValue}>5</span>
                <span className={styles.statLabel}>Ocorrências</span>
            </div>
        </div>

        <div className={styles.actions}>
            <div className={styles.search}>
                <SearchIcon />
                <input type="text" placeholder="Buscar aluno..." />
            </div>
            <button className={styles.actionBtn} title="Imprimir"><PrintIcon /></button>
            <button className={styles.actionBtn} title="Compartilhar"><ShareIcon /></button>
        </div>
    </div>
);

export default StudentHeader;

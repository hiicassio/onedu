import inepIcon from '../../assets/icones/inep.svg';
import CloseIcon from '../../assets/icones/CloseIcon.jsx';
import CalendarIcon from '../icones/CalendarIcon';
import FeatherSearchIcon from '../../pages/listagem/historico_escolar_lancamentos/icones/FeatherSearchIcon';
import WhatsappIcon from '../../pages/listagem/historico_escolar_lancamentos/icones/WhatsappIcon';
import defaultAvatar from '../../pages/listagem/historico_escolar_lancamentos/icones/aluno.png';
import styles from './StudentIdentificationCard.module.scss';

const ChevronDownIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CameraIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden>
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

const InfoField = ({ label, value, className = '', children, trailing }) => (
    <div className={`${styles.field} ${className}`.trim()}>
        {children}
        <div className={styles.inputGroup}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value || '—'}</span>
        </div>
        {trailing}
    </div>
);

const StudentIdentificationCard = ({
    student,
    enablePhotoEdit = false,
    onPhotoClick,
    title = 'Identificação do Aluno',
}) => {
    const avatar = student?.avatar || defaultAvatar;
    const programas = student?.programasTags ?? [];

    return (
        <article className={styles.card}>
            <header className={styles.cardHeader}>
                <span className={styles.cardTitle}>{title}</span>
            </header>

            <div className={styles.cardBody}>
                <div className={styles.photoContainer}>
                    <img className={styles.photo} src={avatar} alt={`Foto de ${student?.name ?? 'aluno'}`} />
                    {enablePhotoEdit && (
                        <button
                            type="button"
                            className={styles.photoButton}
                            onClick={onPhotoClick}
                            title="Alterar foto do aluno"
                        >
                            <CameraIcon />
                        </button>
                    )}
                </div>

                <div className={styles.fieldsContainer}>
                    <div className={`${styles.row} ${styles.rowPrimary}`}>
                        <InfoField label="Cód. INEP" value={student?.codInep} className={styles.fieldInep}>
                            <div className={styles.iconButton}>
                                <img src={inepIcon} alt="" className={styles.inepIcon} />
                            </div>
                        </InfoField>

                        <InfoField label="Nome" value={student?.name} className={styles.fieldName} />

                        <span className={`${styles.statusBadge} ${styles[`status${student?.statusTone ?? 'Ok'}`]}`}>
                            {student?.statusLabel ?? student?.status ?? 'Em dia'}
                        </span>
                    </div>

                    <div className={styles.row}>
                        <InfoField label="DN" value={student?.dataNasc}>
                            <div className={styles.iconButton}>
                                <CalendarIcon />
                            </div>
                        </InfoField>

                        <InfoField label="CPF" value={student?.cpf} />

                        <div className={`${styles.field} ${styles.fieldRg}`}>
                            <div className={styles.rgGroup}>
                                <div className={styles.inputGroup}>
                                    <span className={styles.label}>Nº RG</span>
                                    <span className={styles.value}>{student?.rg || '—'}</span>
                                </div>
                                <div className={styles.orgaoBox}>
                                    <span className={styles.label}>Órgão</span>
                                    <span className={styles.value}>{student?.orgao || '—'}</span>
                                </div>
                            </div>
                        </div>

                        <InfoField label="Sexo" value={student?.sexo} />
                    </div>

                    <div className={`${styles.row} ${styles.rowPrograms}`}>
                        <InfoField
                            label="Programas Sociais"
                            value={student?.programasSociais}
                            trailing={
                                <span className={styles.chevron}>
                                    <ChevronDownIcon />
                                </span>
                            }
                        />

                        <div className={`${styles.field} ${styles.fieldTags}`}>
                            <div className={styles.tagsGroup}>
                                {programas.map((tag) => (
                                    <span key={tag} className={styles.tag}>
                                        {tag}
                                        <CloseIcon />
                                    </span>
                                ))}
                            </div>
                            <button type="button" className={styles.iconButton} title="Buscar programas">
                                <FeatherSearchIcon />
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.row} ${styles.rowGuardian}`}>
                        <InfoField label="Responsável" value={student?.responsavel} className={styles.fieldGuardian} />

                        <InfoField label="CPF" value={student?.responsavelCpf ?? student?.cpf} />

                        <InfoField
                            label="Whatsapp"
                            value={student?.whatsapp ?? student?.contato}
                            trailing={
                                <button type="button" className={styles.iconButton} title="Abrir WhatsApp">
                                    <WhatsappIcon />
                                </button>
                            }
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default StudentIdentificationCard;

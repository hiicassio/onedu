import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findInstitucionalLabel, findInstitucionalPage } from '../data/menuItems';
import styles from '../GestaoInstitucional.module.scss';

const SecaoInstitucional = () => {
    const { section, page } = useParams();
    const navigate = useNavigate();

    const pageInfo = useMemo(
        () => findInstitucionalPage(section, page),
        [section, page]
    );

    const title = useMemo(
        () => findInstitucionalLabel(section, page),
        [section, page]
    );

    return (
        <div className={styles.contentCard}>
            <div className={styles.contentHeader}>
                <h2>{title}</h2>
                <button
                    type="button"
                    className={styles.backLink}
                    onClick={() => navigate('/gestao-institucional')}
                >
                    Voltar ao início
                </button>
            </div>

            <p className={styles.pageDescription}>
                {pageInfo?.description ?? 'Consulta e gestão de informações institucionais.'}
                {' '}Esta área será conectada aos cadastros e fluxos definitivos na próxima etapa.
            </p>
        </div>
    );
};

export default SecaoInstitucional;

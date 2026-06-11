import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findAplicacaoLabel } from '../data/menuItems';
import styles from '../../gestao_institucional/GestaoInstitucional.module.scss';

const SecaoAplicacoes = () => {
    const { page } = useParams();
    const navigate = useNavigate();

    const title = useMemo(() => findAplicacaoLabel(page), [page]);

    return (
        <div className={styles.contentCard}>
            <div className={styles.contentHeader}>
                <h2>{title}</h2>
                <button
                    type="button"
                    className={styles.backLink}
                    onClick={() => navigate('/controle-aplicacoes')}
                >
                    Voltar ao início
                </button>
            </div>

            <p className={styles.pageDescription}>
                Consulta e gestão de informações do módulo {title.toLowerCase()}.
                {' '}Esta área será conectada aos fluxos definitivos na próxima etapa.
            </p>
        </div>
    );
};

export default SecaoAplicacoes;

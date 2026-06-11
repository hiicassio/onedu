import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PROTOCOLO_DIGITAL_BASE_ROUTE } from '../data/protocoloDigitalData';
import { findProtocoloLabel } from '../data/menuItems';
import layoutStyles from '../../../../components/ModulePageLayout/ModulePageLayout.module.scss';

const SecaoProtocolo = () => {
    const { page } = useParams();
    const navigate = useNavigate();

    const title = useMemo(() => findProtocoloLabel(page), [page]);

    return (
        <div className={layoutStyles.contentCard}>
            <div className={layoutStyles.contentHeader}>
                <h2>{title}</h2>
                <button
                    type="button"
                    className={layoutStyles.backLink}
                    onClick={() => navigate(PROTOCOLO_DIGITAL_BASE_ROUTE)}
                >
                    Voltar ao início
                </button>
            </div>

            <p className={layoutStyles.pageDescription}>
                Consulta e gestão de informações do módulo {title.toLowerCase()}.
                {' '}Esta área será conectada aos fluxos definitivos na próxima etapa.
            </p>
        </div>
    );
};

export default SecaoProtocolo;

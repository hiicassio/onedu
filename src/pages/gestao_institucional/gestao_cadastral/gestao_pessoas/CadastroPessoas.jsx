import { useNavigate, useParams } from 'react-router-dom';
import ModuleBlueHeader from '../../../../components/ModuleBlueHeader/ModuleBlueHeader';
import ChartUserIcon from '../../../listagem/controle_matricula/icones/ChartUserIcon';
import { findPessoaById } from './data/pessoasMock';
import CadastroPessoasContent from './CadastroPessoasContent';
import styles from './CadastroPessoas.module.scss';

const CADASTRO_DESCRIPTION =
    'Gerencie os dados, endereço, documentação e histórico escolar da pessoa de forma centralizada.';

const CadastroPessoas = () => {
    const { pessoaId } = useParams();
    const navigate = useNavigate();
    const pessoa = findPessoaById(pessoaId);

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
            <ModuleBlueHeader
                title="Cadastro de Pessoas"
                description={CADASTRO_DESCRIPTION}
                headerIcon={ChartUserIcon}
            />
            <CadastroPessoasContent pessoaId={pessoaId} />
        </div>
    );
};

export default CadastroPessoas;

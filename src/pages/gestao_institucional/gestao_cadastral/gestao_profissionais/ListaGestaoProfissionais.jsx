import { useNavigate } from 'react-router-dom';
import CadastralListHeader from '../components/CadastralListHeader';
import CadastralListFiltro from '../components/CadastralListFiltro';
import CadastralListTable from '../components/CadastralListTable';
import tableStyles from '../components/CadastralListTable.module.scss';
import { PROFISSIONAIS_MOCK, PROFISSIONAIS_STATS } from './data/profissionaisMock';
import styles from './ListaGestaoProfissionais.module.scss';

const PROFISSIONAIS_COLUMNS = [
    { key: 'nome', label: 'Nome', width: '3fr', align: 'start' },
    { key: 'id', label: 'ID', width: '0.8fr' },
    { key: 'cpf', label: 'CPF', width: '1.3fr' },
    { key: 'dataNasc', label: 'Data de nascimento', width: '1fr' },
    { key: 'ocupacoes', label: 'Ocupações', width: '1.8fr' },
];

const ListaGestaoProfissionais = () => {
    const navigate = useNavigate();

    const rows = PROFISSIONAIS_MOCK.map((profissional) => ({
        ...profissional,
        nome: (
            <>
                <img src={profissional.avatar} alt="" className={tableStyles.userIcon} />
                <span>{profissional.name}</span>
            </>
        ),
        ocupacoes: (
            <div className={tableStyles.ocupacoes}>
                {profissional.ocupacoes.map((ocupacao) => (
                    <span key={ocupacao} className={tableStyles.ocupacaoTag}>
                        {ocupacao}
                    </span>
                ))}
            </div>
        ),
    }));

    return (
        <div className={styles.page}>
            <CadastralListHeader
                title="Gestão de Profissionais"
                breadcrumb="Gestão Cadastral"
                stats={PROFISSIONAIS_STATS}
            />

            <CadastralListFiltro
                searchPlaceholder="Pesquisar por nome, ID, CPF ou data de nascimento"
                secondaryPlaceholder="Ocupações"
                addLabel="Novo profissional"
            />

            <CadastralListTable
                columns={PROFISSIONAIS_COLUMNS}
                rows={rows}
                showHeaderActions
                onRowClick={(row) =>
                    navigate(
                        `/gestao-institucional/gestao-cadastral/gestao-pessoas/cadastro/${row.id}`
                    )
                }
            />
        </div>
    );
};

export default ListaGestaoProfissionais;

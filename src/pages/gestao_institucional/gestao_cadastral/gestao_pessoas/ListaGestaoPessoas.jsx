import { useNavigate } from 'react-router-dom';
import GraduationCapIcon from '../../../listagem/gestao_matricula/icones/GraduationCapIcon';
import LessonIcon from '../../../listagem/gestao_matricula/icones/LessonIcon';
import DiagramSankeyIcon from '../../../listagem/gestao_matricula/icones/DiagramSankeyIcon';
import CadastralListHeader from '../components/CadastralListHeader';
import CadastralListFiltro from '../components/CadastralListFiltro';
import CadastralListTable from '../components/CadastralListTable';
import tableStyles from '../components/CadastralListTable.module.scss';
import { PESSOAS_MOCK } from './data/pessoasMock';
import styles from './ListaGestaoPessoas.module.scss';

const PERFIL_ICONS = {
    aluno: GraduationCapIcon,
    servidor: LessonIcon,
    estrutura: DiagramSankeyIcon,
};

const PESSOAS_COLUMNS = [
    { key: 'nome', label: 'NOME', width: '3.5fr', align: 'start' },
    { key: 'cpf', label: 'CPF', width: '1.4fr' },
    { key: 'dataNasc', label: 'DATA NASC.', width: '1.1fr' },
    { key: 'genero', label: 'SEXO', width: '1fr' },
    { key: 'perfis', label: 'PERFIS', width: '0.9fr' },
];

const ListaGestaoPessoas = () => {
    const navigate = useNavigate();

    const rows = PESSOAS_MOCK.map((pessoa) => ({
        ...pessoa,
        nome: (
            <>
                <img src={pessoa.avatar} alt="" className={tableStyles.userIcon} />
                <span className={tableStyles.idText}>{pessoa.id}</span>
                <span>{pessoa.name}</span>
            </>
        ),
        perfis: (
            <div className={tableStyles.perfis}>
                {pessoa.perfis.map((perfil) => {
                    const Icon = PERFIL_ICONS[perfil] ?? DiagramSankeyIcon;
                    return <Icon key={perfil} className={tableStyles.perfilIcon} />;
                })}
            </div>
        ),
    }));

    return (
        <div className={styles.page}>
            <CadastralListHeader title="Gestão de Pessoas" breadcrumb="Gestão Cadastral" />

            <CadastralListFiltro
                searchPlaceholder="Pesquisar por Nome, ID, CPF ou Data de Nascimento"
                addLabel="Nova Pessoa"
            />

            <CadastralListTable
                columns={PESSOAS_COLUMNS}
                rows={rows}
                onRowClick={(row) =>
                    navigate(
                        `/gestao-institucional/gestao-cadastral/gestao-pessoas/cadastro/${row.id}`
                    )
                }
            />
        </div>
    );
};

export default ListaGestaoPessoas;

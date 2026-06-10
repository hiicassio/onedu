import user from '../../../../listagem/controle_matricula/icones/user.png';
import user2 from '../../../../listagem/controle_matricula/icones/user2.png';
import aluno from '../../../../listagem/historico_escolar_lancamentos/icones/aluno.png';

export const PROFISSIONAIS_MOCK = [
    {
        id: '520004',
        name: 'Diego da Silva Cardoso Oliveira JR.',
        cpf: '424.786.963-48',
        dataNasc: '15/05/2001',
        ocupacoes: ['Docente', 'Coordenador'],
        avatar: aluno,
        status: 'ativo',
    },
    {
        id: '520008',
        name: 'Fernanda Alves Pereira',
        cpf: '111.222.333-44',
        dataNasc: '09/02/1985',
        ocupacoes: ['Docente'],
        avatar: user,
        status: 'ativo',
    },
    {
        id: '520009',
        name: 'Geraldo Resende Filho',
        cpf: '555.666.777-88',
        dataNasc: '12/07/1978',
        ocupacoes: ['Coordenador', 'Zelador'],
        avatar: user2,
        status: 'ativo',
    },
    {
        id: '520010',
        name: 'Helena Costa Martins',
        cpf: '999.888.777-66',
        dataNasc: '30/11/1990',
        ocupacoes: ['Docente'],
        avatar: user,
        status: 'desligado',
    },
];

export const PROFISSIONAIS_STATS = [
    { label: 'Profissionais totais', value: '563' },
    { label: 'Profissionais ativos', value: '500' },
    { label: 'Profissionais desligados', value: '63' },
];

export const findProfissionalById = (profissionalId) =>
    PROFISSIONAIS_MOCK.find((item) => item.id === profissionalId) ?? null;

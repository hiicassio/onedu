import user from '../../../../listagem/controle_matricula/icones/user.png';
import user2 from '../../../../listagem/controle_matricula/icones/user2.png';
import aluno from '../../../../listagem/historico_escolar_lancamentos/icones/aluno.png';

export const PESSOAS_MOCK = [
    {
        id: '520004',
        name: 'Diego da Silva Cardoso Oliveira JR.',
        cpf: '424.786.963-48',
        dataNasc: '15/05/2001',
        genero: 'Masculino',
        perfis: ['aluno'],
        avatar: aluno,
        matricula: '2024000458',
        turma: '3º ANO A',
        nivel: 'Ensino Fundamental - Anos Iniciais',
        turno: 'Matutino',
        responsavel: 'Sonia Francisca Cardoso',
        contato: '(11) 99512-3456',
        status: 'Ativo',
        unidade: 'E.M Geraldo Resende Filho',
    },
    {
        id: '520005',
        name: 'Amanda Evellyn Silva Cardoso',
        cpf: '458.965.487-45',
        dataNasc: '22/08/2002',
        genero: 'Feminino',
        perfis: ['aluno', 'servidor'],
        avatar: user,
    },
    {
        id: '520006',
        name: 'Bruno Henrique Lima Santos',
        cpf: '321.654.987-12',
        dataNasc: '03/11/2000',
        genero: 'Masculino',
        perfis: ['servidor'],
        avatar: user2,
    },
    {
        id: '520007',
        name: 'Carla Mendes Rocha',
        cpf: '987.654.321-00',
        dataNasc: '18/04/2003',
        genero: 'Feminino',
        perfis: ['aluno'],
        avatar: user,
    },
];

export const findPessoaById = (pessoaId) =>
    PESSOAS_MOCK.find((pessoa) => pessoa.id === pessoaId) ?? null;

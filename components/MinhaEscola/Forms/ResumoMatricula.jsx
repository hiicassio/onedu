import FormSection from '../../form/FormSection';
import SummaryRow from '../../form/SummaryRow';
import formStyles from '../../form/FormComponents.module.scss';
import styles from './PersonalDataForm.module.scss';

const ANO_SERIE_LABELS = {
    '1_ano': '1º Ano',
    '2_ano': '2º Ano',
    '3_ano': '3º Ano',
    '4_ano': '4º Ano',
    '5_ano': '5º Ano',
    '6_ano': '6º Ano',
    '7_ano': '7º Ano',
    '8_ano': '8º Ano',
    '9_ano': '9º Ano',
    '1_serie': '1ª Série',
    '2_serie': '2ª Série',
    '3_serie': '3ª Série',
};

const TURNO_LABELS = {
    matutino: 'Matutino',
    vespertino: 'Vespertino',
    integral: 'Integral',
};

const RESPONSAVEL_LABELS = {
    mae: 'Mãe',
    pai: 'Pai',
    outro: 'Outro',
};

const SIM_NAO_LABELS = {
    sim: 'Sim',
    nao: 'Não',
};

const formatValue = (value, labels) => {
    if (!value) return '';
    return labels?.[value] ?? value;
};

const countDocumentos = (documentacao = {}) =>
    Object.values(documentacao).filter((item) => item === 'anexado').length;

export const exportMatriculaFicha = (formData) => {
    const ficha = {
        titulo: 'Ficha de Matrícula — Minha Escola',
        geradoEm: new Date().toISOString(),
        dados: formData,
    };

    const blob = new Blob([JSON.stringify(ficha, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const nomeAluno = formData.dadosPessoais?.nome_completo?.replace(/\s+/g, '_') || 'aluno';

    link.href = url;
    link.download = `ficha_matricula_${nomeAluno}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

const ResumoMatricula = ({ formData }) => {
    const { dadosPessoais = {}, endereco = {}, filiacao = {}, saude = {}, documentacao = {}, dadosEscolares = {} } = formData;

    return (
        <div className={styles.personalDataForm}>
            <FormSection title="Dados Pessoais:">
                <div className={formStyles.summaryList}>
                    <SummaryRow label="Nome do Aluno" value={dadosPessoais.nome_completo} />
                    <SummaryRow label="CPF" value={dadosPessoais.cpf} />
                    <SummaryRow label="Data de Nascimento" value={dadosPessoais.data_nascimento} />
                    <SummaryRow label="Gênero" value={dadosPessoais.genero} />
                </div>
            </FormSection>

            <FormSection title="Endereço:">
                <div className={formStyles.summaryList}>
                    <SummaryRow label="CEP" value={endereco.cep} />
                    <SummaryRow label="Logradouro" value={endereco.logradouro} />
                    <SummaryRow label="Bairro" value={endereco.bairro} />
                    <SummaryRow label="Cidade / UF" value={[endereco.cidade, endereco.uf].filter(Boolean).join(' / ')} />
                </div>
            </FormSection>

            <FormSection title="Filiação:">
                <div className={formStyles.summaryList}>
                    <SummaryRow label="Nome da Mãe" value={filiacao.nome_mae} />
                    <SummaryRow label="Nome do Pai" value={filiacao.nome_pai} />
                    <SummaryRow
                        label="Responsável Legal"
                        value={formatValue(filiacao.responsavel_legal, RESPONSAVEL_LABELS)}
                    />
                </div>
            </FormSection>

            <FormSection title="Saúde:">
                <div className={formStyles.summaryList}>
                    <SummaryRow
                        label="Possui Deficiência?"
                        value={formatValue(saude.possui_deficiencia, SIM_NAO_LABELS)}
                    />
                    <SummaryRow label="Tipo Sanguíneo" value={saude.tipo_sanguineo} />
                    <SummaryRow label="Alergias" value={saude.alergias} />
                </div>
            </FormSection>

            <FormSection title="Dados Escolares:">
                <div className={formStyles.summaryList}>
                    <SummaryRow label="Código INEP / NIS" value={dadosEscolares.codigo_inep_nis} />
                    <SummaryRow label="Escola de Origem" value={dadosEscolares.escola_origem} />
                    <SummaryRow
                        label="Ano/Série Pretendida"
                        value={formatValue(dadosEscolares.ano_serie, ANO_SERIE_LABELS)}
                    />
                    <SummaryRow
                        label="Turno"
                        value={formatValue(dadosEscolares.turno, TURNO_LABELS)}
                    />
                    <SummaryRow
                        label="Transporte Escolar"
                        value={formatValue(dadosEscolares.necessita_transporte, SIM_NAO_LABELS)}
                    />
                </div>
            </FormSection>

            <FormSection title="Documentação:">
                <div className={formStyles.summaryList}>
                    <SummaryRow
                        label="Documentos anexados"
                        value={`${countDocumentos(documentacao)} de 4 documentos`}
                    />
                </div>
            </FormSection>
        </div>
    );
};

export default ResumoMatricula;

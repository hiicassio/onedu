import FormSection from '../../../components/form/FormSection';
import FormField from '../../../components/form/FormField';
import FormGrid from '../../../components/form/FormGrid';
import styles from '../../../components/form/FormComponents.module.scss';
import ExclamationIcon from '../icones/ExclamationIcon';
import EyeIcon from '../icones/EyeIcon';

const COMPARTILHAMENTO_ITEMS = [
    { key: 'notas',               label: 'Notas e Desempenho' },
    { key: 'avaliacoes_descrts',  label: 'Avaliações Descritivas' },
    { key: 'avaliacoes_diagn',    label: 'Avaliações Diagnósticas' },
    { key: 'frequencia',          label: 'Frequência Escolar' },
    { key: 'conteudos',           label: 'Conteúdos Curriculares' },
    { key: 'historicos',          label: 'Históricos Anteriores' },
    { key: 'ed_especial',         label: 'Dados de Educação Especial' },
];

const COMPATIBILIZACAO_ITEMS = [
    { key: 'notas',     label: 'Notas e Desempenho' },
    { key: 'frequencia', label: 'Frequência Escolar' },
];

const SimNaoSelect = ({ name }) => (
    <label className={`${styles.formField} ${styles.formFieldBg}`}>
        <div className={styles.formFieldGroup}>
            <span>Compartilhar?</span>
            <select name={name} defaultValue="sim">
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        </div>
    </label>
);

const CompatSelect = ({ name }) => (
    <label className={`${styles.formField} ${styles.formFieldBg}`}>
        <div className={styles.formFieldGroup}>
            <span>Compatibilizar?</span>
            <select name={name} defaultValue="sim">
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        </div>
    </label>
);

const StepConfiguracoes = () => (
    <>
        <FormSection title="Resumo de Compartilhamento:">
            {COMPARTILHAMENTO_ITEMS.map(({ key, label }) => (
                <FormGrid key={key}>
                    <FormField
                        label="Item Compartilhado"
                        name={`item_${key}`}
                        defaultValue={label}
                        bg
                        action={<EyeIcon />}
                    />
                    <SimNaoSelect name={`compartilhar_${key}`} />
                </FormGrid>
            ))}
        </FormSection>

        <div className={styles.formDivider} />

        <FormSection title="Compatibilização de Notas e Faltas" icon={<ExclamationIcon />}>
            {COMPATIBILIZACAO_ITEMS.map(({ key, label }) => (
                <FormGrid key={key}>
                    <FormField
                        label="Item"
                        name={`item_compat_${key}`}
                        defaultValue={label}
                        bg
                        action={<EyeIcon />}
                    />
                    <CompatSelect name={`compat_${key}`} />
                </FormGrid>
            ))}
        </FormSection>
    </>
);

export default StepConfiguracoes;

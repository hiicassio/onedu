import FormSection from '../../form/FormSection';
import DocumentListItem from '../../form/DocumentListItem';
import CloudUploadIcon from '../../icones/CloudUploadIcon';
import formStyles from '../../form/FormComponents.module.scss';
import styles from './PersonalDataForm.module.scss';

const DOCUMENTOS = [
    { key: 'certidao_nascimento', label: 'Certidão de Nascimento' },
    { key: 'rg_cpf_aluno', label: 'RG e CPF do Aluno' },
    { key: 'comprovante_residencia', label: 'Comprovante de Residência' },
    { key: 'carteira_vacinacao', label: 'Carteira de Vacinação' },
];

const DocumentacaoForm = ({ formData, handleFormChange }) => {
    const data = formData.documentacao;

    const handleAttach = (key) => {
        handleFormChange('documentacao', {
            [key]: data[key] ? '' : 'anexado',
        });
    };

    return (
        <div className={styles.personalDataForm}>
            <FormSection title="Documentos Obrigatórios:">
                <div className={formStyles.documentList}>
                    {DOCUMENTOS.map((doc) => (
                        <DocumentListItem
                            key={doc.key}
                            label={data[doc.key] ? `${doc.label} (anexado)` : doc.label}
                            action={(
                                <button type="button" onClick={() => handleAttach(doc.key)}>
                                    <CloudUploadIcon />
                                </button>
                            )}
                        />
                    ))}
                </div>
            </FormSection>
        </div>
    );
};

export default DocumentacaoForm;

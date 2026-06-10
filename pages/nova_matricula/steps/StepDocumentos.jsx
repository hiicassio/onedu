import FormSection from '../../../components/form/FormSection';
import DocumentListItem from '../../../components/form/DocumentListItem';
import InfoAlertBox from '../../../components/form/InfoAlertBox';
import CloudUploadIcon from '../../../components/icones/CloudUploadIcon';
import styles from '../../../components/form/FormComponents.module.scss';

const DOCUMENTOS = [
    'RG do Aluno',
    'CPF do Aluno',
    'Comprovante de Residência',
    'Certidão de Nascimento',
    'Carteira de Vacinação',
    'Histórico Escolar',
];

const StepDocumentos = () => (
    <>
        <FormSection title="Documentos Obrigatórios:">
            <InfoAlertBox title="Atenção">
                Envie todos os documentos listados abaixo para concluir a matrícula.
                Formatos aceitos: PDF, JPG ou PNG. Tamanho máximo de 5 MB por arquivo.
            </InfoAlertBox>

            <div className={styles.documentList}>
                {DOCUMENTOS.map((doc) => (
                    <DocumentListItem
                        key={doc}
                        label={doc}
                        action={<CloudUploadIcon />}
                    />
                ))}
            </div>
        </FormSection>
    </>
);

export default StepDocumentos;

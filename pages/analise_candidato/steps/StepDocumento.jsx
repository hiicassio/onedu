import { useRef, useState } from 'react';
import FormSection from '../../../components/form/FormSection';
import FormDocRow from '../../../components/form/FormDocRow';
import GovBrButton from '../../../components/form/GovBrButton';
import styles from '../../../components/form/FormComponents.module.scss';
import localStyles from './StepDocumento.module.scss';
import DocumentIcon from '../icones/DocumentIcon';
import EyeIcon from '../icones/EyeIcon';
import WALogoIcon from '../icones/WALogoIcon';
import FeatherPrinterIcon from '../icones/FeatherPrinterIcon';

const TIPO_DOC_OPTIONS = [
    { value: 'guia_transferencia', label: 'Guia de Transferência' },
    { value: 'historico',          label: 'Histórico Escolar' },
    { value: 'declaracao',         label: 'Declaração de Matrícula' },
    { value: 'ficha',              label: 'Ficha Individual do Aluno' },
];

const ASSINATURA_OPTIONS = [
    { value: 'digital', label: 'Assinatura Digital' },
    { value: 'fisica',  label: 'Assinatura Física' },
    { value: 'sem',     label: 'Sem Assinatura' },
];

const FONT_FAMILIES = ['Open Sans', 'Arial', 'Times New Roman', 'Courier New'];
const FONT_SIZES    = ['12px', '14px', '16px', '18px', '20px', '24px'];

const StepDocumento = () => {
    const editorRef = useRef(null);
    const hiddenRef = useRef(null);
    const [fontSize, setFontSize]     = useState('16px');
    const [fontFamily, setFontFamily] = useState('Open Sans');

    const exec = (cmd, value = null) => {
        editorRef.current?.focus();
        document.execCommand(cmd, false, value);
    };

    const handleFontSize = (e) => {
        const val = e.target.value;
        setFontSize(val);
        exec('fontSize', 4);
        editorRef.current?.querySelectorAll('font[size="4"]').forEach(f => {
            f.removeAttribute('size');
            f.style.fontSize = val;
        });
    };

    const syncHidden = () => {
        if (hiddenRef.current && editorRef.current)
            hiddenRef.current.value = editorRef.current.innerHTML;
    };

    return (
        <>
            <FormSection title="Informações do documento">
                <FormDocRow
                    icon={<DocumentIcon />}
                    label="Tipo de Documento"
                    name="tipo_documento"
                    options={TIPO_DOC_OPTIONS}
                    defaultValue="guia_transferencia"
                >
                    <div className={styles.formDocAction} title="Visualizar"><EyeIcon /></div>
                    <div className={styles.formDocAction} title="Enviar por WhatsApp"><WALogoIcon /></div>
                    <div className={styles.formDocAction} title="Imprimir"><FeatherPrinterIcon /></div>
                </FormDocRow>

                <FormDocRow
                    icon={<DocumentIcon />}
                    label="Modelo de Assinatura"
                    name="modelo_assinatura"
                    options={ASSINATURA_OPTIONS}
                    defaultValue="digital"
                >
                    <GovBrButton />
                </FormDocRow>
            </FormSection>

            <FormSection title="Observação:">
                <div className={localStyles.richEditor}>
                    <div className={localStyles.toolbar}>
                        <select
                            className={localStyles.toolSelect}
                            value={fontFamily}
                            onChange={e => setFontFamily(e.target.value)}
                        >
                            {FONT_FAMILIES.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>

                        <select
                            className={localStyles.toolSelect}
                            value={fontSize}
                            onChange={handleFontSize}
                        >
                            {FONT_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>

                        <div className={localStyles.toolSep} />

                        {[
                            { cmd: 'bold',      label: <strong>B</strong>, title: 'Negrito' },
                            { cmd: 'italic',    label: <em>I</em>,         title: 'Itálico' },
                            { cmd: 'underline', label: <u>U</u>,           title: 'Sublinhado' },
                        ].map(({ cmd, label, title }) => (
                            <button
                                key={cmd}
                                type="button"
                                className={localStyles.toolBtn}
                                title={title}
                                onMouseDown={e => { e.preventDefault(); exec(cmd); }}
                            >
                                {label}
                            </button>
                        ))}

                        <button
                            type="button"
                            className={localStyles.toolBtn}
                            title="Cor do texto"
                            onMouseDown={e => { e.preventDefault(); exec('foreColor', '#1351B4'); }}
                        >
                            <span className={localStyles.colorDot} />
                        </button>

                        <div className={localStyles.toolSep} />

                        {[
                            { cmd: 'justifyLeft',   title: 'Esquerda',    d: 'M1 3h12M1 7h8M1 11h10' },
                            { cmd: 'justifyCenter', title: 'Centralizar', d: 'M1 3h12M3 7h8M2 11h10' },
                            { cmd: 'justifyRight',  title: 'Direita',     d: 'M1 3h12M5 7h8M3 11h10' },
                        ].map(({ cmd, title, d }) => (
                            <button
                                key={cmd}
                                type="button"
                                className={localStyles.toolBtn}
                                title={title}
                                onMouseDown={e => { e.preventDefault(); exec(cmd); }}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                        ))}
                    </div>

                    <div
                        ref={editorRef}
                        contentEditable
                        suppressContentEditableWarning
                        className={localStyles.editorArea}
                        data-placeholder="Digite a observação aqui..."
                        style={{ fontFamily, fontSize }}
                        onInput={syncHidden}
                    />
                </div>

                <input type="hidden" name="observacao" ref={hiddenRef} />
            </FormSection>
        </>
    );
};

export default StepDocumento;

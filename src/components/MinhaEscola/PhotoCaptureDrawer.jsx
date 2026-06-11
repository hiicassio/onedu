import { useRef, useState } from 'react';
import DrawerComponent from '../DrawerComponent';
import styles from './PhotoCaptureDrawer.module.scss';
import qrcodeMock from '../../assets/img/qrcode-mock.png';
import selfieGuidance from '../../assets/img/self.png';

const CameraIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const PhotoCaptureDrawer = ({ openCloseDrawer, setOpenCloseDrawer, onPhotoCapture }) => {
    const [preview, setPreview] = useState(null);
    const [showGuidance, setShowGuidance] = useState(false);
    const fileInputRef = useRef(null);

    const handleClose = () => {
        setOpenCloseDrawer(false);
        setPreview(null);
        setShowGuidance(false);
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreview(url);
        setShowGuidance(false);
    };

    const handleTakePhoto = () => {
        if (preview) {
            onPhotoCapture?.(preview);
            handleClose();
            return;
        }

        if (!showGuidance) {
            setShowGuidance(true);
            return;
        }

        setPreview(selfieGuidance);
        setShowGuidance(false);
    };

    const handleConfirmPhoto = () => {
        if (!preview) {
            alert('Capture ou carregue uma foto antes de confirmar.');
            return;
        }

        onPhotoCapture?.(preview);
        handleClose();
    };

    const btnsFooterModal = [
        {
            id: 1,
            descricao: 'Cancelar',
            class: 'primary',
            func: handleClose,
        },
        {
            id: 2,
            descricao: 'Confirmar Foto',
            class: 'secondary',
            func: handleConfirmPhoto,
        },
    ];

    return (
        <DrawerComponent
            bgColor="#fff"
            openCloseDrawer={openCloseDrawer}
            setOpenCloseDrawer={setOpenCloseDrawer}
            btnsFooterModal={btnsFooterModal}
            titulo="Captura de Foto"
        >
            <div className={styles.photoCapture}>
                <div className={styles.layout}>
                    <section className={styles.mobileSection}>
                        <span className={styles.sectionTitle}>Capturar do Celular</span>

                        <div className={styles.qrContainer}>
                            <img
                                className={styles.qrImage}
                                src={qrcodeMock}
                                alt="QR Code para captura de foto no celular"
                            />
                        </div>

                        <p className={styles.qrInstruction}>
                            Aponte a câmera para o QR Code abaixo para tirar a foto do aluno usando seu celular.
                        </p>
                    </section>

                    <section className={styles.desktopSection}>
                        <span className={styles.sectionTitle}>Usar câmera do computador</span>

                        <div className={styles.cameraFeed}>
                            {preview ? (
                                <img className={styles.preview} src={preview} alt="Pré-visualização da foto" />
                            ) : showGuidance ? (
                                <img
                                    className={styles.guidanceImage}
                                    src={selfieGuidance}
                                    alt="Guia de posicionamento para selfie"
                                />
                            ) : (
                                <div className={styles.placeholder}>
                                    <CameraIcon />
                                    <span>Feed da câmera — posicione o aluno no enquadramento</span>
                                </div>
                            )}
                        </div>

                        <div className={styles.actions}>
                            <button type="button" className={styles.takePhotoBtn} onClick={handleTakePhoto}>
                                {showGuidance && !preview ? 'Capturar Foto' : 'Tirar Foto'}
                            </button>

                            <input
                                ref={fileInputRef}
                                className={styles.hiddenInput}
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />

                            <button
                                type="button"
                                className={styles.uploadBtn}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Carregar Arquivo
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </DrawerComponent>
    );
};

export default PhotoCaptureDrawer;

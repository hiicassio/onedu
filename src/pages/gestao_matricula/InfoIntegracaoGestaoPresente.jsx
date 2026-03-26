import styles from './InfoIntegracaoGestaoPresente.module.scss';
import gestao_presente from './img/gestao_presente.png';
import CircleXMarkIcon from './icones/CircleXMarkIcon';
import AngleSmallLeftIcon from './icones/AngleSmallLeftIcon';

const InfoIntegracaoGestaoPresente = ({ setOpenCloseDrawer }) => {
    return (
        <div className={styles.infoIntegracao}>
            <div className={styles.infoIntegracao_content}>

                <div className={styles.infoIntegracao_close}>
                    <CircleXMarkIcon onClick={() => setOpenCloseDrawer(false)} />
                </div>

                <img
                    className={styles.infoIntegracao_image}
                    src={gestao_presente}
                    alt=""
                />

                <p className={styles.infoIntegracao_description}>
                    Este software <strong>possui integração</strong> completa com a plataforma de dados do MEC — Gestão Presente, permitindo o compartilhamento de informações dos alunos de todo o Brasil em tempo real. Além disso, possibilita a complementação dos dados da vida escolar do estudante, garantindo maior precisão e continuidade no acompanhamento educacional.
                </p>

                <div className={styles.infoIntegracao_dataSection}>

                    <p className={styles.infoIntegracao_dataTitle}>
                        Dados Operacionais
                    </p>

                    <p className={styles.infoIntegracao_dataDescription}>
                        Os dados abaixos realizam a correlação do uso da estrutura vinculado ao gestão presente com as informações do diário de classe vinculado a turma(s) correspondente:
                    </p>
                </div>
                <div className={styles.infoIntegracao_dataGrid}>

                    <div className={styles.infoIntegracao_dataItem}>
                        <span className={styles.infoIntegracao_dataLabel}>
                            Última Sincronização
                        </span>
                        <span className={styles.infoIntegracao_dataValue}>
                            14/07/2025 15:24:12
                        </span>
                    </div>

                    <div className={styles.infoIntegracao_divider} />

                    <div className={styles.infoIntegracao_dataItem}>
                        <span className={styles.infoIntegracao_dataLabel}>
                            Alunos Importados
                        </span>
                        <span className={styles.infoIntegracao_dataValue}>
                            2451
                        </span>
                    </div>

                    <div className={styles.infoIntegracao_divider} />

                    <div className={styles.infoIntegracao_dataItem}>
                        <span className={styles.infoIntegracao_dataLabel}>
                            Envios Realizados
                        </span>
                        <span className={styles.infoIntegracao_dataValue}>
                            8450
                        </span>
                    </div>

                    <div className={styles.infoIntegracao_divider} />

                    <div className={styles.infoIntegracao_dataItem}>
                        <span className={styles.infoIntegracao_dataLabel}>
                            Status Atual da Integração
                        </span>
                        <span className={styles.infoIntegracao_dataValueStatus}>
                            Online
                        </span>
                    </div>

                </div>
            </div>

            <div className={styles.infoIntegracao_footer}>
                <button className={styles.infoIntegracao_buttonPrimary}>
                    Saiba Mais
                </button>
                <button className={styles.infoIntegracao_buttonSecondary}>
                    Fechar
                    <AngleSmallLeftIcon />
                </button>
            </div>
        </div>
    )
}

export default InfoIntegracaoGestaoPresente;
import styles from './InfoHome.module.scss';
import DrawerComponent from '../../../components/DrawerComponent';
import PlayIcon from './icones/PlayIcon';
import BookIcon from './icones/BookIcon';

const InfoHome = ({ openDrawer, setOpenDrawer }) => {
    return (
        <DrawerComponent
            openCloseDrawer={openDrawer}
            setOpenCloseDrawer={setOpenDrawer}
            bgColor="#00397B"
            colorIcon="#fff"
        >
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h1 className={styles.title}>
                        Documentação Escolar
                    </h1>

                    <div className={styles.description}>
                        <p>
                            O sistema de documentação e escrituração escolar é uma solução digital desenvolvida para unificar, organizar e automatizar todos os processos relacionados ao registro acadêmico dentro das instituições de ensino. Totalmente integrado aos módulos base da gestão escolar — como Secretaria, Gestão Pedagógica, Avaliação, Matrículas, Transporte, Alimentação e Recursos Humanos — o sistema garante que todas as informações essenciais circulem de forma precisa, segura e em tempo real.
                        </p>
                        <p>
                            Sua principal função é centralizar a documentação acadêmica, incluindo históricos escolares, diários de classe, registros de frequência, atas, relatórios pedagógicos e demais documentos oficiais exigidos pelas secretarias de educação e normativas vigentes. A integração com os demais módulos permite que todas as informações sejam automaticamente atualizadas, eliminando retrabalho, reduzindo erros e assegurando conformidade com as legislações educacionais.
                        </p>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button className={styles.primaryButton}>
                        <span>Vídeo de Apresentação</span>
                        <PlayIcon />
                    </button>

                    <button className={styles.primaryButton}>
                        <span>e.Learn: Aprenda a usar</span>
                        <BookIcon />
                    </button>
                </div>
            </div>
        </DrawerComponent>
    );
};

export default InfoHome;
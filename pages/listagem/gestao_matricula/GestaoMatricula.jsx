import styles from './GestaoMatricula.module.scss';
import FeatherPlayCircleIcon from './icones/FeatherPlayCircleIcon';
import BellSchoolIcon from './icones/BellSchoolIcon';
import Dashboard from './Dashboard';

const GestaoMatricula = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <div className={styles.text}>
                    <span className={styles.title}>Gestão de Matrículas</span>

                    <p className={styles.description}>
                        Uma das principais vantagens dos questionários digitais é a facilidade de criação e distribuição.
                        Com apenas alguns cliques, é possível elaborar um questionário personalizado com uma variedade
                        de tipos de perguntas, desde múltipla escolha até escalas de classificação, caixas de seleção e
                        campos de texto aberto.
                    </p>
                </div>

                <div className={styles.actions}>
                    <button className={styles.button}>
                        <span>Apresentação das Funcionalidades</span>
                        <div className={styles.divider} />
                        <FeatherPlayCircleIcon />
                    </button>

                    <BellSchoolIcon className={styles.icon} />
                </div>

            </div>

            <Dashboard />
        </section>
    );
};

export default GestaoMatricula;
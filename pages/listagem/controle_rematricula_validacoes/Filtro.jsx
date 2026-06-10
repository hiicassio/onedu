import styles from './Filtro.module.scss'
import CaminhoIcon from './icones/CaminhoIcon';
import FeatherSearchIcon from './icones/FeatherSearchIcon';
import CloseIcon from './icones/CloseIcon';
import ArrowSmallRightIcon from './icones/ArrowSmallRightIcon';
import ArrowSmallLeftIcon from './icones/ArrowSmallLeftIcon';
import FilterIcon from './icones/FilterIcon';
import EducacaoEspecialIcon from './icones/EducacaoEspecialIcon';
import ArrowAngleBottomIcon from './icones/ArrowAngleBottomIcon';
import DropdownSelectIcon from './icones/DropdownSelectIcon';
import { useState } from 'react';

const Filtro = () => {
    const data = new Date();
    const ano = data.getFullYear();
    const [anoLeft, setAnoLeft] = useState(ano - 1);
    const [anoRight, setAnoRight] = useState(ano);
    return (
        <div className={styles.container}>
            {/* Botão caminho */}
            <button className={styles.btnCaminho}>
                <CaminhoIcon />
            </button>

            <div className={styles.content}>
                {/* Linha superior */}
                <div className={styles.topBar}>
                    <button onClick={() => setAnoLeft(prevent => prevent - 1)} className={styles.btnAno}>
                        <span>{anoLeft}</span>
                        <ArrowSmallLeftIcon />
                    </button>

                    <button onClick={() => setAnoRight(prevent => prevent + 1)} className={styles.btnAno}>
                        <span>{anoRight}</span>
                        <ArrowSmallRightIcon />
                    </button>

                    <div className={styles.filtroGrupo}>
                        <div className={styles.filtroHeader}>
                            <FilterIcon />
                        </div>

                        <div className={styles.filtroTags}>
                            <button className={styles.tag}>
                                <span>ENSINO FUNDAME..</span>
                                <CloseIcon />
                            </button>

                            <button className={styles.tag}>
                                <span>2º ANO</span>
                                <CloseIcon />
                            </button>
                        </div>

                        <button className={styles.btnFiltrar}>
                            Filtrar
                        </button>
                    </div>
                </div>

                {/* Linha inferior */}
                <div className={styles.bottomBar}>
                    {/* Busca */}
                    <div className={styles.searchBox}>
                        <button className={styles.searchIcon}>
                            <FeatherSearchIcon />
                        </button>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Pesquisar por Aluno"
                        />
                    </div>

                    {/* Alunos PCD */}
                    <div className={styles.select}>
                        <div className={styles.selectIcon}>
                            <EducacaoEspecialIcon />
                        </div>
                        <div className={styles.selectInfo}>
                            <span className={styles.label}>Alunos PCD</span>
                            <span className={styles.value}>Não</span>
                        </div>
                        <ArrowAngleBottomIcon />
                    </div>

                    {/* Situação */}
                    <div className={styles.select}>
                        <div className={styles.selectIcon}>
                            <DropdownSelectIcon />
                        </div>
                        <div className={styles.selectInfo}>
                            <span className={styles.label}>Situação</span>
                            <span className={styles.value}>(AP) Aprovado</span>
                        </div>
                        <ArrowAngleBottomIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtro;
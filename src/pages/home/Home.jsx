import styles from './Home.module.scss';
import documetacao from "./img/documetacao.png";
import sala from "./img/sala.png";
import financeiro from "./img/financeiro.png";
import alimentacao from "./img/alimentacao.png";
import estoque from "./img/estoque.png";
import transporte from "./img/transporte.png";
import operacoes from "./img/operacoes.png";
import configuracoes from "./img/configuracoes.png";
import DocumentacaoIcon from "./icones/DocumentacaoIcon";
import MinhaSalaIcon from "./icones/MinhaSalaIcon";
import FinanceiroIcon from "./icones/FinanceiroIcon";
import AlimentacaoIcon from "./icones/AlimentacaoIcon";
import EstoqueIcon from "./icones/EstoqueIcon";
import TransporteIcon from "./icones/TransporteIcon";
import OperacaoIcon from "./icones/OperacaoIcon";
import SegurancaIcon from "./icones/SegurancaIcon";
import ArrowLeftIcon from "./icones/ArrowLeftIcon";
import ArrowRightIcon from "./icones/ArrowRightIcon";
import QuestionIcon from "./icones/QuestionIcon";
import InfoIcon from "./icones/InfoIcon";
import { useEffect, useMemo, useRef, useState } from 'react';
import InfoHome from './components/InfoHome';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState(1);
    const [openDrawer, setOpenDrawer] = useState(false);

    const containerRef = useRef(null);
    const itemRefs = useRef({});

    const handleOptionClick = (optionId) => {
        if (optionId === selectedOption) return;

        const step = optionId > selectedOption ? 1 : -1;
        let current = selectedOption;

        const interval = setInterval(() => {
            current += step;
            setSelectedOption(current);

            if (current === optionId) {
                clearInterval(interval);
            }
        }, 30);
    };

    const dados = useMemo(() => ([
        { id: 1, nome: 'Documentação Escolar', icone: documetacao },
        { id: 2, nome: 'Classroom Minha Sala', icone: sala },
        { id: 3, nome: 'Controle Financeiro', icone: financeiro },
        { id: 4, nome: 'Alimentação Escolar', icone: alimentacao },
        { id: 5, nome: 'Almoxarifado & Estoque', icone: estoque },
        { id: 6, nome: 'Transporte Escolar', icone: transporte },
        { id: 7, nome: 'Central de Operações', icone: operacoes },
        { id: 8, nome: 'Central de Operações', icone: configuracoes },
    ]), []);

    useEffect(() => {
        const el = itemRefs.current[selectedOption];
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    }, [selectedOption]);

    return (
        <div className={styles.homeContainer}>
            <InfoHome openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

            <button className={styles.helpButton}>
                <QuestionIcon />
            </button>

            {/* <AppBarComponent /> */}

            <div className={styles.content}>
                <h1>Vamos Começar</h1>
                <p>Selecione o ambiente que gostaria de acessar:</p>
                <div className={styles.iconsContainer}>
                    <DocumentacaoIcon
                        onClick={() => handleOptionClick(1)}
                        className={`${styles.menuIcone} ${selectedOption === 1 ? styles.menuIconeSelected : ''}`}
                    />
                    <MinhaSalaIcon
                        onClick={() => handleOptionClick(2)}
                        className={`${styles.menuIcone} ${selectedOption === 2 ? styles.menuIconeSelected : ''}`}
                    />
                    <FinanceiroIcon
                        onClick={() => handleOptionClick(3)}
                        className={`${styles.menuIcone} ${selectedOption === 3 ? styles.menuIconeSelected : ''}`}
                    />
                    <AlimentacaoIcon
                        onClick={() => handleOptionClick(4)}
                        className={`${styles.menuIcone} ${selectedOption === 4 ? styles.menuIconeSelected : ''}`}
                    />
                    <EstoqueIcon
                        onClick={() => handleOptionClick(5)}
                        className={`${styles.menuIcone} ${selectedOption === 5 ? styles.menuIconeSelected : ''}`}
                    />
                    <TransporteIcon
                        onClick={() => handleOptionClick(6)}
                        className={`${styles.menuIcone} ${selectedOption === 6 ? styles.menuIconeSelected : ''}`}
                    />
                    <OperacaoIcon
                        onClick={() => handleOptionClick(7)}
                        className={`${styles.menuIcone} ${selectedOption === 7 ? styles.menuIconeSelected : ''}`}
                    />
                    <SegurancaIcon
                        onClick={() => handleOptionClick(8)}
                        className={`${styles.menuIcone} ${selectedOption === 8 ? styles.menuIconeSelected : ''}`}
                    />
                </div>
            </div>

            <div className={styles.menuContainer} ref={containerRef}>
                {dados.map((item) => {
                    const distance = Math.abs(selectedOption - item.id);

                    let distanceClass = "";

                    if (distance === 0) distanceClass = styles.selected;
                    else if (distance === 1) distanceClass = styles.level1;
                    else if (distance === 2) distanceClass = styles.level2;
                    else if (distance === 3) distanceClass = styles.level3;
                    else distanceClass = styles.level4;

                    return (
                        <div
                            ref={(node) => {
                                if (node) itemRefs.current[item.id] = node;
                            }}
                            onClick={() => handleOptionClick(item.id)}
                            key={item.id}
                            className={`${styles.menuItem} ${distanceClass}`}
                        >
                            <button
                                className={styles.buttonAbsolute}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenDrawer(true);
                                }}>
                                <InfoIcon />
                            </button>
                            <img src={item.icone} alt={item.nome} />
                            <p>{item.nome}</p>
                        </div>
                    )
                })}
            </div>

            <div className={styles.navigationButtons}>
                <button
                    disabled={selectedOption === 1}
                    onClick={() => setSelectedOption((v) => v - 1)}
                    className={`${styles.navButton} ${selectedOption === 1 ? styles.disabled : ''}`}
                >
                    <ArrowLeftIcon />
                </button>

                <button
                    disabled={selectedOption === dados.length}
                    onClick={() => setSelectedOption((v) => v + 1)}
                    className={`${styles.navButton} ${selectedOption === dados.length ? styles.disabled : ''}`}
                >
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};

export default Home;
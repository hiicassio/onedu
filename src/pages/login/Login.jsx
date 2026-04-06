import styles from './Login.module.scss';
import AngleSmallLeftIcon from './icones/AngleSmallLeftIcon';
import logo from './icones/logo.png';
import gov from './icones/gov.png';
import CircleUserIcon from './icones/CircleUserIcon';
import VectorIcon from './icones/VectorIcon';
import EyeIcon from './icones/EyeIcon';
import ArrowCircleUpIcon from './icones/ArrowCircleUpIcon';
import { useCallback, useEffect, useMemo, useState } from 'react';
import AlertComponents from '../../components/AlertComponents';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    const [direction, setDirection] = useState("rigth");
    const [alertOpenClose, setAlertOpenClose] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigate();

    const handlePasswordVisible = () => {
        setPasswordVisible(prevent => !prevent);
    };

    const dados = useMemo(() => [
        {
            title: "Novo portal municipal de educação do Rio de Janeiro",
            text:
                "Conheça a nova plataforma integrada com inteligência artificial e gestão escolar completa.",
        },
        {
            title: "Tudo em um só lugar\npara sua escola",
            text:
                "Centralize tarefas, materiais, avisos e relatórios. Menos retrabalho e mais visibilidade do que está acontecendo em cada turma.",
        },
        {
            title: "Planejamento e\nacompanhamento",
            text:
                "Organize o semestre, compartilhe conteúdos, monitore progresso e mantenha comunicação fluida com alunos e responsáveis.",
        },
    ], []);

    const handleSelect = (opcao) => {
        setDirection(opcao > selected ? "right" : "left");
        setSelected(opcao);
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSelected(prev => {
                const next = prev < 2 ? prev + 1 : 0;
                setDirection(next > prev ? "right" : "left");
                return next;
            });
        }, 4000);

        return () => clearInterval(intervalo);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        setLoading(true);

        if (!formValues.usuario || !formValues.senha) {
            setAlertOpenClose(false);
            const timer = setTimeout(() => {
                setLoading(false);
                setAlertOpenClose(true);
            }, 1000);

            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            navigation('/gestao-matricula/gestao-matricula');
        }, 3000);

        return () => clearTimeout(timer);
    };

    const handleCloseAlert = useCallback(() => {
        setAlertOpenClose(false);
    }, []);

    return (
        <div className={styles.containerLogin}>
            {alertOpenClose && (
                <AlertComponents
                    message="Preencha todos os campos e tente novamente."
                    onClose={handleCloseAlert}
                    type="error"
                />
            )}
            {/* LADO ESQUERDO */}
            <div className={styles.left}>

                <button className={styles.backButton}>
                    <AngleSmallLeftIcon />
                    <span>
                        Portal de <strong>Comunicação Oficial</strong>
                    </span>
                </button>

                <div className={styles.hero}>
                    {dados?.map((item, index) => (
                        <div key={index} className={styles.textContent}
                            style={{
                                transform: direction === "right" ? 'translateX(100%)' : 'translateX(-100%)',
                                display: index == selected ? 'flex' : 'none'
                            }}
                        >
                            <span className={styles.title}>{item.title}</span>

                            <span className={styles.subtitle}>{item.text}</span>
                        </div>
                    ))}
                    <div className={styles.dots}>
                        {dados?.map((item, index) => (
                            <button
                                onClick={() => handleSelect(index)}
                                key={index}
                                className={`${styles.dot} ${index === selected ? styles.dotSelected : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* LADO DIREITO */}
            <div className={styles.right}>
                {loading ?
                    <Loading />
                    :
                    <>
                        <form onSubmit={handleSubmit} className={styles.form}>

                            <img className={styles.logo} src={logo} alt="Logo" />

                            <div className={styles.inputs}>

                                <label className={styles.inputGroup}>
                                    <span className={styles.icon}>
                                        <CircleUserIcon />
                                    </span>
                                    <input type="text" placeholder="Usuário" name='usuario' />
                                </label>

                                <label className={styles.inputGroup}>
                                    <span className={styles.icon}>
                                        <VectorIcon />
                                    </span>
                                    <input type={passwordVisible ? "text" : "password"} placeholder="Senha" name='senha' />
                                    <button type='button' onClick={handlePasswordVisible} className={styles.icon}>
                                        <EyeIcon />
                                    </button>
                                </label>

                            </div>

                            <div className={styles.helpLogin}>
                                <span>
                                    Bem vindo ao portal de gestão escolar integrada, caso esteja com problemas de acesso, por favor <a href="">clique aqui</a>.
                                </span>

                                <button className={styles.loginButton}>
                                    <span />
                                    <ArrowCircleUpIcon />
                                </button>
                            </div>

                            <div className={styles.divider}>
                                <div className={styles.line} />
                                <span>ou</span>
                                <div className={styles.line} />
                            </div>

                            <button type='button' className={styles.govButton}>
                                <img src={gov} alt="gov.br" />
                            </button>


                        </form>
                        <span className={styles.footer}>
                            © 2026 – Todos os direitos reservados.
                        </span>
                    </>
                }
            </div>
        </div >
    )
}

export default Login;   
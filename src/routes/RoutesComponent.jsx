import { createHashRouter, RouterProvider } from "react-router-dom"
import RotasPublicas from "./RotasPublicas.jsx";
import RotasPrivadas from "./RotasPrivadas.jsx";
import HistoricoEscolar from "../pages/listagem/historico_escolar/HistoricoEscolar.jsx";
import IntencaoVaga from "../pages/listagem/intencao_vaga/IntencaoVaga.jsx";
import ControleMatricula from "../pages/listagem/controle_matricula/ControleMatricula.jsx";
import Home from "../pages/home/Home.jsx";
import Navegar from "./Navegar.jsx";
import HistoricoEscolarLancamentos from "../pages/listagem/historico_escolar_lancamentos/HistoricoEscolarLancamentos.jsx";
import BaseComponent from "../components/BaseComponent.jsx";
import Login from "../pages/login/Login.jsx";
import GestaoMatricula from "../pages/listagem/gestao_matricula/GestaoMatricula.jsx";
import DocumentosExpress from "../pages/listagem/documentos_express/DocumentosExpress.jsx";
import ControleRematricula from "../pages/listagem/controle_rematricula/ControleRematricula.jsx";
import ControleRematriculaValidacoes from "../pages/listagem/controle_rematricula_validacoes/ControleRematriculaValidacoes.jsx";
import DashboardHome from "../pages/dashboard_home/DashboardHome.jsx";
import ControleOcorrencias from "../pages/listagem/controle_ocorrencias/ControleOcorrencias.jsx";
import ControleTransferencias from "../pages/listagem/controle_transferencias/ControleTransferencias.jsx";
import ControleDesligamento from "../pages/listagem/controle_desligamento/ControleDesligamento.jsx";
import CentralEstudante from "../pages/listagem/central_estudante/CentralEstudante.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <RotasPrivadas />,
        children: [
            {
                path: "",
                element: <Login />
            },
            {
                path: "paginas",
                element: <Navegar />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "",
                element: <BaseComponent />,
                children: [
                    {
                        path: 'gestao-matricula',
                        children: [
                            {
                                path: "",
                                index: true,
                                element: <GestaoMatricula />
                            },
                            {
                                path: "historico-escolar",
                                index: true,
                                element: <HistoricoEscolar />
                            },
                            {
                                path: "historico-escolar-lancamentos",
                                index: true,
                                element: <HistoricoEscolarLancamentos />
                            },
                            {
                                path: "intencao-vaga",
                                index: true,
                                element: <IntencaoVaga />
                            },
                            {
                                path: "controle-matricula",
                                index: true,
                                element: <ControleMatricula />
                            },
                            {
                                path: "documentos-express",
                                index: true,
                                element: <DocumentosExpress />
                            },
                            {
                                path: "controle-rematricula",
                                index: true,
                                element: <ControleRematricula />
                            },
                            {
                                path: "controle-rematricula-validacoes",
                                index: true,
                                element: <ControleRematriculaValidacoes />
                            },
                            {
                                path: "controle-ocorrencias",
                                index: true,
                                element: <ControleOcorrencias />
                            },
                            {
                                path: "controle-transferencias",
                                index: true,
                                element: <ControleTransferencias />
                            },
                            {
                                path: "desligamento-express",
                                index: true,
                                element: <ControleDesligamento />
                            },
                            {
                                path: "central-estudante",
                                index: true,
                                element: <CentralEstudante />
                            },
                        ]
                    },
                    {
                        path: "dashboard",
                        children: [
                            {
                                path: "home",
                                element: <DashboardHome />
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <RotasPublicas />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    }
]);

const RoutesComponent = () => <RouterProvider router={router} />;

export default RoutesComponent;
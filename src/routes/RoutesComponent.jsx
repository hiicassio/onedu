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
import DocumentosExpress from "../pages/listagem/dosumentos_express/DocumentosExpress.jsx";
import ControleRematricula from "../pages/listagem/controle_rematricula/ControleRematricula.jsx";

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
                path: "gestao-matricula",
                element: <BaseComponent />,
                children: [
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
                        path: "gestao-matricula",
                        index: true,
                        element: <GestaoMatricula />
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
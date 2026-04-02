import { createHashRouter, Outlet, RouterProvider } from "react-router-dom"
import RotasPublicas from "./RotasPublicas.jsx";
import RotasPrivadas from "./RotasPrivadas.jsx";
import ControleMatriculaSimples from "../pages/listagem/controle_matricula_simples/ControleMatriculaSimples.jsx";
import ControleMatriculaAberta from "../pages/listagem/controle_matricula_aberta/ControleMatriculaAberta.jsx";
import HistoricoEscolar from "../pages/listagem/historico_escolar/HistoricoEscolar.jsx";
import IntencaoVaga from "../pages/listagem/intencao_vaga/IntencaoVaga.jsx";
import ControleMatricula from "../pages/listagem/controle_matricula/ControleMatricula.jsx";
import Navegar from "./Navegar.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <RotasPrivadas />,
        children: [
            {
                path: "",
                element: <Navegar />
            },
            {
                path: "intencao-vaga",
                element: <IntencaoVaga />
            },
            {
                path: "controle-matricula",
                element: <ControleMatricula />
            },
            {
                path: "historico-escolar",
                element: <HistoricoEscolar />
            },
            {
                path: "controle-matricula",
                element: <div><Outlet /></div>,
                children: [
                    {
                        path: "simples",
                        index: true,
                        element: <ControleMatriculaSimples />
                    },
                    {
                        path: "aberta",
                        index: true,
                        element: <ControleMatriculaAberta />
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
                element: <div>Login</div>
            }
        ]
    }
]);

const RoutesComponent = () => <RouterProvider router={router} />;

export default RoutesComponent;
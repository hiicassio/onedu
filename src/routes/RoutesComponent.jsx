import { createHashRouter, Outlet, RouterProvider } from "react-router-dom"
import RotasPublicas from "./RotasPublicas.jsx";
import RotasPrivadas from "./RotasPrivadas.jsx";
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
                        path: "controle-matricula",
                        index: true,
                        element: <controle-matricula />
                    },
                    {
                        path: "historico-escolar",
                        index: true,
                        element: <HistoricoEscolar />
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
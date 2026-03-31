import { createHashRouter, Outlet, RouterProvider } from "react-router-dom"
import RotasPublicas from "./RotasPublicas.jsx";
import RotasPrivadas from "./RotasPrivadas.jsx";
import ControleMatriculaSimples from "../pages/listagem/controle_matricula_simples/ControleMatriculaSimples.jsx";
import ControleMatriculaAberta from "../pages/listagem/controle_matricula_aberta/ControleMatriculaAberta.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <RotasPrivadas />,
        children: [
            {
                path: "",
                element: <ControleMatriculaSimples />
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
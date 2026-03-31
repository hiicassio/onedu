import { Navigate, Outlet } from "react-router-dom";

const RotasPublicas = () => {
    const token = localStorage.getItem("@ge_merchant_token");
    // const token = "token_para_teste_no_servidor";
    return token ? <Navigate to="/" /> : <Outlet />;
};

export default RotasPublicas;

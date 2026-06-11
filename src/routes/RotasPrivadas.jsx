import { Navigate, Outlet } from "react-router-dom";

const RotasPrivadas = () => {
    const token = localStorage.getItem("@ge_merchant_token") || "teste_token_para_teste_no_servidor";
    // const token = "token_para_teste_no_servidor";
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default RotasPrivadas;

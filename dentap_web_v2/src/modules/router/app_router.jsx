import { useCheckAuth } from "../../hooks/"
import { LoginPage } from "../auth/auth_screen";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/auth_routes";
import { AdminRoutes } from "../admin/routes/admin_routes";
import { useSelector } from "react-redux";
import { ClientRoutes } from "../client/routes/client_routes";

export const AppRouter = () => {

    const { status } = useCheckAuth();
    const user = useSelector(state => state.auth);
    // if (status === 'checking' || status === 'loading') {
    //     return <div className="loader"></div>
    // } 
    return (
        <Routes>

            {
                (status === 'auth' && user.data.tipo_usuario_x_usuario[0].tipo.descripcion == "ADMINISTRADOR")
                    ? <Route path='/*' element={<AdminRoutes />} />
                    : (status === 'auth' && user.data.tipo_usuario_x_usuario[0].tipo.descripcion == "PACIENTE")
                        ? <Route path='/*' element={<ClientRoutes />} />
                        : <Route path='/*' element={<AuthRoutes />}></Route>
            }

            <Route path='*' element={<Navigate to='/auth/login' />}></Route>
        </Routes>
    )

}
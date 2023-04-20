import { useCheckAuth } from "../../hooks/"
import { LoginPage } from "../auth/auth_screen";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/auth_routes";
import { AdminRoutes } from "../admin/routes/admin_routes";

export const AppRouter = () => {

    const { status } = useCheckAuth();

    // if (status === 'checking' || status === 'loading') {
    //     return <div className="loader"></div>
    // }

    return (
        <Routes>
          
            {
                (status === 'auth')
                    ? <Route path='/*' element={<AdminRoutes />} />
                    : <Route path='/*' element={<AuthRoutes />}></Route>
            }

            <Route path='*' element={<Navigate to='/auth/login' />}></Route>
        </Routes>
    )

}
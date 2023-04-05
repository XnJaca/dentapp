import { Routes, Route, Navigate } from 'react-router-dom'
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { AuthRoutes } from '../../modules/auth/router/'
import { AdminRoutes } from '../../modules/admin/router/admin_routes';


export const AppRouter = () => {

    const { status } = useCheckAuth();

    if (status === 'checking' || status === 'loading') {
        return <div className="loader"></div>
    }

    return (
        <Routes>
            {
                (status === 'auth')
                    ? <Route path='/*' element={<AdminRoutes/>} />
                    : <Route path='/*' element={<AuthRoutes />}></Route>
            }

            <Route path='*' element={<Navigate to='/auth/login' />}></Route>
        </Routes>
    )
}

import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminPage } from '../admin/pages/AdminPage'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <div className="loader"></div>
  }
  return (
    <Routes>

      {
        // Si el usuario no está autenticado, muestra la página de inicio de sesión
        // Si el usuario está autenticado, muestra la página de administración

        (status === 'auth')
          ? <Route path='/*' element={<AdminPage />}></Route>
          : <Route path='/*' element={<AuthRoutes />}></Route>
      }

      <Route path='*' element={<Navigate to='/auth/login' />}></Route>
    </Routes>
  )
}

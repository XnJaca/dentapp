import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../pages/auth/routes/auth_routes'
import { DashboardView } from '../pages/dashboard/views/dashboard_view'

export const AppRouter = () => {
    return (
        <Routes>
            {/* LOGIN & REGISTRO */}
            <Route path='/auth/*' element={<AuthRoutes></AuthRoutes>}></Route>

            {/* DASHBOARD */}
            <Route path='/*' element={<DashboardView></DashboardView>}></Route>
        </Routes>
    )
}

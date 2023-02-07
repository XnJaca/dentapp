import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardView } from '../views/dashboard_view'

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardView></DashboardView>}></Route>

            <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    )
}

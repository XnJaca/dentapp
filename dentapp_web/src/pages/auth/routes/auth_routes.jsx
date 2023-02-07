import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginView } from '../views'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginView></LoginView>}></Route>

            <Route path='/*' element={<Navigate to="/auth/login"></Navigate>}></Route>
        </Routes>
    )
}

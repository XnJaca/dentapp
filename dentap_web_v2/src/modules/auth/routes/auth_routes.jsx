import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth_screen'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='auth/login' element={<LoginPage/>}></Route>

        <Route path='/*' element={<LoginPage/>}></Route>
    </Routes>
  )
}

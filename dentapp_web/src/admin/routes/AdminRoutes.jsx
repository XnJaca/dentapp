import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../pages/AdminPage'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminPagen/>}></Route>

        <Route path='/*' element={<Navigate to=""/>}></Route>
    </Routes>
  )
}

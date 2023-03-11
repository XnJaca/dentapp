import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SigInPage } from '../pages/SigInPage'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<SigInPage></SigInPage>}></Route>

        <Route path='/*' element={<SigInPage/>}></Route>
    </Routes>
  )
}

import { Route, Routes } from "react-router-dom"
import { AdminPage } from "../pages"
import { UserPage } from "../pages/user/user_page"
import {MainPage } from "../pages/main/main_page"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<AdminPage><MainPage/></AdminPage>} />
            <Route path="/admin/user" element={<AdminPage><UserPage /></AdminPage>} />

        </Routes>
    )
}
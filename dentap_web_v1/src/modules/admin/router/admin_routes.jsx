import { Route, Routes } from "react-router-dom"
import { AdminPage } from "../pages"
import { UserPage } from "../pages/user/user_page"
import {MainPage } from "../pages/main/main_page"
import { EnfermedadesPage } from "../pages/enfermedades/enfermedades_page"
import { AlergiasPage } from "../pages/alergias/alergias_page"
import { MedicamentosPage } from "../pages/medicamentos/medicamentos_page"
import { HorariosPage } from "../pages/horarios/horarios_page"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<AdminPage><MainPage/></AdminPage>} />
            <Route path="/admin/user" element={<AdminPage><UserPage /></AdminPage>} />
            <Route path="/admin/enfermedades" element={<AdminPage><EnfermedadesPage /></AdminPage>} />
            <Route path="/admin/alergias" element={<AdminPage><AlergiasPage /></AdminPage>} />
            <Route path="/admin/medicamentos" element={<AdminPage><MedicamentosPage /></AdminPage>} />
            <Route path="/admin/horarios" element={<AdminPage><HorariosPage/></AdminPage>}/>
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom"
import { AdminScreen } from "../admin_screen"
import { HomePage } from "../pages/home_page"
import { UserPage } from "../pages/users/user_page"
import { AllergiesPage } from "../pages/allergies/allergies_page"
import { DiseasePage } from "../pages/diseases/disease_page"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<AdminScreen><HomePage/></AdminScreen>} />
            {/* <Route path="/*" element={<AdminScreen><MainPage/></AdminScreen>} /> */}
            <Route path="/admin/users" element={<AdminScreen><UserPage/></AdminScreen>} />
            <Route path="/admin/allergies" element={<AdminScreen><AllergiesPage/></AdminScreen>} />
            <Route path="/admin/diseases" element={<AdminScreen><DiseasePage/></AdminScreen>} />
            {/*  <Route path="/admin/enfermedades" element={<AdminPage><EnfermedadesPage /></AdminPage>} />
            <Route path="/admin/alergias" element={<AdminPage><AlergiasPage /></AdminPage>} />
            <Route path="/admin/medicamentos" element={<AdminPage><MedicamentosPage /></AdminPage>} />
            <Route path="/admin/horarios" element={<AdminPage><HorariosPage/></AdminPage>}/> */}
        </Routes>
    )
}
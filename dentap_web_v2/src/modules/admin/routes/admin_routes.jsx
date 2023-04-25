import { Route, Routes } from "react-router-dom"
import { AdminScreen } from "../admin_screen"
import { HomePage } from "../pages/home_page"
import { UserPage } from "../pages/users/user_page"
import { AllergiesPage } from "../pages/allergies/allergies_page"
import { DiseasePage } from "../pages/diseases/disease_page"
import { MedicinePage } from "../pages/medicine/medicine_page"
import { TreatmentPage } from "../pages/treatment/treatment_page"
import { TreatmentTypePage } from "../pages/treatment_type/treatment_type_page"
import { PatientsPage } from "../pages/patients/patients_page"
import { MedicsPage } from "../pages/medic/medic_page"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<AdminScreen><HomePage/></AdminScreen>} />
            {/* <Route path="/*" element={<AdminScreen><MainPage/></AdminScreen>} /> */}
            <Route path="/admin/users" element={<AdminScreen><UserPage/></AdminScreen>} />
            <Route path="/admin/allergies" element={<AdminScreen><AllergiesPage/></AdminScreen>} />
            <Route path="/admin/diseases" element={<AdminScreen><DiseasePage/></AdminScreen>} />
            <Route path="/admin/medicine" element={<AdminScreen><MedicinePage/></AdminScreen>} />
            <Route path="/admin/treatment" element={<AdminScreen><TreatmentPage/></AdminScreen>} />
            <Route path="/admin/treatmenttype" element={<AdminScreen><TreatmentTypePage/></AdminScreen>} />
            <Route path="/admin/patients" element={<AdminScreen><PatientsPage/></AdminScreen>} />
            <Route path="/admin/medics" element={<AdminScreen><MedicsPage/></AdminScreen>} />
            {/*  <Route path="/admin/enfermedades" element={<AdminPage><EnfermedadesPage /></AdminPage>} />
            <Route path="/admin/alergias" element={<AdminPage><AlergiasPage /></AdminPage>} />
            <Route path="/admin/medicamentos" element={<AdminPage><MedicamentosPage /></AdminPage>} />
            <Route path="/admin/horarios" element={<AdminPage><HorariosPage/></AdminPage>}/> */}
        </Routes>
    )
}
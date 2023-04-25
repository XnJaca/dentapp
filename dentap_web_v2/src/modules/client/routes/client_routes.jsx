import { Route, Routes } from "react-router-dom"
import { ClientScreen } from "../client_screen"
import { HomePage } from "../pages/home_page"
import { ExpedientePage } from "../pages/expediente_page"


export const ClientRoutes = () => {
    return (

        <Routes>
            <Route path="/*" element={<ClientScreen><HomePage /></ClientScreen>} />
            <Route path="/client/expediente" element={<ClientScreen><ExpedientePage /></ClientScreen>} />
        </Routes>
    )
}
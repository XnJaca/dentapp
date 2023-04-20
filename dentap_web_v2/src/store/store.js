import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./auth/auth_slice";
import { UserSlice } from "./users/user_slice";
import { DialogSlice } from "./dialog";
import { GenerosSlice } from "./generos";
import { TipoUsuarioSlice } from "./tipo_usuarios/tipo_usuario_slice";
import { AllergiesSlice } from "./allergies/allergies_slice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        user: UserSlice.reducer,
        dialog: DialogSlice.reducer,
        genero: GenerosSlice.reducer,
        tipoUsuarios: TipoUsuarioSlice.reducer,
        allergies: AllergiesSlice.reducer,
    }
})
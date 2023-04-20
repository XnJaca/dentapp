import { createSlice } from "@reduxjs/toolkit";

export const TipoUsuarioSlice = createSlice({
    name: 'tipo_usuario',
    initialState: {
        isSaving: false,
        message: '',
        data: []
    },

    reducers: {

        setTipoUsuario: (state, action) => {
            console.log('setTipoUsuario', action.payload);
            state.data = action.payload.tipoUsuarios;
            state.message = action.payload.message;
        }
    }
})

export const { setTipoUsuario } = TipoUsuarioSlice.actions;
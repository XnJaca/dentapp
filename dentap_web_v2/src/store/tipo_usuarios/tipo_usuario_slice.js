import { createSlice } from "@reduxjs/toolkit";


export const TipoUsuarioSlice = createSlice({
    name: 'tipo_usuario',
    initialState: {
        tipo_usuario: [],
        message: '',
        loading: false,
        isSaving: false,
    },

    reducers: {

        setTipoUsuarios: (state, action) => {
            state.tipo_usuario = action.payload.tipo_usuario;
            state.loading = false;
            state.message = action.payload.message;
        },

        saveTipoUsuario: (state, action) => {
            state.tipo_usuario = action.payload.tipo_usuario;
            state.isSaving = false;
            state.message = action.payload.message;
        },

        deleteTipoUsuario: (state, action) => {
            state.tipo_usuario = action.payload.tipo_usuario;
            state.message = action.payload.message;
        },

        updateTipoUsuario: (state, action) => {
            state.tipo_usuario = action.payload.tipo_usuario;
            state.message = action.payload.message;
        }
    }
});

export const { setTipoUsuarios, saveTipoUsuario, deleteTipoUsuario, updateTipoUsuario } = TipoUsuarioSlice.actions;
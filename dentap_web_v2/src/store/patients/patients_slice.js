import { createSlice } from "@reduxjs/toolkit";


export const PacientesSlice = createSlice({
    name: 'pacientes',
    initialState: {
        pacientes: [],
        message: '',
        loading: false,
        isSaving: false,
    },

    reducers: {

        setPacientes: (state, action) => {
            state.pacientes = action.payload.pacientes;
            state.loading = false;
            state.message = action.payload.message;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
});

export const { setPacientes,setLoading } = PacientesSlice.actions;
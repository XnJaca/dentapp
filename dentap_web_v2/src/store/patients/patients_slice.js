import { createSlice } from "@reduxjs/toolkit";


export const PacientesSlice = createSlice({
    name: 'pacientes',
    initialState: {
        pacientes: [],
        paciente: {},
        citas: [],
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
        setCitasxPaciente: (state, action) => {
            state.citas = action.payload.citas;
            state.loading = false;
            state.message = action.payload.message;
        },
        setPaciente: (state, action) => {
            state.paciente = action.payload.paciente;
            state.loading = false;
            state.message = action.payload.message;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
});

export const { setPacientes,setCitasxPaciente, setPaciente,setLoading } = PacientesSlice.actions;
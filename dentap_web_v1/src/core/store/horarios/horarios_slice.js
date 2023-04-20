import { createSlice } from "@reduxjs/toolkit";

export const HorariosSlice = createSlice({
    name: 'horarios',
    initialState: {
        isSaving: false,
        message: '',
        horarios: [],
        loading: false,
    },
    reducers: {
        
        setHorarios: (state, action) => {
            state.horarios = action.payload.horarios;
            state.message = action.payload.message;
            state.isSaving = false;
        },

        saveHorario: (state, action) => {
            state.isSaving = true;
            state.message = action.payload.message;
        }
    }
});

export const { setHorarios, saveHorario } = HorariosSlice.actions;
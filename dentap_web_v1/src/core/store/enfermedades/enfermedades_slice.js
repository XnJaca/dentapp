import { createSlice } from "@reduxjs/toolkit";


export const EnfermedadSlice = createSlice({
    name: 'enfermedades',
    initialState: {
        enfermedades: [],
        isSaving: false,
        message: '',
    },

    reducers: {
        
        setEnfermedades: (state, action) => {
            state.enfermedades = action.payload.enfermedades;
            state.message = action.payload.message;
            state.isSaving = false;
        },

        saveEnfermedad: (state, action) => {
            state.isSaving = true;
            state.message = action.payload.message;
        }
    }
});

export const { setEnfermedades, saveEnfermedad } = EnfermedadSlice.actions;
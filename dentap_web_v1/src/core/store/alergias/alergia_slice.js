import { createSlice } from "@reduxjs/toolkit";


export const AlergiaSlice = createSlice({
    name: 'alergias',
    initialState: {
        alergias: [],
        isSaving: false,
        message: '',
    },

    reducers: {
        
        setAlergias: (state, action) => {
            state.alergias = action.payload.alergias;
            state.message = action.payload.message;
            state.isSaving = false;
        },

        saveAlergia: (state, action) => {
            state.isSaving = true;
            state.message = action.payload.message;
        }
    }
});

export const { setAlergias, saveAlergia } = AlergiaSlice.actions;
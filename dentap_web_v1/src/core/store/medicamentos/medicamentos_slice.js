import { createSlice } from "@reduxjs/toolkit";


export const MedicamentoSlice = createSlice({
    name: 'medicamentos',
    initialState: {
        medicamentos: [],
        isSaving: false,
        message: '',
    },

    reducers: {
        
        setMedicamentos: (state, action) => {
            state.medicamentos = action.payload.medicamentos;
            state.message = action.payload.message;
            state.isSaving = false;
        },

        saveMedicamento: (state, action) => {
            state.isSaving = true;
            state.message = action.payload.message;
        }
    }
});

export const { setMedicamentos, saveMedicamento } = MedicamentoSlice.actions;
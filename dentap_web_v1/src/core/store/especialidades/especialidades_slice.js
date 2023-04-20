import { createSlice } from '@reduxjs/toolkit'

export const EspecialidadSlice = createSlice({
name: 'especialidades',
initialState: {
    especialidades: [],
    especialidad: {},
    isSaving: false,
    message: '',
},
reducers: {
    
    setEspecialidades: (state, action) => {
        state.especialidades = action.payload.especialidades;
        state.message = action.payload.message;
    }


}
});

export const { setEspecialidades } = EspecialidadSlice.actions;
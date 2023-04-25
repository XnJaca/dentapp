import { createSlice } from '@reduxjs/toolkit';

export const SpecialitySlice = createSlice({
    name: 'Speciality',
    initialState: {
        data: [],
        message: '',
        loading: true,
        isSaving: false,
    },
    reducers: { 
        setData: (state, action) => {
            state.data = action.payload.data;
            state.loading = false;
            state.message = action.payload.message;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
})

export const { setData, setLoading } = SpecialitySlice.actions


import { createSlice } from '@reduxjs/toolkit';

export const DiseaseSlice = createSlice({
    name: 'Disease',
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

export const { setData, setLoading } = DiseaseSlice.actions


import { createSlice } from "@reduxjs/toolkit";


export const AppoimentsSlice = createSlice({
    name: 'appoiments',
    initialState: {
        appoiments: [],
        message: '',
        loading: true,
        isSaving: false,
    },
    
    reducers: {

        // Get all appoiments
        setAppoiments: (state, action) => {
            state.appoiments = action.payload.appoiments;
            state.loading = false;
            state.message = action.payload.message;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

    }
})

export const { setAppoiments, setLoading } = AppoimentsSlice.actions


import { createSlice } from "@reduxjs/toolkit";


export const AllergiesSlice = createSlice({
    name: 'allergies',
    initialState: {
        allergies: [],
        message: '',
        loading: false,
        isSaving: false,
    },

    reducers: {

        // Get all allergies
        setAllergies: (state, action) => {
            state.allergies = action.payload.allergies;
            state.loading = false;
            state.message = action.payload.message;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

    }
})

export const { setAllergies } = AllergiesSlice.actions
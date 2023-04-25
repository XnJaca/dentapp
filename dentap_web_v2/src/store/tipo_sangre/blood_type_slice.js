import { createSlice } from "@reduxjs/toolkit";


export const BloodTypeSlice = createSlice({
    name: 'bloodType',
    initialState: {
        bloodTypes: [],
        message: '',
        loading: false,
        isSaving: false,
    },

    reducers: {

        setBloodTypes: (state, action) => {
            // console.log('setBloodTypes', action.payload.bloodTypes);
            state.bloodTypes = action.payload.bloodTypes;
            state.loading = false;
            state.message = action.payload.message;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
});

export const { setBloodTypes,setLoading } = BloodTypeSlice.actions;
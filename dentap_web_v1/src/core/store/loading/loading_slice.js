import { createSlice } from "@reduxjs/toolkit";


export const LoadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false,
    },
    reducers: {
        isLoading: (state) => {
            state.loading = true;
        },

        notLoading: (state) => {
            state.loading = state;
        }
    },
});

export const { isLoading, notLoading } = LoadingSlice.actions;
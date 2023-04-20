import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        message: '',
        loading: false,
        isSaving: false,
    },

    reducers: {

        // Get all users
        setUsers: (state, action) => {
            state.user = action.payload.user;
            state.loading = false;
            state.message = action.payload.message;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const { setUsers, setLoading } = UserSlice.actions;
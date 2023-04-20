import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        isSaving: true,
        messageSaved: '',
        user: [],
        users: [],
        loading: false,
    },
    reducers: {
        addNewUser: (state, action) => {
            state.users.push(action.payload.user);
            state.messageSaved = action.payload.messageSaved;
            state.user = action.payload.user;
        },

        setUsers: (state, action) => {

        },

        setSaving: (state) => {

        },

        updateUser: (state, action) => {
        },

        deleteUserById: (state, action) => {
        },

        loading: (state) => {
            state.loading = true;
        }
    }
});

export const { addNewUser, setUsers, setSaving, deleteUserById, updateUser, loading } = UserSlice.actions;
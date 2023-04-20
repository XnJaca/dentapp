import { createSlice } from "@reduxjs/toolkit";

const AuthStatus = {
    'non-auth': 'non-auth',
    'auth': 'auth',
    'checking': 'checking',
    'loading': 'loading',
}

export const AuthSlice = createSlice({
    name: 'auth',

    initialState: {
        status: AuthStatus['non-auth'], // non-auth, auth, checking, loading
        data: null,
        displayName: null,
        errorMsg: null,
    },
    reducers: {

        login: (state, action) => {
            state.status = AuthStatus['auth'];
            state.data = action.payload.data;
            state.displayName = action.payload.displayName;
            state.errorMsg = null;
        },

        logout: (state, action) => {
            // console.log("LOGOUU", action.payload);
            state.status = AuthStatus['non-auth'];
            state.data = null;
            state.displayName = null;
            state.errorMsg = action?.payload;
        },

        loading: (state) => {
            console.log('loadinggg');
            state.status = AuthStatus['loading'];
        },

        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logout, loading, checkingCredentials } = AuthSlice.actions;

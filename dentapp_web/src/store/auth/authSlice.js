import { createSlice } from '@reduxjs/toolkit'


// create enum js
export const AuthStatus = {
    'non-auth': 'non-auth',
    'auth': 'auth',
    'checking': 'checking',
}

export const authSlice = createSlice({
    name: 'auth',
    
    initialState: {
        status: AuthStatus['non-auth'], // non-auth, auth, checking
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

        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;
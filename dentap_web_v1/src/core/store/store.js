import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './auth';
import { GenerosSlice } from './generos';
import { UserSlice } from './usuarios/user_slice';

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        user: UserSlice,
        genero: GenerosSlice.reducer
    }
});
import { createSlice } from "@reduxjs/toolkit";

export const GenerosSlice = createSlice({
    name: 'generos',
    initialState: {
        isSaving: false,
        message: '',
        generos: [],
        loading: false,
    },

    reducers: {

        saveGenero: (state, action) => {
            state.generos.push(action.payload.genero);
            state.message = action.payload.message;
        },

        setGeneros: (state, action) => {
            state.message = action.payload.message;
            state.generos = action.payload.generos;
        },

        updateGenero: (state, action) => {
            state.generos = state.generos.map((genero) => {
                if (genero.id === action.payload.genero.id) {
                    return action.payload.genero;
                }
                return genero;
            });
            state.message = action.payload.message;
        },

        deleteGenero: (state, action) => {
            state.generos = state.generos.filter((genero) => {
                return genero.id !== action.payload.genero.id;
            });
            state.message = action.payload.message;
        },

        loadGeneros: (state, action) => {
            console.log('loadGeneros', action.payload);
            state.loading = action.payload;
        }

    },
})

export const { saveGenero,loadGeneros, setGeneros, updateGenero, deleteGenero, loading } = GenerosSlice.actions;
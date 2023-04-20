import { createSlice } from "@reduxjs/toolkit";


export const DialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        open: false,
        title: '',
        content: null,
        modificar: false,
    },
    reducers: {
        setOpenDialog: (state, action) => {
            state.open = true;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.modificar = action.payload.modificar;
        },

        setCloseDialog: (state) => {
            state.open = false;
            state.title = '';
            state.content = null;
            state.modificar = false;
        },

        updateContent: (state, action) => {
            state.content = action.payload;
        }

    }
});

export const { setOpenDialog, setCloseDialog,updateContent } = DialogSlice.actions;


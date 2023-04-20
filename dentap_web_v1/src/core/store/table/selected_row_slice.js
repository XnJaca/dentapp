import { createSlice } from "@reduxjs/toolkit";


export const SelectedRowSlice = createSlice({
    name: 'selectedRow',
    initialState: {
        selectedRow: null,
    },
    reducers: {
        SelectedRow: (state, action) => {
            state.selectedRow = action.payload.selectedRow;
        }
    }
});

export const { SelectedRow } = SelectedRowSlice.actions;

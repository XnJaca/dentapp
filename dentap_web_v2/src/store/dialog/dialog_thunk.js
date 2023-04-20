import { setCloseDialog, setOpenDialog, updateContent } from "./dialog_slice";


export const openDialog = (dialog) => (dispatch) => {
    dispatch(setOpenDialog(dialog));
}

export const closeDialog = () => (dispatch) => {
    dispatch(setCloseDialog());
}

export const updateContentDialog = (content) => (dispatch) => {
    dispatch(updateContent(content));
}

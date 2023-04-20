import { isLoading, notLoading } from "./loading_slice";


export const startLoading = () => (dispatch, getState) => {
    dispatch(isLoading());
}

export const stopLoading = () => (dispatch, getState) => {
    dispatch(notLoading());
}




import { SaveUserRequest } from "../../api/requests/user";
import { addNewUser, loading } from "./user_slice";

export const startNewUser = (user) => async (dispatch, getState) => {
    console.log('startNewUser');
    console.log(getState().auth.data['id']);

    const { id } = getState().auth.data['id'];

    dispatch(loading());

    try {
        const data = await SaveUserRequest({ user });

        // if (data.success != true) {
        //     return dispatch(logout(data.message ?? data));
        // }
        dispatch(addNewUser(
            {
                messageSaved: 'Usuario guardado correctamente',
                user: data
            }
        ));

        return {
            ok: true,
            data: data
        };
    } catch (error) {
        dispatch(logout(error.message));
        return { ok: false, msg: error.message }
    }
}
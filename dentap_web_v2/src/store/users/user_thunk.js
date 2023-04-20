import { deleteUserService, getAllUsers, saveUserService, updateUserService } from "./service/user_service";
import { setLoading, setUsers } from "./user_slice";


export const getUsers = () => async (dispatch) => {

    // console.log('getUsers');
    const response = await getAllUsers();

    // console.log('response', response);
    if (response.error == false) {
        dispatch(setUsers(
            {
                user: response.users,
                message: response.message
            }
        ));
    } else {
        // console.log(response.message);
    }
}


export const saveUser = (user) => async (dispatch) => {

    dispatch(setLoading(true));
    // console.log('saveUser');
    const response = await saveUserService(user);

    // console.log('response', response);

    if (response.error == false) {
        const data = await getAllUsers();
        dispatch(setUsers(
            {
                user: data.users,
                message: response.message
            }
        ));
        dispatch(setLoading(false));
        return {
            error: false,
            message: response.message
        }
    } else {
        // console.log(response.message);
        return {
            error: true,
            message: response.message
        }
    }
}


export const updateUser = (user) => async (dispatch) => {

    dispatch(setLoading(true));
    // console.log('updateUser');
    const response = await updateUserService(user);

    // console.log('responseUpdateUser', response);
    if (response.error == false) {

        const usuarios = await getAllUsers();
        // console.log('usuariossss', usuarios);
        dispatch(setUsers(
            {
                user: usuarios.users,
                message: response.message
            }
        ));
        dispatch(setLoading(false));
        return {
            error: false,
            message: response.message
        }
    } else {
        // console.log(response.message);
        return {
            error: true,
            message: response.message
        }
    }
}

export const deleteUser = (user) => async (dispatch) => {
    
        dispatch(setLoading(true));
        // console.log('deleteUser');
        const response = await deleteUserService(user);
    
        // console.log('response', response);
        if (response.error == false) {
            const data = await getAllUsers();
            dispatch(setUsers(
                {
                    user: data.users,
                    message: response.message
                }
            ));
            dispatch(setLoading(false));
            return {
                error: false,
                message: response.message
            }
        } else {
            // console.log(response.message);
            return {
                error: true,
                message: response.message
            }
        }
    }
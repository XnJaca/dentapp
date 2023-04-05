import { LoginRequest } from "../../api/requests/auth/auth_request";
import { checkingCredentials, loading, login, logout } from "./auth_slice";


export const checkingAuth = () => async (dispatch) => {
    checkingCredentials();
    const user = JSON.parse(localStorage.getItem('user')); // obtiene el usuario desde localStorage si existe
    if (user) {
        dispatch(login(user));
    }
}

export const startLogin = (email, pass) => async (dispatch) => {
    console.log('startLogin');
    dispatch(checkingCredentials());

    try {
        const data = await LoginRequest({ email, pass });

        if (data.success != true) {
            return dispatch(logout(data.message ?? data));
        }

        const user = {
            uid: data.usuario.id,
            data: data.usuario,
            displayName: data.usuario.nombre + ' ' + data.usuario.apellido_1 + ' ' + data.usuario.apellido_2
        };

        localStorage.setItem('user', JSON.stringify(user)); // guarda el usuario en localStorage

        dispatch(login(user));

        return {
            ok: true,
            data: data
        };
    } catch (error) {
        dispatch(logout(error.message));
        return { ok: false, msg: error.message }
    }
}

export const startLogout = () => async (dispatch) => {
    localStorage.removeItem('user');
    dispatch(loading());
    // console.log("starLogout");
    // wait 2 seconds
    setTimeout(() => {
        dispatch(logout());
    }, 2000);
}


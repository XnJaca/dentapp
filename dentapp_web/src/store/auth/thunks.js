import { ReqLogin } from "../../api/auth/AuthService";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuth = (email, pass) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const user = JSON.parse(localStorage.getItem('user')); // obtiene el usuario desde localStorage si existe
        if (user) {
            dispatch(login(user));
        }
    }
}

export const startLoginWithEmailPassword = (email, pass) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        try {
            const data = await ReqLogin({ email, pass });
            console.log(data);
            if (data.success === false) {
                return dispatch(logout(data.message));
            }

            console.log(data);
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
}

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem('user');
        dispatch(logout());
    }
}

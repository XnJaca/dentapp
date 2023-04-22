import { checkingCredentials, loading, login, logout } from "./auth_slice";
import { LoginRequest } from "./service/auth_service";


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
        // const data = await LoginRequest({ email, pass });

        // if (data.success != true) {
        //     return dispatch(logout(data.message ?? data));
        // }

        // const user = {
        //     uid: data.usuario.id,
        //     data: data.usuario,
        //     displayName: data.usuario.nombre + ' ' + data.usuario.apellido_1 + ' ' + data.usuario.apellido_2
        // };

        const user = {
            uid: 1,
            data: {
                id: 1,
                nombre: 'Paco',
                apellido_1: 'bien',
                apellido_2: 'loco',
                cedula: '123456789',
                email: 'asd@asd.com',
                telefono: '123456789',
                direccion: 'asd',
                rol: 'admin',
                estado: 'activo', 
                fecha_nacimiento: '2021-01-01',
                telefono_emer: '123456789', 
                estado:1,
                genero: {
                    id: 1,
                    descripcion: "MASCULINO"
                },
                tipo_usuario_x_usuario: [
                    {
                        id: 1,
                        usuario_id: 1,
                        tipo_id: 1,
                        tipo: {
                            id: 1,
                            descripcion: "ADMINISTRADOR"
                        }
                    }
                ]  
            },
            displayName: 'Paco' + ' ' + 'bien' + ' ' + 'loco'
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
    setTimeout(() => {
        dispatch(logout());
    }, 2000);
}


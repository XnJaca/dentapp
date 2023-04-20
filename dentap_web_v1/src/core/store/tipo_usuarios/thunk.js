import { getTipoUsuarios } from "../../api/requests/tipo_usuarios/tipo_usuario_request";
import { setTipoUsuario } from "./tipo_usuario_slice";

export const startGetTipoUsuarios = () => async (dispatch) => {
    console.log('startGetTipoUsuarios');

    const tipoUsuarios = await getTipoUsuarios();

    console.log('tipoUsuarios', tipoUsuarios);

    dispatch(setTipoUsuario(
        {
            message: 'Tipo de usuarios cargados correctamente',
            tipoUsuarios: tipoUsuarios
        }
    ));

    return {
        ok: true,
        data: tipoUsuarios
    };
}
import { getAllTipoUsuarios } from "./service/tipo_usuario_service";
import { setTipoUsuarios } from "./tipo_usuario_slice";

export const getTipoUsuarios = () => async (dispatch) => {

    console.log('getTipoUsuarios');
    const response = await getAllTipoUsuarios();

    console.log('response', response);
    if (response.error == false) {
        dispatch(setTipoUsuarios(
            {
                tipo_usuario: response.tipo_usuarios,
                message: response.message
            }
        ));
    } else {
        console.log(response.message);
    }
}

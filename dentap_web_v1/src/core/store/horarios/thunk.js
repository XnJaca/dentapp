import { getHorarios } from "../../api/requests/horarios/horarios_request";
import { setHorarios } from "./horarios_slice";

export const startGetHorario = () => async (dispatch) => {
    console.log('startGetHorario');
    const horarios = await getHorarios();

    console.log('horarios', horarios);

    dispatch(setHorarios(
        {
            message: 'Horarios obtenidas correctamente',
            horarios: horarios
        }
    ));
    return {
        ok: true,
        data: horarios
    };
};

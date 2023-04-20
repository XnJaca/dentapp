import { deleteAlergia, getAlergias, saveAlergia, updateAlergia } from "../../api/requests/alergias/alergias_request";
import { setAlergias } from "./alergia_slice";


export const startGetAlergia = () => async (dispatch) => {
    console.log('startGetAlergia');
    const alergias = await getAlergias();

    console.log('alergias', alergias);

    dispatch(setAlergias(
        {
            message: 'alergias obtenidas correctamente',
            alergias: alergias
        }
    ));
    return {
        ok: true,
        data: alergias
    };
};

export const startSaveAlergia = (alergia) => async (dispatch) => {
    console.log('startSaveAlergia');

    const response = await saveAlergia(alergia);

    console.log('response', response);
    const alergias = await getAlergias();
    dispatch(setAlergias(
        {
            message: 'Alergia guardada correctamente',
            alergias: alergias
        }
    ));
    return {
        ok: true,
        data: response
    };
}

export const startUpdateAlergia = (alergia) => async (dispatch) => {
    console.log('startUpdateAlergia');

    const response = await updateAlergia(alergia);

    console.log('RESPONSE UPDATEWE', response);
    const alergias = await getAlergias();

    dispatch(setAlergias(
        {
            message: 'Alergia actualizada correctamente',
            alergias: alergias
        }
    ));
    return {
        ok: true,
        data: response
    };
}

export const startDeleteAlergia = (id) => async (dispatch) => {
    console.log('startDeleteAlergia');

    const response = await deleteAlergia(id);

    console.log('response', response);
    const alergias = await getAlergias();
    dispatch(setAlergias(
        {
            message: 'Alergia eliminada correctamente',
            alergias: alergias
        }
    ));
    return {
        ok: true,
        data: response
    };
}

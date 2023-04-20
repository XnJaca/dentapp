import { deleteEnfermedad, getEnfermedades, saveEnfermedad, updateEnfermedad } from "../../api/requests/enfermedades/enfermedades_request";
import { startLoading, stopLoading } from "../loading/thunk";
import { setEnfermedades } from "./enfermedades_slice";


export const startGetEnfermedades = () => async (dispatch) => {
    console.log('startGetEnfermedades');
    const enfermedades = await getEnfermedades();

    console.log('enfermedades', enfermedades);

    dispatch(setEnfermedades(
        {
            message: 'Enfermedades obtenidas correctamente',
            enfermedades: enfermedades
        }
    ));
    return {
        ok: true,
        data: enfermedades
    };
};

export const startSaveEnfermedad = (enfermedad) => async (dispatch) => {
    console.log('startSaveEnfermedad');

    dispatch(startLoading());

    const response = await saveEnfermedad(enfermedad);

    console.log('response', response);
    const enfermedades = await getEnfermedades();
    dispatch(setEnfermedades(
        {
            message: 'Enfermedad guardada correctamente',
            enfermedades: enfermedades
        }
    ));
    dispatch(stopLoading());
    return {
        ok: true,
        data: response
    };
}

export const startUpdateEnfermedad = (enfermedad) => async (dispatch) => {
    console.log('startUpdateEnfermedad');

    dispatch(startLoading());

    const response = await updateEnfermedad(enfermedad);

    console.log('RESPONSE UPDATEWE', response);
    const enfermedades = await getEnfermedades();

    dispatch(setEnfermedades(
        {
            message: 'Enfermedad actualizada correctamente',
            enfermedades: enfermedades
        }
    ));

    dispatch(stopLoading());
    return {
        ok: true,
        data: response
    };
}

export const startDeleteEnfermedad = (id) => async (dispatch) => {
    console.log('startDeleteEnfermedad');

    const response = await deleteEnfermedad(id);

    console.log('response', response);
    const enfermedades = await getEnfermedades();
    dispatch(setEnfermedades(
        {
            message: 'Enfermedad eliminada correctamente',
            enfermedades: enfermedades
        }
    ));
    return {
        ok: true,
        data: response
    };
}
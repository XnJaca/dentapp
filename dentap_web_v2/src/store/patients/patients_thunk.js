import { setLoading, setPacientes } from "./patients_slice";
import { deletePatientService, getAllPacientes, savePatientService, updatePatientService } from "./service/patients_service";

export const getPacientes = () => async (dispatch) => {

    console.log('getPacientes');
    const response = await getAllPacientes();

    console.log('responsePacientes', response.pacientes);
    if (response.error == false) {
        dispatch(setPacientes(
            {
                pacientes: response.pacientes,
                message: response.message
            }
        ));
    } else {
        console.log(response.message);
    }
}

export const savePatient = (user) => async (dispatch) => {

    console.log('savePatient', user);
    dispatch(setLoading(true));
    // console.log('saveUser');
    const response = await savePatientService(user);
    // return;
    // console.log('response', response);

    if (response.error == false) {
        const data = await getAllPacientes();
        dispatch(setPacientes(
            {
                pacientes: data.pacientes,
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

export const updatePatient = (user) => async (dispatch) => {

    dispatch(setLoading(true));
    // console.log('updateUser');
    const response = await updatePatientService(user);

    // console.log('responseUpdateUser', response);
    if (response.error == false) {

        const patients = await getAllPacientes();
        // console.log('usuariossss', usuarios);
        dispatch(setPacientes(
            {
                pacientes: patients.pacientes,
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


export const deletePatient = (user) => async (dispatch) => {
    
    dispatch(setLoading(true));
    const response = await deletePatientService(user);

    // console.log('response', response);
    if (response.error == false) {
        const data = await getAllPacientes();
        dispatch(setPacientes(
            {
                pacientes: data.pacientes,
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

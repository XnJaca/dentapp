import { setAppoiments, setLoading } from "./appoiments_slice";
import { getAllAppoiments, saveAppoimentService } from "./services/appoiments_service";


export const getAppoiments = () => async (dispatch) => {

    console.log('getAppoiments');
    const response = await getAllAppoiments();

    console.log('responseAppoiments', response.appoiments);
    if (response.error == false) {
        dispatch(setAppoiments(
            {
                appoiments: response.appoiments,
                message: response.message
            }
        ));
    } else {
        console.log(response.message);
    }
}

export const saveAppoiment = (data) => async (dispatch) => {

    // "inicio_cita": "2023-04-27 15:00:00",
    // "fin_cita": "2023-04-27 15:30:00",
    // "confirmado": 0,
    // "medico_id": 3,
    // "paciente_id": 33,
    // "tratamiento_id": 2

    

    // console.log('saveAppoiment', json);
    dispatch(setLoading(true));

    const response = await saveAppoimentService(data);
    // return;
    // console.log('response', response);

    if (response.error == false) {
        const data = await getAllAppoiments();
        dispatch(setAppoiments(
            {
                appoiments: data.appoiments,
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




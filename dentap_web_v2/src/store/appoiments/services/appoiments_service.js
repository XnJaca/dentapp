import { EndPoint } from "../../../const";
import { FetchToApi } from "../../../utils/fetch_to_api";

export const getAllAppoiments = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.citas,
            method: 'GET'
        });
        console.log('RESPONSE APPOIMENT', response);
        return {
            error: false,
            message: response.message,
            appoiments: response.data
        };

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const saveAppoimentService = async (data) => {

    let json = {    
        "inicio_cita": data[0].value,
        "fin_cita": data[1].value,
        "confirmado": data[2].value,
        "paciente_id": data[3].value.id,
        "medico_id": data[4].value.id,
        "tratamiento_id": data[5].value.id
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.citas,
            method: 'POST',
            body: json
        });
        console.log('RESPONSE APPOIMENT', response);
        return {
            error: false,
            message: response.message,
            appoiments: response.data
        };

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}
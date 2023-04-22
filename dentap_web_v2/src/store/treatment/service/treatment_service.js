import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";


export const getAllTreatments = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tratamientos,
            method: 'GET'
        });
        return {
            error: false,
            message: response.message,
            data: response.data
        };

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}


export const saveTreatmentService = async (treatment, medicoId) => {
 
    let json = {
        'medico_id': medicoId,
        'tipo_id': treatment[0].value, 
        'detalle': treatment[1].value,
        'total_medicamento': treatment[2].value,
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tratamientos,
            method: 'POST',
            body: json
        });

        if (!response.success) {
            return {
                error: true,
                message: response.message
            }
        }


        return {
            error: false,
            message: response.message,
            data: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}


export const updateTreatmentService = async (treatment,medicoId) => {
    
    let json = {
        'medico_id': medicoId,
        'tipo_id': treatment[0].value, 
        'detalle': treatment[1].value,
        'total_medicamento': treatment[2].value,
    };
    try { 
        const response = await FetchToApi({
            endpoint: EndPoint.tratamientos + '/' + treatment[0].id,
            method: 'PUT',
            body: json
        });

        return {
            error: false,
            message: response.message,
            data: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const deleteTreatmentService = async (id) => {
    
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tratamientos + '/' + id,
            method: 'DELETE'
        });

        return {
            error: false,
            message: response.message,
            data: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}
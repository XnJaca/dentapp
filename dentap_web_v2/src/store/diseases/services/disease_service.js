import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";


export const getAllDiseases = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades,
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


export const saveDiseaseService = async (disease) => {
 
    let json = {
        'nombre': disease[0].value,
        'descripcion': disease[1].value, 
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades,
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


export const updateDiseaseService = async (disease) => {
    
    let json = {
        'nombre': disease[0].value,
        'descripcion': disease[1].value, 
    };
    try { 
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades + '/' + disease[0].id,
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

export const deleteDiseaseService = async (diseaseId) => {
    
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades + '/' + diseaseId,
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
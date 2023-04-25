import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";


export const getAllSpeciality = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.especialidades,
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


export const saveSpecialityService = async (speciality) => {
 
    let json = { 
        'descripcion': speciality[0].value,  
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.especialidades,
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


export const updateSpecialityService = async (speciality) => {
    
    let json = { 
        'descripcion': speciality[0].value,  
    };
    try { 
        const response = await FetchToApi({
            endpoint: EndPoint.especialidades + '/' + speciality[0].id,
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

export const deleteSpecialityService = async (id) => {
    
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.especialidades + '/' + id,
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
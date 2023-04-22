import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";


export const getAllAllergies = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.alergias,
            method: 'GET'
        });
        return {
            error: false,
            message: response.message,
            allergies: response.data
        };

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}


export const saveAllergieService = async (allergie) => {

    // console.log('saveUserService', user);
    let json = {
        'nombre': allergie[0].value,
        'descripcion': allergie[1].value, 
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.alergias,
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
            users: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}


export const updateAllergiesService = async (allergie) => {
    
    let json = {
        'nombre': allergie[0].value,
        'descripcion': allergie[1].value, 
    };
    try { 
        const response = await FetchToApi({
            endpoint: EndPoint.alergias + '/' + allergie[0].id,
            method: 'PUT',
            body: json
        });

        return {
            error: false,
            message: response.message,
            users: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const deleteAllergyService = async (allergieId) => {
    
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.alergias + '/' + allergieId,
            method: 'DELETE'
        });

        return {
            error: false,
            message: response.message,
            users: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}
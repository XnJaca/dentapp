import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";


export const getAllTreatmentsTypes = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tipos_tratamientos,
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
 
export const saveTreatmentTypeService = async (treatmentType) => {
 
    let json = { 
        'nombre': treatmentType[0].value, 
        'descripcion': treatmentType[1].value,
        'precio': treatmentType[2].value,
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tipos_tratamientos,
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

export const updateTreatmentTypeService = async (treatmentType) => {
    
    let json = {
        'nombre': treatmentType[0].value, 
        'descripcion': treatmentType[1].value,
        'precio': treatmentType[2].value,
    };
    try { 
        const response = await FetchToApi({
            endpoint: EndPoint.tipos_tratamientos + '/' + treatmentType[0].id,
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

export const deleteTreatmentTypeService = async (id) => {
    
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tipos_tratamientos + '/' + id,
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
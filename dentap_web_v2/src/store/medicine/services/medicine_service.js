import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";


export const getAllMedicines = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos,
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


export const saveMedicineService = async (medicine) => {
 
    let json = {
        'nombre': medicine[0].value,
        'descripcion': medicine[1].value, 
        'precio': medicine[2].value,
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos,
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


export const updateMedicineService = async (medicine) => {
    
    let json = {
        'nombre': medicine[0].value,
        'descripcion': medicine[1].value, 
        'precio': medicine[2].value,
    };
    try { 
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos + '/' + medicine[0].id,
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

export const deleteMedicineService = async (medicineId) => {
    
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos + '/' + medicineId,
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
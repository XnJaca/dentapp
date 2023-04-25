import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";

const getJson = (medic) => {
    return {
        "usuario": {
            'cedula': medic[0].value,
            'nombre': medic[1].value,
            'nombre_emer': medic[2].value,
            'apellido_1': medic[3].value,
            'apellido_2': medic[4].value,
            'email': medic[5].value,
            'pass': medic[6].value,
            'fecha_nacimiento': medic[7].value,
            'direccion': medic[8].value,
            'telefono': medic[9].value,
            'telefono_emer': medic[10].value,
            'genero_id': medic[11].value.id, 
            'estado': medic[13].value
        },
        "medico": {
            'especialidad_id': medic[14].value.id ?? medic[14].value,
            'precio_consulta': medic[15].value,
        },
        "tipo_usuario": {
            'tipo_id': medic[12].value.id ?? medic[12].value,
        },
    }; 
}


export const getAllMedics = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicos,
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
 
export const saveMedicService = async (medic) => { 
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicos,
            method: 'POST',
            body: getJson(medic)
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

export const updateMedicService = async (medic) => { 
    try { 
        const response = await FetchToApi({
            endpoint: EndPoint.medicos + '/' + medic[0].id,
            method: 'PUT',
            body: getJson(medic)
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

export const deleteMedicService = async (id) => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicos + '/' + id,
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


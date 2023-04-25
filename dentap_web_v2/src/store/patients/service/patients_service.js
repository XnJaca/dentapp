import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";

export const getAllPacientes = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.pacientes,
            method: 'GET'
        });
        return {
            error: false,
            message: response.message,
            pacientes: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const getJson = (user) => {
    return {
        "usuario": {
            'cedula': user[0].value,
            'nombre': user[1].value,
            'nombre_emer': user[2].value,
            'apellido_1': user[3].value,
            'apellido_2': user[4].value,
            'email': user[5].value,
            'pass': user[6].value,
            'fecha_nacimiento': user[7].value,
            'direccion': user[8].value,
            'telefono': user[9].value,
            'telefono_emer': user[10].value,
            'genero_id': user[11].value.id,
            'tipo_id': user[12].value.id,
            'estado': user[13].value
        },
        "tipo_usuario": {
            'tipo_id': user[12].value.id ?? user[12].value,
        },
        "paciente": {
            'tipo_sangre_id': user[14].value.id ?? user[14].value,
        },
        "alergias": user[15].value.map((alergia) => {
            return { "alergia_id": alergia.id };
        }),
        "enfermedades": user[16].value.map((enfermedad) => {
            return { "enfermedad_id": enfermedad.id };
        }),

    };

}
export const savePatientService = async (user) => {

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.pacientes,
            method: 'POST',
            body: getJson(user)
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

export const updatePatientService = async (user) => {

    console.log('updateUserService', user[0].id);
    // let json = {
    //     'cedula': user[0].value,
    //     'nombre': user[1].value,
    //     'nombre_emer': user[2].value,
    //     'apellido_1': user[3].value,
    //     'apellido_2': user[4].value,
    //     'email': user[5].value,
    //     'pass': user[6].value,
    //     'fecha_nacimiento': user[7].value,
    //     'direccion': user[8].value,
    //     'telefono': user[9].value,
    //     'telefono_emer': user[10].value,
    //     'genero_id': user[11].value,
    //     'estado': user[13].value,
    // };
    let json = getJson(user);
    // console.log('json', json);
    try {
        // console.log('updateUserService', user);
        const response = await FetchToApi({
            endpoint: EndPoint.pacientes + '/' + user[0].id,
            method: 'PUT',
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

export const deletePatientService = async (id) => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.pacientes + '/' + id,
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


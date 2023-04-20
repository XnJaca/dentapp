import { EndPoint } from "../../../const/endpoints"
import { FetchToApi } from "../../../utils/fetch_to_api"


export const getAllUsers = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.users,
            method: 'GET'
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

export const saveUserService = async (user) => {

    // console.log('saveUserService', user);
    let json = {
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
    };

    try {
        const response = await FetchToApi({
            endpoint: EndPoint.users,
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


export const updateUserService = async (user) => {

    let json = {
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
        'genero_id': user[11].value,
        'estado': user[13].value,
    };

    // console.log('json', json);
    try {
        // console.log('updateUserService', user);
        const response = await FetchToApi({
            endpoint: EndPoint.users + '/' + user[0].id,
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

export const deleteUserService = async (id) => {
    
        try {
            const response = await FetchToApi({
                endpoint: EndPoint.users + '/' + id,
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
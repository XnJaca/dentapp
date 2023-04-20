import { FetchToApi } from "../../../utils";
import { EndPoint } from "../../endpoints/endpoint";

export const getAlergias = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.alergias,
            method: 'GET',
        });
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}

export const saveAlergia = async (alergia) => {
    console.log('SaveAlergia', alergia);
    let json = {
        nombre: alergia[0].value,
        descripcion: alergia[1].value,
    };
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.alergias,
            method: 'POST',
            body: json
        });
        console.log('response', response);
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}

export const updateAlergia = async (alergia) => {
    console.log('UpdateAlergia', alergia);
    let json = {
        nombre: alergia[0].value,
        descripcion: alergia[0].value,
    };
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.alergias + '/' + alergia[0].id,
            method: 'PUT',
            body: json
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}

export const deleteAlergia = async (id) => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.alergias + '/' + id,
            method: 'DELETE',
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}
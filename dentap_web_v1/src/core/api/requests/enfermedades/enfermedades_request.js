import { FetchToApi } from "../../../utils";
import { EndPoint } from "../../endpoints/endpoint";

export const getEnfermedades = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades,
            method: 'GET',
        });
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}


export const saveEnfermedad = async (enfermedad) => {
    console.log('SaveEnfermedad', enfermedad);
    let json = {
        nombre: enfermedad[0].value,
        descripcion: enfermedad[1].value,
    };
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades,
            method: 'POST',
            body: json
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}

export const updateEnfermedad = async (enfermedad) => {
    console.log('UpdateEnfermedad', enfermedad);
    let json = {
        nombre: enfermedad[0].value,
        descripcion: enfermedad[1].value,
    };
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades + '/' + enfermedad[0].id,
            method: 'PUT',
            body: json
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}

export const deleteEnfermedad = async (id) => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.enfermedades + '/' + id,
            method: 'DELETE',
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}
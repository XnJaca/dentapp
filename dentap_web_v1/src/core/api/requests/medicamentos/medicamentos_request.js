import { FetchToApi } from "../../../utils";
import { EndPoint } from "../../endpoints/endpoint";

export const getMedicamentos = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos,
            method: 'GET',
        });
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}


export const saveMedicamento = async (medicamento) => {
    console.log('saveMedicamento', medicamento);
    let json = {
        nombre: medicamento[0].value,
        descripcion: medicamento[1].value,
        precio: medicamento[2].value,
    };
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos,
            method: 'POST',
            body: json
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}

export const updateMedicamento = async (medicamento) => {
    console.log('updateMedicamento', medicamento);
    let json = {
        nombre: medicamento[0].value,
        descripcion: medicamento[1].value,
        precio: medicamento[2].value,
    };
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos + '/' + medicamento[0].id,
            method: 'PUT',
            body: json
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}

export const deleteMedicamento = async (id) => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.medicamentos + '/' + id,
            method: 'DELETE',
        });
        
        return response.data
    } catch (error) {
        console.log('ERROR', error);;
        return error
    }
}
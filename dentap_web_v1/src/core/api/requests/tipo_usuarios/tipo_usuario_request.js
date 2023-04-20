import { FetchToApi } from "../../../utils";
import { EndPoint } from "../../endpoints/endpoint";

export const getTipoUsuarios = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tipoUsuarios,
            method: 'GET',
        });
        console.log('TIPO_USUARIOS', response.data);
        return response.data
    } catch (error) {
        console.log('ERROR', error);
        return error
    }
}
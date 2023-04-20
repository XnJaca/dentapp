import { FetchToApi } from "../../../utils";
import { EndPoint } from "../../endpoints/endpoint";


export const getHorarios = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.horarios,
            method: 'GET',
        });
        console.log('Horarios', response.data);
        return response.data
    } catch (error) {
        console.log('ERROR', error);
        return error
    }
}
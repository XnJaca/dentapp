import { FetchToApi } from "../../../utils";
import { EndPoint } from "../../endpoints/endpoint";


export const getGeneros = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.generos,
            method: 'GET',
        });
        console.log('GENEROS', response.data);
        return response.data
    } catch (error) {
        console.log('ERROR', error);
        return error
    }
}
import { EndPoint } from "../../../const/endpoints"
import { FetchToApi } from "../../../utils/fetch_to_api"


export const getAllGeneros = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.generos,
            method: 'GET'
        });
        return {
            error: false,
            message: response.message,
            generos: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

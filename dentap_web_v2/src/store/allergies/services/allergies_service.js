import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";


export const getAllAllergies = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.allergies,
            method: 'GET'
        });
        return {
            error: false,
            message: response.message,
            allergies: response.data
        };

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}
import { EndPoint } from "../../../const";
import { FetchToApi } from "../../../utils/fetch_to_api";

export const getAllAppoiments = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.citas,
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
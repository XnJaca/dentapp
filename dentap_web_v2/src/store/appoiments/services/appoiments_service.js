import { EndPoint } from "../../../const";
import { FetchToApi } from "../../../utils/fetch_to_api";

export const getAllAppoiments = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.citas,
            method: 'GET'
        });
        console.log('RESPONSE APPOIMENT', response);
        return {
            error: false,
            message: response.message,
            appoiments: response.data
        };

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}
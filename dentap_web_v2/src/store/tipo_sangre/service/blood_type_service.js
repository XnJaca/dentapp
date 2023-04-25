import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";

export const getAllBloodType = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tipo_sangre,
            method: 'GET'
        });

        // console.log('BLOODTYPE SERVICE RESPONSE', response);
        return {
            error: false,
            message: response.message,
            data: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

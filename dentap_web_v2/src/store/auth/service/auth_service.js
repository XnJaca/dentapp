import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../services/api/fetch_to_api";

export const LoginRequest = async ({ email, pass }) => {
    try {
        const data = await FetchToApi({
            endpoint: EndPoint.login,
            method: 'POST',
            body: { email, pass }
        });
        return data
    } catch (error) {
        return error
    }
}
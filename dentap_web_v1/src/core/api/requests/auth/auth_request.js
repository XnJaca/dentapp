import { FetchToApi } from "../../../utils/"
import { EndPoint } from "../../endpoints/endpoint"

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
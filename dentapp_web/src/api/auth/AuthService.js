import { login } from "../EndPoints";
import { FetchToApi } from "../FetchToApi";

export const ReqLogin = async ({ email, pass }) => {
    try {
        const data = await FetchToApi({
            endpoint: login,
            method: 'POST',
            body: { email, pass }
        });


        return data;
    } catch (error) {
        return error;
    }
}

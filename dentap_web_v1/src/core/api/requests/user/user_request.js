import { FetchToApi } from "../../../utils/"
import { EndPoint } from "../../endpoints/endpoint"

export const SaveUserRequest = async ({user}) => {
    try {
        // log('SaveUserRequest', user);
        const data = await FetchToApi({
            endpoint: EndPoint.users,
            method: 'POST',
            body: { user }
        });
        return data
    } catch (error) {
        return error
    }
}
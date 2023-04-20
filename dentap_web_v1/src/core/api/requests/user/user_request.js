import { FetchToApi } from "../../../utils/"
import { EndPoint } from "../../endpoints/endpoint"

export const SaveUserRequest = async ({ user }) => {
    try {
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


export const GetUserByRolRequest = async ({ rol }) => {
    try {

        let endpoint = "";
        switch (rol) {
            case 'medico':
                endpoint = EndPoint.medicos;
                break;
        }

        const data = await FetchToApi({
            endpoint: endpoint,
            method: 'GET',
            body: { rol }
        });
        return data
    } catch (error) {
        return error
    }
}
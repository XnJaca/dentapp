import { EndPoint } from "../../../const/endpoints";
import { FetchToApi } from "../../../utils/fetch_to_api";

export const getAllTipoUsuarios = async () => {
    try {
        const response = await FetchToApi({
            endpoint: EndPoint.tipoUsuarios,
            method: 'GET'
        });
        return {
            error: false,
            message: response.message,
            tipo_usuarios: response.data
        };
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

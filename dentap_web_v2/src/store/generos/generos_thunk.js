import { setGeneros } from "./generos_slice";
import { getAllGeneros } from "./service/generos_service";


export const getGeneros = () => async (dispatch) => {

    const response = await getAllGeneros();
    console.log('responseGeneros', response);

    if (response.error == false) {
        dispatch(setGeneros(
            {
                generos: response.generos,
                message: response.message
            }
        ));
    } else {
        console.log(response.message);
    }
}
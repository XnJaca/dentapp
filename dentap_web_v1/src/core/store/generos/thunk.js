import { getGeneros } from "../../api/requests/genero/";
import { loading, setGeneros } from "./generos_slice";


export const startGetGeneros = () => async (dispatch) => {

    console.log('startGetGeneros');
    const generos = await getGeneros();
    console.log('generos', generos);
    dispatch(setGeneros(
        {
            message: 'Generos cargados correctamente',
            generos: generos
        }
    ));
    return {
        ok: true,
        data: generos
    };
}